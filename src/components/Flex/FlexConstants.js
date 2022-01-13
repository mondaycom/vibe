import { BASE_POSITIONS } from "../../constants/positions";
import { PASCAL_BASE_SIZE } from "../../constants/sizes";

export const FLEX_POSITIONS = Object.freeze({
  ...BASE_POSITIONS,
  SPACE_AROUND: "SpaceAround",
  SPACE_BETWEEN: "SpaceBetween"
});

export const FLEX_SPACING_SIZES = Object.freeze({
  ...PASCAL_BASE_SIZE,
  NONE: "None"
});
