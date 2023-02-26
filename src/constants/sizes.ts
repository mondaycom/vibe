export const BASE_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
} as const;

export const BASE_SIZES_WITH_NONE = { NONE: "none", ...BASE_SIZES };

export const SIZES = { XXS: "xxs", XS: "xs", ...BASE_SIZES } as const;
