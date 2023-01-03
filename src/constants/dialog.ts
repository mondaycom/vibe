export enum JustifyType {
  START = "start",
  CENTER = "center",
  END = "end"
}

export enum HideShowEvent {
  CLICK = "click",
  CLICK_OUTSIDE = "clickoutside",
  ESCAPE_KEY = "esckey",
  TAB_KEY = "tab",
  MOUSE_ENTER = "mouseenter",
  MOUSE_LEAVE = "mouseleave",
  ENTER = "enter",
  MOUSE_DOWN = "mousedown",
  FOCUS = "focus",
  BLUR = "blur",
  CONTENT_CLICK = "onContentClick"
}

export enum AnimationType {
  OPACITY_AND_SLIDE = "opacity-and-slide",
  EXPAND = "expand"
}

export type DialogOffset = {
  main?: number;
  secondary?: number;
};
