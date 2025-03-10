import { SIZES } from "../../constants/sizes";

/**
 * @deprecated
 */
export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary"
}

/**
 * @deprecated
 */
export enum ButtonColor {
  PRIMARY = "primary",
  POSITIVE = "positive",
  NEGATIVE = "negative",
  INVERTED = "inverted",
  ON_PRIMARY_COLOR = "on-primary-color",
  ON_INVERTED_BACKGROUND = "on-inverted-background",
  BRAND = "brand",
  FIXED_LIGHT = "fixed-light",
  FIXED_DARK = "fixed-dark"
}

export type Size = (typeof SIZES)[keyof typeof SIZES];

export const BUTTON_KIND_CLASS_NAMES = {
  PRIMARY: ""
};

export const BUTTON_ICON_SIZE = 20;

/**
 * @deprecated
 */
export enum ButtonInputType {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset"
}
