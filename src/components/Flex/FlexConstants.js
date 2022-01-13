import { BASE_POSITIONS } from "../../constants/positions";
import { BASE_SIZES } from "../../constants/sizes";

export const FLEX_POSITIONS = Object.freeze({
  ...BASE_POSITIONS,
  SPACE_AROUND: "space-around",
  SPACE_BETWEEN: "space-between"
});

export const FLEX_SPACING_SIZES = Object.freeze({
  ...BASE_SIZES,
  NONE: "none"
});
