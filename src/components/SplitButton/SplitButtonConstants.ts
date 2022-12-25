// Constants
import { keyCodes } from "../../constants";
import { HideShowEvent } from "../Dialog/consts/dialog-show-hide-event";

export const DIALOG_MOVE_BY = { main: 8, secondary: 0 };
export const DEFAULT_DIALOG_SHOW_TRIGGER = [HideShowEvent.CLICK];
export const DEFAULT_DIALOG_HIDE_TRIGGER = [HideShowEvent.CLICK_OUTSIDE, HideShowEvent.CLICK, HideShowEvent.ESCAPE_KEY];
export const SECONDARY_BUTTON_WRAPPER_CLASSNAME = "monday-style-split-button__secondary-button-wrapper";
export const EMPTY_ARR: string[] = [];

export const ENTER_KEYS = [keyCodes.ENTER];

export enum SplitButtonSecondaryContentPosition {
  BOTTOM_START = "bottom-start",
  BOTTOM_MIDDLE = "bottom",
  BOTTOM_END = "bottom-end"
}

export const SECONDARY_BUTTON_ARIA_LABEL = "additional actions";
