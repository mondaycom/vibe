export enum LoaderColors {
  PRIMARY = "var(--primary-color)",
  SECONDARY = "var(--secondary-text-color)",
  ON_PRIMARY = "var(--text-color-on-inverted)",
  DARK = "var(--primary-text-color)"
}

export const LoaderSizes = {
  XS: 16,
  SMALL: 24,
  MEDIUM: 40,
  LARGE: 64
};

export type LoaderSize = typeof LoaderSizes | number;
// export type LoaderSize = typeof LoaderSizes[keyof typeof LoaderSizes];

// export type LoaderSize = keyof typeof LOADER_SIZES;
