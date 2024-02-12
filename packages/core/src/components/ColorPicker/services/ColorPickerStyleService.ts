import { DIALOG_WIDTH_PADDING, COLOR_SIZES, COLOR_PADDING } from "../ColorPickerConstants";
import { BaseSizes } from "../../../constants/sizes";

export const calculateColorPickerWidth = (colorSize: BaseSizes, numberOfColorsInLine: number) => {
  return numberOfColorsInLine * (COLOR_SIZES[colorSize] + COLOR_PADDING);
};

export const calculateColorPickerDialogWidth = (colorSize: BaseSizes, numberOfColorsInLine: number) => {
  return calculateColorPickerWidth(colorSize, numberOfColorsInLine) + DIALOG_WIDTH_PADDING;
};
