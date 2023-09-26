export enum SystemTheme {
  LIGHT = "light",
  DARK = "dark",
  BLACK = "black",
  HACKER = "hacker"
}

// Colors which are eligible for theming
export enum Color {
  primaryColor = "primary-color",
  primaryHoverColor = "primary-hover-color",
  primarySelectedColor = "primary-selected-color",
  primarySelectedHoverColor = "primary-selected-hover-color",
  primarySelectedOnSecondaryColor = "primary-selected-on-secondary-color",
  brandColor = "brand-color",
  brandHoverColor = "brand-hover-color",
  brandSelectedColor = "brand-selected-color",
  brandSelectedHoverColor = "brand-selected-hover-color",
  textColorOnPrimary = "text-color-on-primary",
  textColorOnBrand = "text-color-on-brand",
  surfaceColor = "surfce-color" // not vibe color
}

export type Theme = {
  name: string;
  colors: SystemThemeColorMap;
};

type SystemThemeColorMap = {
  [key in SystemTheme]?: ColorTokenValueMap;
};

type ColorTokenValueMap = ColorTokenValue & BrandColorTokenValueMap;

export type BrandColorTokenValueMap = {
  brandColors?: ColorTokenValue;
};

export type ColorTokenValue = {
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
