export const BASE_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
} as const;

export const BASE_SIZES_WITH_NONE = { NONE: "none", ...BASE_SIZES };

export const SIZES = { XXS: "xxs", XS: "xs", ...BASE_SIZES } as const;

export enum BaseSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}

export enum Sizes {
  XXS = "xxs",
  XS = "xs",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}

export type SIZES_VALUES = (typeof SIZES)[keyof typeof SIZES];
