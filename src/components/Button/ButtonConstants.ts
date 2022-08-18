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

export const OLD_BUTTON_SIZES = {
  sm: SIZES.SMALL,
  md: SIZES.MEDIUM,
  lg: SIZES.LARGE
} as const;

export type Size = typeof SIZES[keyof typeof SIZES] | keyof typeof OLD_BUTTON_SIZES;

// Support old sizes (backward compatible)
export const getActualSize = (size?: Size) => {
  if (size && size in OLD_BUTTON_SIZES) {
    // @ts-expect-error
    return OLD_BUTTON_SIZES[size];
  }

  return size;
};

export const BUTTON_KIND_CLASS_NAMES = {
  PRIMARY: ""
};

export const BUTTON_ICON_SIZE = 20;

export enum ButtonInputType {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset"
}
