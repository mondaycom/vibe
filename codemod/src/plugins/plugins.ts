import { Plugin } from "postcss";
import { replaceTypographyTokensPlugin } from "./replace-typography-tokens";
const PLUGIN_ARRAY = [replaceTypographyTokensPlugin];
export const plugins: Map<string, Plugin> = new Map<string, Plugin>(
  PLUGIN_ARRAY.map(plugin => [plugin.postcssPlugin, plugin])
);
