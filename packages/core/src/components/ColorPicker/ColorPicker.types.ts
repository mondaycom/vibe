import { CONTENT_COLORS_VALUES } from "../../utils/colors-vars-map";

export type ColorShapes = "square" | "circle";

export type ColorPickerSizes = "small" | "medium" | "large";

export type ColorPickerValueOnly = CONTENT_COLORS_VALUES | string;
export type ColorPickerArrayValueOnly = CONTENT_COLORS_VALUES[] | string[];
export type ColorPickerValue = ColorPickerValueOnly | ColorPickerArrayValueOnly;
