export const BASE_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
} as const;

export const SIZES = { XXS: "xxs", XS: "xs", ...BASE_SIZES } as const;

export const DialogPositions = {
  LEFT: "left",
  LEFT_START: "left-start",
  LEFT_END: "left-end",
  RIGHT: "right",
  RIGHT_START: "right-start",
  RIGHT_END: "right-end",
  TOP: "top",
  TOP_START: "top-start",
  TOP_END: "top-end",
  BOTTOM: "bottom",
  BOTTOM_START: "bottom-start",
  BOTTOM_END: "bottom-end"
} as const;
