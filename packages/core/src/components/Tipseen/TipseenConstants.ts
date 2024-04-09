import { ButtonProps } from "../Button/Button";
import { ElementContent } from "../../types/ElementContent";

export const SUBMIT_BUTTON_TEXT = "Submit";
export const DISMISS_BUTTON_TEXT = "Dismiss";
export const TIPSEEN_CLOSE_BUTTON_TEST_ID = "close-tipseen";
export const TIPSEEN_CLOSE_BUTTON_ARIA_LABEL = "Close";
export enum TipseenCloseButtonTheme {
  LIGHT = "light",
  DARK = "dark",
  FIXED_LIGHT = "fixed-light",
  FIXED_DARK = "fixed-dark"
}

export enum TipseenColor {
  PRIMARY = "primary",
  INVERTED = "inverted"
}

/**
 * @deprecated
 */
export type ButtonPropsBackwardCompatible = ButtonProps & { content?: ElementContent };
