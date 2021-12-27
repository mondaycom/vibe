import { SIZES } from "../../constants/sizes";

const OLD_TEXT_FIELD_SIZES = {
  s: SIZES.SMALL,
  md: SIZES.MEDIUM,
  l: SIZES.LARGE
};

// Support old sizes (backward compatible)
export const getActualSize = size => {
  return OLD_TEXT_FIELD_SIZES[size] || size;
};

export const TEXT_TYPES = {
  TEXT: "text",
  PASSWORD: "password",
  SEARCH: "search",
  DATE: "date",
  DATE_TIME: "datetime-local"
};
