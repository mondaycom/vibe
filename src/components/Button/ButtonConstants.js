import { SIZES } from "../../constants/sizes";

export const BUTTON_TYPES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary"
};

export const BUTTON_COLORS = {
  PRIMARY: "primary",
  POSITIVE: "positive",
  NEGATIVE: "negative",
  ON_PRIMARY_COLOR: "on-primary-color",
  ON_INVERTED_BACKGROUND: "on-inverted-background"
};

const OLD_BUTTON_SIZES = {
  sm: SIZES.SMALL,
  md: SIZES.MEDIUM,
  lg: SIZES.LARGE
};

// Support old sizes (backward compatible)
export const getActualSize = size => {
  return OLD_BUTTON_SIZES[size] || size;
};

export const BUTTON_KIND_CLASS_NAMES = {
  PRIMARY: ""
};

export const BUTTON_INPUT_TYPE = {
  BUTTON: "button",
  SUBMIT: "submit",
  RESET: "reset"
};
