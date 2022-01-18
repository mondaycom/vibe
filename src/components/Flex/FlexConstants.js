import { BASE_POSITIONS } from "../../constants/positions";

export const FLEX_POSITIONS = Object.freeze({
  ...BASE_POSITIONS,
  SPACE_AROUND: "SpaceAround",
  SPACE_BETWEEN: "SpaceBetween"
});

export const FLEX_GAPS = Object.freeze({
  XS: 4,
  SMALL: 8,
  MEDIUM: 16,
  LARGE: 24,
  NONE: 0
});

export const FLEX_DIRECTIONS = Object.freeze({
  ROW: "Row",
  COLUMN: "Column"
});
