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

export const shouldGenerateTheme = (themeConfig: Theme) => {
  return !!themeConfig?.colors && !!themeConfig?.name;
};

export const generateThemeCssOverride = (themeConfig: Theme, themeClassSpecifier: string) => {
  if (!shouldGenerateTheme(themeConfig)) {
    return null;
  }

  let css = "";
  for (const systemTheme of Object.keys(themeConfig.colors) as SystemTheme[]) {
    css +=
      generateCss(
        themeConfig.colors[systemTheme],
        "",
        `.${SystemThemeClassMap[systemTheme]} .${themeClassSpecifier}.${themeConfig.name}`
      ) + "\n";
  }

  return css;
};

export const generateRandomAlphaString = (length = 6) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

const APP_THEME_SUFFIX = "-app-theme";

const isAppThemeClassName = (className: string) => {
  return className.endsWith(APP_THEME_SUFFIX);
};

export const addAppThemeSuffix = (systemTheme: SystemTheme) => {
  return `${systemTheme}${APP_THEME_SUFFIX}`;
};

export const getBodySystemThemeClassName = () => {
  const classList = document.body.classList;
  for (const className of Array.from(classList)) {
    if (isAppThemeClassName(className)) {
      return className;
    }
  }
  return null;
};

export const isAnySystemThemeClassNameOnBody = () => {
  const bodySystemThemeClassName = getBodySystemThemeClassName();
  return !!bodySystemThemeClassName;
};

export const addSystemThemeClassNameToBody = (systemTheme: SystemTheme) => {
  document.body.classList.add(addAppThemeSuffix(systemTheme));
};

export const removeSystemThemeClassNameFromBody = (systemTheme: SystemTheme) => {
  document.body.classList.remove(addAppThemeSuffix(systemTheme));
};
