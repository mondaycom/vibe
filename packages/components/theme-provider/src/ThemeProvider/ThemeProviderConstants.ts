import { type SystemTheme, type ThemeColor } from "./ThemeProvider.types";

export type Theme = {
  /**
   * The name of the theme - name of css class that will be added to the children - should be unique
   */
  name: string;
  colors: SystemThemeColorMap;
};

type SystemThemeColorMap = {
  [key in SystemTheme]?: ThemeColorTokenValueMap;
};

export type ThemeColorTokenValueMap = ThemeColorTokenValue | ThemeCustomClassValue;

export type ThemeColorTokenValue = {
  [key in ThemeColor]?: string;
};

type ThemeCustomClassValue = {
  [key: string]: ThemeColorTokenValue | ThemeCustomClassValue;
};

export const SystemThemeClassMap: SystemThemeClassMapType = {
  light: "light-app-theme",
  dark: "dark-app-theme",
  black: "black-app-theme"
};

type SystemThemeClassMapType = {
  [key in SystemTheme]: string;
};
