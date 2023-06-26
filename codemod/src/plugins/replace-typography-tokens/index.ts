import { Plugin } from "postcss";
import { replaceTokensPlugin } from "../replace-tokens";

const TYPOGRAPHY_TOKENS_INFO = [
  { from: "font-h1", to: "font-h1-normal" },
  { from: "font-h2", to: "font-h2-normal" },
  { from: "font-h3", to: "font-h2-light" },
  { from: "font-h4", to: "font-h3-normal" },
  { from: "font-h5", to: "font-text-bold" },
  { from: "font-paragraph", to: "font-text-medium-normal" },
  { from: "font-general-label", to: "font-text-small-normal" },
  { from: "font-subtext", to: "font-text-small-normal" }
];

export const replaceTypographyTokensPlugin: Plugin = {
  postcssPlugin: "replace-typography-tokens",
  Once(root) {
    replaceTokensPlugin(root, TYPOGRAPHY_TOKENS_INFO);
  }
};
