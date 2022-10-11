import { SIZES } from "../../constants/sizes";

export enum CounterType {
  FILL = "fill",
  LINE = "line"
}

export enum CounterColor {
  PRIMARY = "primary",
  DARK = "dark",
  NEGATIVE = "negative",
  LIGHT = "light"
}

export enum CounterSize {
  SMALL = "small",
  LARGE = "large"
}

const OLD_COUNTER_SIZES = {
  sm: SIZES.SMALL,
  md: SIZES.MEDIUM,
  lg: SIZES.LARGE
} as const;

// Support old sizes (backward compatible)
type Size = keyof typeof OLD_COUNTER_SIZES | typeof SIZES[keyof typeof SIZES];

export const getActualSize = (size: Size) => {
  if (size in OLD_COUNTER_SIZES) {
    // @ts-expect-error Element implicitly has an 'any' type because expression of type 'Size' can't be used to index typeof OLD_COUNTER_SIZES
    return OLD_COUNTER_SIZES[size];
  }

  return size;
};
