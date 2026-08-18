import type { ThemeProviderProps } from "@vibe/core";
import type { SystemTheme, ThemeFamily, TokenOverrides } from "../types";
import { pickThemeProviderColors } from "./themeColorKeys";

type ThemeConfig = NonNullable<ThemeProviderProps["themeConfig"]>;
const SYSTEM_THEMES: SystemTheme[] = ["light", "dark", "black"];

export function buildThemeConfig(
  overrides: TokenOverrides,
  themeFamily: ThemeFamily
): ThemeConfig | undefined {
  const colors: ThemeConfig["colors"] = {};
  const familyColors = overrides.colors[themeFamily] ?? {};

  for (const theme of SYSTEM_THEMES) {
    const themeColors = familyColors[theme];
    if (!themeColors) continue;

    const eligible = pickThemeProviderColors(themeColors);
    if (Object.keys(eligible).length > 0) {
      colors[theme] = eligible;
    }
  }

  if (Object.keys(colors).length === 0) return undefined;

  return {
    name: "facelift-custom-theme",
    colors,
  };
}
