import * as postcss from "postcss";
import { replaceTokensPlugin } from "../replace-tokens";

type MixinByFontSizeData = {
  weight: string[];
  lineHeight: string[];
  mixinName: string;
  mixinParams: string[];
};
const TYPOGRAPHY_TOKENS_INFO = [
  { from: "font-h1", to: "vibe-heading", params: ["h1", "normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-h2", to: "vibe-heading", params: ["h2", "normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-h3", to: "vibe-heading", params: ["h2", "light"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-h4", to: "vibe-heading", params: ["h3", "normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-h5", to: "vibe-text1", params: ["bold"], import: "~monday-ui-style/dist/mixins" },
  { from: "paragraph-h6", to: "vibe-text", params: ["normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-general-label", to: "vibe-text", params: ["normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-subtext", to: "vibe-text", params: ["normal"], import: "~monday-ui-style/dist/mixins" }
];

const FONT_SIZE_TO_MIXIN = new Map<string, MixinByFontSizeData>([
  [
    "font-size-h1",
    {
      weight: ["var(--font-weight-bold)", "500"],
      lineHeight: ["var(--font-line-height-h1)", "var(--font-line-height-60)", "42px"],
      mixinName: "vibe-title",
      mixinParams: ["h1", "normal"]
    }
  ],
  [
    "font-size-h2",
    {
      weight: ["var(--font-weight-bold)", "500"],
      lineHeight: ["var(--font-line-height-h2)", "var(--font-line-height-60)", "42px"],
      mixinName: "vibe-title",
      mixinParams: ["h2", "normal"]
    }
  ],
  [
    "font-size-h3",
    {
      weight: ["var(--font-weight-bold)", "500"],
      lineHeight: ["var(--font-line-height-h3)", "var(--font-line-height-60)", "42px"],
      mixinName: "vibe-title",
      mixinParams: ["h2", "light"]
    }
  ],
  [
    "font-size-h4",
    {
      weight: ["var(--font-weight-bold)", "500"],
      lineHeight: ["var(--font-line-height-h4)", "var(--font-line-height-60)", "42px"],
      mixinName: "vibe-title",
      mixinParams: ["h3", "normal"]
    }
  ],
  [
    "font-size-h5",
    {
      weight: ["var(--font-weight-bold)", "500"],
      lineHeight: ["var(--font-line-height-h5)", "var(--font-line-height-60)", "42px"],
      mixinName: "vibe-text",
      mixinParams: ["medium", "normal"]
    }
  ],
  [
    "font-size-general-label",
    {
      weight: ["var(--font-weight-bold)", "500"],
      lineHeight: ["var(--font-line-height-h1)", "var(--font-line-height-60)", "42px"],
      mixinName: "vibe-text",
      mixinParams: ["medium", "normal"]
    }
  ],
  [
    "font-size-paragraph",
    {
      weight: ["var(--font-weight-bold)", "500"],
      lineHeight: ["var(--font-line-height-paragraph)", "var(--font-line-height-60)", "42px"],
      mixinName: "vibe-text",
      mixinParams: ["small", "normal"]
    }
  ],
  [
    "font-size-subtext",
    {
      weight: ["var(--font-weight-bold)", "500"],
      lineHeight: ["var(--font-line-height-subtext)", "var(--font-line-height-60)", "42px"],
      mixinName: "vibe-text",
      mixinParams: ["small", "normal"]
    }
  ]
]);
export const replaceTypographyTokensPlugin: postcss.Plugin = {
  postcssPlugin: "replace-typography-tokens",
  Once(root) {
    // If implementation include font declaration token, replace it with the new mixin
    replaceTokensPlugin(root, TYPOGRAPHY_TOKENS_INFO);

    // If implementation use different tokens for font-size, font-family, line-height, font-weight, replace them with mixin
    applyMixinsToSubTokensDeclarations(root);
  }
};

function applyMixinsToSubTokensDeclarations(root) {
  // Traverse the AST to find font-size declarations
  root.walkDecls(rule => {
    const fontSizeDecl = rule.nodes.find(node => node.prop === "font-size");
    const fontWeightDecl = rule.nodes.find(node => node.prop === "font-weight");
    const lineHeightDecl = rule.nodes.find(node => node.prop === "line-height");

    if (fontSizeDecl && fontSizeDecl.value && FONT_SIZE_TO_MIXIN.has(fontSizeDecl.value.trim())) {
      const mixinProperties = FONT_SIZE_TO_MIXIN.get(fontSizeDecl.value.trim());

      // Check if font-weight and line-height declarations are also present
      if (fontWeightDecl === mixinProperties.weight && lineHeightDecl === mixinProperties.lineHeight) {
        const newProp = postcss.decl({
          prop: "",
          value: `@include ${mixinProperties.mixinName}`
        });

        // Replace font-size, font-weight, and line-height declarations with the new mixin
        fontSizeDecl.remove();
        fontWeightDecl.remove();
        lineHeightDecl.remove();
        rule.append(newProp);
      }
    }
  });

  // Generate the updated CSS
  const updatedCSS = root.toString();
  return updatedCSS;
}
