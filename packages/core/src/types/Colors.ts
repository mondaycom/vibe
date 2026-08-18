import { contentColors } from "../utils/colors-vars-map";

const MapStateSelectedColor = {
  positive: "--surface-positive-color",
  negative: "--surface-negative-color",
  primary: "--ui-background-color",
  warning: "--surface-warning-color",
  info: "--surface-primary-color",
  /** @deprecated Use `info` instead */
  neutral: "--surface-primary-color"
};

const MapStateSelectedHoverColor = {
  positive: "--positive-color-selected-hover",
  negative: "--negative-color-selected-hover",
  primary: "--ui-background-hover-color",
  warning: "--warning-color-selected-hover",
  info: "--info-color-selected-hover",
  /** @deprecated Use `info` instead */
  neutral: "--info-color-selected-hover"
};

type ContentColor = (typeof contentColors)[number];
type StateSelectedColorKeys = keyof typeof MapStateSelectedColor;
type StateSelectedHoverColorKeys = keyof typeof MapStateSelectedHoverColor;

export type ElementAllowedColor = ContentColor | "positive" | "negative" | "primary" | "warning" | "info" | "neutral";

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

export type ColorStyle = "regular" | "hover" | "selected";
