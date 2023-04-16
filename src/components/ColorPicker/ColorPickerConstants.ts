import { BASE_SIZES_VALUES, SIZES } from "../../constants/sizes";
import { CONTENT_COLORS_VALUES } from "../../utils/colors-vars-map";

export const DEFAULT_NUMBER_OF_COLORS_IN_LINE = 5;

export const COLOR_SIZES: Record<BASE_SIZES_VALUES, number> = {
  [SIZES.SMALL]: 24,
  [SIZES.MEDIUM]: 32,
  [SIZES.LARGE]: 40
};

export const COLOR_PADDING = 8;
export const DIALOG_WIDTH_PADDING = 24;

export const COLOR_SHAPES = {
  SQUARE: "square",
  CIRCLE: "circle"
} as const;

export type COLOR_SHAPES_VALUES = typeof COLOR_SHAPES[keyof typeof COLOR_SHAPES];

export type COLOR_STYLE = "regular" | "selected";

export type COLOR_PICKER_VALUE_ONLY = CONTENT_COLORS_VALUES | string;
export type COLOR_PICKER_ARRAY_VALUE_ONLY = CONTENT_COLORS_VALUES[] | string[];
export type COLOR_PICKER_VALUE = COLOR_PICKER_VALUE_ONLY | COLOR_PICKER_ARRAY_VALUE_ONLY;
