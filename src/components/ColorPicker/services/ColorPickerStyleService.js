import { DIALOG_WIDTH_PADDING, COLOR_SIZES, COLOR_PADDING } from "../ColorPickerConstants";

export const calculateColorPickerWidth = (colorSize, numberOfColorsInLine) => {
  return numberOfColorsInLine * (COLOR_SIZES[colorSize] + COLOR_PADDING);
};

export const calculateColorPickerDialogWidth = (colorSize, numberOfColorsInLine) => {
  return calculateColorPickerWidth(colorSize, numberOfColorsInLine) + DIALOG_WIDTH_PADDING;
};
