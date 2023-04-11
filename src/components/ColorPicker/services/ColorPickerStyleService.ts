import { DIALOG_WIDTH_PADDING, COLOR_SIZES, COLOR_PADDING } from "../ColorPickerConstants";
import { BASE_SIZES_VALUES } from "../../../constants/sizes";

export const calculateColorPickerWidth = (colorSize: BASE_SIZES_VALUES, numberOfColorsInLine: number) => {
  return numberOfColorsInLine * (COLOR_SIZES[colorSize] + COLOR_PADDING);
};

export const calculateColorPickerDialogWidth = (colorSize: BASE_SIZES_VALUES, numberOfColorsInLine: number) => {
  return calculateColorPickerWidth(colorSize, numberOfColorsInLine) + DIALOG_WIDTH_PADDING;
};
