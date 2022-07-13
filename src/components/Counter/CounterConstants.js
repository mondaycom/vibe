import { SIZES } from "../../constants/sizes";

export const COUNTER_TYPES = {
  FILL: "fill",
  LINE: "line"
};

export const COUNTER_COLORS = {
  PRIMARY: "primary",
  DARK: "dark",
  NEGATIVE: "negative",
  LIGHT: "light"
};

const OLD_COUNTER_SIZES = {
  sm: SIZES.SMALL,
  md: SIZES.MEDIUM,
  lg: SIZES.LARGE
};

// Support old sizes (backward compatible)
export const getActualSize = size => {
  return OLD_COUNTER_SIZES[size] || size;
};
