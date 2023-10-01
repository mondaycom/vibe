import { Theme, ThemeColorTokenValueMap, SystemTheme, SystemThemeClassMap } from "./ThemeProviderConstants";

const generateCss = (object: ThemeColorTokenValueMap, stack: string, parentSelector: string) => {
  for (const key of Object.keys(object)) {
    if (typeof object[key as keyof ThemeColorTokenValueMap] === "string") {
      stack += `--${key}: ${object[key as keyof ThemeColorTokenValueMap]};`;
    }
  }

  if (stack !== "") {
    stack = parentSelector + " {" + stack + "}";
  }

  for (const key of Object.keys(object)) {
    if (typeof object[key as keyof ThemeColorTokenValueMap] === "object") {
      const selector = `${parentSelector} .${key}`;
      stack +=
        "\n" + generateCss(object[key as keyof ThemeColorTokenValueMap] as ThemeColorTokenValueMap, "", selector);
    }
  }

  return stack;
};

export const shouldGenerateTheme = (theme: Theme) => {
  return !!theme?.colors;
};

export const generateThemeCssOverride = (theme: Theme) => {
  if (!shouldGenerateTheme(theme)) {
    return null;
  }

  let css = "";
  for (const systemTheme of Object.keys(theme.colors) as SystemTheme[]) {
    css += generateCss(theme.colors[systemTheme], "", `.${SystemThemeClassMap[systemTheme]} .${theme.name}`) + "\n";
  }

  return css;
};
