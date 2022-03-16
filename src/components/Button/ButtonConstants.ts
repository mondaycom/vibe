import { SIZES } from "../../constants/sizes";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary"
}

export enum ButtonColor {
  PRIMARY = "primary",
  POSITIVE = "positive",
  NEGATIVE = "negative",
  ON_PRIMARY_COLOR = "on-primary-color",
  ON_INVERTED_BACKGROUND = "on-inverted-background"
}

const OLD_BUTTON_SIZES = {
  sm: SIZES.SMALL,
  md: SIZES.MEDIUM,
  lg: SIZES.LARGE
} as const;

// Support old sizes (backward compatible)
export const getActualSize = (size: string) => OLD_BUTTON_SIZES[size] || size;

export const BUTTON_KIND_CLASS_NAMES = {
  PRIMARY: ""
};

export enum ButtonInputType {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset"
}
