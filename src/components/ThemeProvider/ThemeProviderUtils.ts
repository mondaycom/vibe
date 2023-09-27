import { Theme, ColorTokenValueMap, SystemTheme, SystemThemeClassMap } from "./ThemeProviderConstants";

const generateCss = (object: ColorTokenValueMap, stack: string, parentSelector: string) => {
  for (const key of Object.keys(object)) {
    if (typeof object[key as keyof ColorTokenValueMap] === "string") {
      stack += `--${key}: ${object[key as keyof ColorTokenValueMap]};`;
    }
  }

  if (stack !== "") {
    stack = parentSelector + " {" + stack + "}";
  }

  for (const key of Object.keys(object)) {
    if (typeof object[key as keyof ColorTokenValueMap] === "object") {
      const selector = `${parentSelector}.${key}`;
      stack += "\n" + generateCss(object[key as keyof ColorTokenValueMap] as ColorTokenValueMap, "", selector);
    }
  }

  return stack;
};

export const generateThemeCssOverride = (theme: Theme) => {
  if (!theme.colors) {
    return null;
  }

  let css = "";
  for (const systemTheme of Object.keys(theme.colors) as SystemTheme[]) {
    css += generateCss(theme.colors[systemTheme], "", `.${SystemThemeClassMap[systemTheme]} .${theme.name}`) + "\n";
  }

  console.log("### css", css);
  return css;
};
