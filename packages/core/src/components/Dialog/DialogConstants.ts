// Backward compatibility constants for usePopover and other legacy usage
export const DialogPlacement = {
  RIGHT: "right" as const,
  RIGHT_START: "right-start" as const,
  RIGHT_END: "right-end" as const,
  LEFT: "left" as const,
  LEFT_START: "left-start" as const,
  LEFT_END: "left-end" as const
} as const;

// For backwards compatibility - export enums with Enum suffix
export const DialogPositionEnum = {
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

export const DialogTriggerEventEnum = {
  CLICK: "click",
  CLICK_OUTSIDE: "clickoutside",
  ESCAPE_KEY: "esckey",
  TAB_KEY: "tab",
  MOUSE_ENTER: "mouseenter",
  MOUSE_LEAVE: "mouseleave",
  ENTER: "enter",
  MOUSE_DOWN: "mousedown",
  FOCUS: "focus",
  BLUR: "blur",
  CONTENT_CLICK: "onContentClick",
  CONTEXT_MENU: "contextmenu"
} as const;

export const DialogSizeEnum = {
  NONE: "none",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
} as const;

export const DialogAnimationTypeEnum = {
  OPACITY_AND_SLIDE: "opacity-and-slide",
  EXPAND: "expand"
} as const;

// Note: DialogPlacementEnum is an alias for DialogPlacement for backward compatibility
export { DialogPlacement as DialogPlacementEnum };