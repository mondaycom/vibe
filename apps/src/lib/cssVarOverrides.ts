import type { CSSProperties } from "react";
import type { SystemTheme, ThemeFamily, TokenOverrides } from "../types";

export type CssVarStyle = CSSProperties & Record<`--${string}`, string>;

export function buildCssVarStyle(
  overrides: TokenOverrides,
  systemTheme: SystemTheme,
  themeFamily: ThemeFamily
): CssVarStyle {
  const themeColors = overrides.colors[themeFamily]?.[systemTheme] ?? {};
  const colorVars = Object.fromEntries(
    Object.entries(themeColors).map(([key, value]) => [`--${key}`, value])
  ) as CssVarStyle;

  return {
    ...colorVars,
    ...overrides.radius,
    ...overrides.spacing,
    ...overrides.typography,
  } as CssVarStyle;
}
