import type { ThemeColor } from "@vibe/core";

export const THEME_PROVIDER_COLOR_KEYS: ThemeColor[] = [
  "primary-color",
  "primary-hover-color",
  "primary-selected-color",
  "primary-selected-hover-color",
  "primary-selected-on-secondary-color",
  "text-color-on-primary",
  "brand-color",
  "brand-hover-color",
  "brand-selected-color",
  "brand-selected-hover-color",
  "text-color-on-brand",
];

export function pickThemeProviderColors(
  colors: Record<string, string>
): Partial<Record<ThemeColor, string>> {
  const result: Partial<Record<ThemeColor, string>> = {};
  for (const key of THEME_PROVIDER_COLOR_KEYS) {
    if (colors[key]) {
      result[key] = colors[key];
    }
  }
  return result;
}
