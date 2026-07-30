import type { ThemeProviderProps } from "@vibe/core";
import type { SystemTheme, TokenOverrides } from "../types";
import { pickThemeProviderColors } from "./themeColorKeys";

type ThemeConfig = NonNullable<ThemeProviderProps["themeConfig"]>;
const SYSTEM_THEMES: SystemTheme[] = ["light", "dark", "black"];

export function buildThemeConfig(overrides: TokenOverrides): ThemeConfig | undefined {
  const colors: ThemeConfig["colors"] = {};

  for (const theme of SYSTEM_THEMES) {
    const themeColors = overrides.colors[theme];
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
