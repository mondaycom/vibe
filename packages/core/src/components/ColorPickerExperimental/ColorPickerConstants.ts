import { BaseSizes, SIZES } from "../../constants/sizes";
import { CONTENT_COLORS_VALUES } from "../../utils/colors-vars-map";

export const DEFAULT_NUMBER_OF_COLORS_IN_LINE = 5;

export const COLOR_SIZES: Record<BaseSizes, number> = {
  [SIZES.SMALL]: 24,
  [SIZES.MEDIUM]: 32,
  [SIZES.LARGE]: 40
};

export const COLOR_PADDING = 8;
export const DIALOG_WIDTH_PADDING = 24;

export enum ColorShapes {
  SQUARE = "square",
  CIRCLE = "circle"
}

export enum Actions {
  ADD = "add",
  EDIT = "edit",
  DELETE = "delete"
}

export const DEFAULT_COLOR = "#000000";

export type ColorPickerValueOnly = CONTENT_COLORS_VALUES | string;
export type ColorPickerArrayValueOnly = CONTENT_COLORS_VALUES[] | string[];
export type ColorPickerValue = ColorPickerValueOnly | ColorPickerArrayValueOnly;

export const DEFAULT_COLORS = [
  "grass_green",
  "done-green",
  "bright-green",
  "saladish",
  "egg_yolk",
  "working_orange",
  "teal",
  "aquamarine",
  "tan",
  "coffee",
  "dark-orange",
  "sunset",
  "navy",
  "chili-blue",
  "river",
  "dark-red",
  "stuck-red",
  "sofia_pink",
  "dark-blue",
  "bright-blue",
  "berry",
  "purple",
  "orchid",
  "lipstick",
  "royal",
  "dark_indigo",
  "indigo",
  "lavender",
  "bubble",
  "peach",
  "blackish",
  "pecan",
  "american_gray",
  "explosive",
  "winter",
  "lilac"
];
