export type DialogType = "modal" | "popover";

export type DialogSize = "none" | "small" | "medium" | "large";

export type DialogPosition =
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end"
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end";

export type DialogTriggerEvent =
  | "click"
  | "clickoutside"
  | "esckey"
  | "tab"
  | "mouseenter"
  | "mouseleave"
  | "enter"
  | "mousedown"
  | "focus"
  | "blur"
  | "onContentClick"
  | "contextmenu";

export type DialogAnimationType = "opacity-and-slide" | "expand";

export type DialogStartingEdge = "top" | "bottom";

export type DialogOffset = {
  main?: number;
  secondary?: number;
};

export type DialogEvent = React.MouseEvent | React.KeyboardEvent | KeyboardEvent | React.FocusEvent | CustomEvent;
