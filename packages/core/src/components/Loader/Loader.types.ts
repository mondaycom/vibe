export type LoaderColors = "primary" | "secondary" | "onPrimary" | "dark";

export type LoaderSizes = "xs" | "small" | "medium" | "large";

export type LoaderSize = LoaderSizes | number;

export const mapSizesToLoaderSize: Record<LoaderSizes, number> = {
  xs: 16,
  small: 24,
  medium: 40,
  large: 64
};

export const mapLoaderColorsToColors: Record<LoaderColors, string> = {
  primary: "primary-color",
  secondary: "secondary-text-color",
  onPrimary: "text-color-on-inverted",
  dark: "primary-text-color"
};
