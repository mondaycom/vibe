export const BasePosition = {
  LEFT: "left",
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom"
} as const;

export const DialogPosition = {
  ...BasePosition,
  LEFT_START: "left-start",
  LEFT_END: "left-end",
  RIGHT_START: "right-start",
  RIGHT_END: "right-end",
  TOP_START: "top-start",
  TOP_END: "top-end",
  BOTTOM_START: "bottom-start",
  BOTTOM_END: "bottom-end"
} as const;
