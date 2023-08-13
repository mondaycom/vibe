import * as postcss from "postcss";
import { replaceTokensWithMixins } from "../replace-tokens-with-mixins";
import { getCssVariableName } from "../../helpers/get-css-variable-name";
import { addImportsIfNeeded } from "../add-imports-if-needed";

type MixinByFontSizeData = {
  weight: string[];
  lineHeight: string[];
  mixinName: string;
  mixinParams: string[];
};

const importStatement = "~monday-ui-style/dist/mixins";
const TYPOGRAPHY_TOKENS_INFO = [
  { from: "font-h1", to: "vibe-heading", params: ["h1", "normal"], importStatement },
  { from: "font-h2", to: "vibe-heading", params: ["h2", "normal"], importStatement },
  { from: "font-h3", to: "vibe-heading", params: ["h2", "light"], importStatement },
  { from: "font-h4", to: "vibe-heading", params: ["h3", "normal"], importStatement },
  { from: "font-h5", to: "vibe-text", params: ["text-1", "bold"], importStatement },
  {
    from: "paragraph-h6",
    to: "vibe-text",
    params: ["text-1", "normal"],
    importStatement: "~monday-ui-style/dist/mixins"
  },
  {
    from: "font-general-label",
    to: "vibe-text",
    params: ["text-2", "normal"],
    importStatement: "~monday-ui-style/dist/mixins"
  },
  {
    from: "font-subtext",
    to: "vibe-text",
    params: ["text-2", "normal"],
    importStatement: "~monday-ui-style/dist/mixins"
  }
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
    replaceTokensWithMixins(root, TYPOGRAPHY_TOKENS_INFO);

    // If implementation use different tokens for font-size, font-family, line-height, font-weight, replace them with mixin
    applyMixinsToSubTokensDeclarations(root);
  }
};

function applyMixinsToSubTokensDeclarations(root) {
  // Traverse the AST to find font-size declarations
  root.walkDecls(decl => {
    const variableName = getCssVariableName(decl.value.trim());

    if (decl.prop === "font-size" && FONT_SIZE_TO_MIXIN.has(variableName)) {
      const parentRule = decl.parent; // Get the rule containing the declaration
      const mixinProperties = FONT_SIZE_TO_MIXIN.get(variableName);

      const fontWeightDecl = parentRule.nodes.find(node => node.prop === "font-weight");
      const lineHeightDecl = parentRule.nodes.find(node => node.prop === "line-height");

      // Check if font-weight and line-height declarations are also present and match the properties
      if (
        fontWeightDecl &&
        mixinProperties.weight.includes(fontWeightDecl.value) &&
        lineHeightDecl &&
        mixinProperties.lineHeight.includes(lineHeightDecl.value)
      ) {
        // Create a new PostCSS at-rule containing the mixin include
        const mixinInclude = postcss.atRule({
          name: "include",
          params: ` ${mixinProperties.mixinName}(${mixinProperties.mixinParams.join(", ")})`
        });

        // Remove the original declarations
        decl.remove();
        fontWeightDecl.remove();
        lineHeightDecl.remove();

        // Append the new mixin to the rule
        parentRule.append(mixinInclude);

        addImportsIfNeeded(root, [importStatement]);
      }
    }
  });

  // Generate the updated CSS
  const updatedCSS = root.toString();
  return updatedCSS;
}
