export enum SystemTheme {
  LIGHT = "light",
  DARK = "dark",
  BLACK = "black",
  HACKER = "hacker"
}

// Colors which are eligible for theming
export enum Color {
  primaryColor = "primary-color",
  primaryHoverColor = "primary-hover-color"
}

export type Theme = {
  name: string;
  colors: SystemThemeColorMap;
};

type SystemThemeColorMap = {
  [key in SystemTheme]?: ColorTokenValueMap;
};

type ColorTokenValueMap = {
  [key in Color]?: string;
};

export const SystemThemeClassMap: SystemThemeClassMapType = {
  [SystemTheme.LIGHT]: "light-app-theme",
  [SystemTheme.DARK]: "dark-app-theme",
  [SystemTheme.BLACK]: "black-app-theme",
  [SystemTheme.HACKER]: "hacker_theme-app-theme"
};

type SystemThemeClassMapType = {
  [key in SystemTheme]: string;
};
