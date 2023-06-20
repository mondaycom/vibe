import { Plugin } from "postcss";
import { replaceTypographyTokensPlugin } from "./replace-typography-tokens";
export const plugins: Map<string, Plugin> = new Map<string, Plugin>([
  ["replace-typography-tokens", replaceTypographyTokensPlugin]
]);
