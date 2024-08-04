import { contentColors } from "../utils/colors-vars-map";

export const MapStateSelectedColor = {
  positive: "--positive-color-selected",
  negative: "--negative-color-selected",
  primary: "--primary-selected-color",
  warning: "--warning-color-selected"
};
export const MapStateSelectedHoverColor = {
  positive: "--positive-color-selected-hover",
  negative: "--negative-color-selected-hover",
  primary: "--primary-selected-hover-color"
};

type ContentColor = (typeof contentColors)[number];
type StateSelectedColorKeys = keyof typeof MapStateSelectedColor;
type StateSelectedHoverColorKeys = keyof typeof MapStateSelectedHoverColor;

export type ElementAllowedColor = ContentColor | "positive" | "negative" | "primary" | "warning";

export function getElementColor(
  colorValue: ContentColor | StateSelectedColorKeys | StateSelectedHoverColorKeys,
  isSelectedPalette = false,
  isSelectedHoverPalette = false
): string {
  if (contentColors.includes(colorValue as ContentColor)) {
    return `var(--color-${colorValue}${isSelectedPalette ? "-selected" : ""})`;
  }
  if (
    Object.keys(MapStateSelectedHoverColor).includes(colorValue as StateSelectedHoverColorKeys) &&
    isSelectedHoverPalette
  ) {
    return `var(${MapStateSelectedHoverColor[colorValue as StateSelectedHoverColorKeys]})`;
  }
  if (Object.keys(MapStateSelectedColor).includes(colorValue as StateSelectedColorKeys) && isSelectedPalette) {
    return `var(${MapStateSelectedColor[colorValue as StateSelectedColorKeys]})`;
  }
  return colorValue;
}
