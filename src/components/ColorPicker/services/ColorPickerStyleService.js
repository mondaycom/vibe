export const calculateColorPickerWidth = numberOfColorsInLine => {
  return numberOfColorsInLine * 36;
};

export const calculateColorPickerDialogWidth = numberOfColorsInLine => {
  return calculateColorPickerWidth(numberOfColorsInLine) + 32;
};
