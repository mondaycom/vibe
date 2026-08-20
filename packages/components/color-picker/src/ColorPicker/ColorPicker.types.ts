import { type CONTENT_COLORS_VALUES } from "@vibe/shared";

export type ColorShapes = "square" | "circle";

export type ColorPickerSizes = "small" | "medium" | "large";

export type ColorPickerValueOnly = CONTENT_COLORS_VALUES | string;
export type ColorPickerArrayValueOnly = CONTENT_COLORS_VALUES[] | string[];
export type ColorPickerValue = ColorPickerValueOnly | ColorPickerArrayValueOnly;
