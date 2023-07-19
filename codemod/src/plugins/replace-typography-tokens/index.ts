import { Plugin } from "postcss";
import { replaceTokensPlugin } from "../replace-tokens";

const TYPOGRAPHY_TOKENS_INFO = [
  { from: "font-h1", to: "vibe-heading", params: ["h1", "normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-h2", to: "vibe-heading", params: ["h2", "normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-h3", to: "vibe-heading", params: ["h2", "light"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-h4", to: "vibe-heading", params: ["h3", "normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-h5", to: "vibe-text1", params: ["1", "bold"], import: "~monday-ui-style/dist/mixins" },
  { from: "paragraph-h6", to: "vibe-text", params: ["1", "normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-general-label", to: "vibe-text", params: ["2", "normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-subtext", to: "vibe-text", params: ["2", "normal"], import: "~monday-ui-style/dist/mixins" }
];

export const replaceTypographyTokensPlugin: Plugin = {
  postcssPlugin: "replace-typography-tokens",
  Once(root) {
    // If implementation include font declaration token, replace it with the new mixin
    replaceTokensPlugin(root, TYPOGRAPHY_TOKENS_INFO);

    // If implementation use different tokens for font-size, font-family, line-height, font-weight,
  }
};
