export const BASE_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
} as const;

export type BASE_SIZES_VALUES = typeof BASE_SIZES[keyof typeof BASE_SIZES];

export const BASE_SIZES_WITH_NONE = { NONE: "none", ...BASE_SIZES };

export const SIZES = { XXS: "xxs", XS: "xs", ...BASE_SIZES } as const;

export enum Sizes {
  XXS = "xxs",
  XS = "xs",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}

export type SIZES_VALUES = typeof SIZES[keyof typeof SIZES];
