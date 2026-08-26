import { contentColors } from "../utils/colors-vars-map";

const MapStateSelectedColor = {
  positive: "--surface-positive",
  negative: "--surface-negative",
  primary: "--surface-primary",
  warning: "--surface-warning",
  info: "--surface-info",
  neutral: "--surface-neutral"
};

const MapStateSelectedHoverColor = {
  positive: "--positive-color-selected-hover",
  negative: "--negative-color-selected-hover",
  primary: "--ui-background-hover-color",
  warning: "--warning-color-selected-hover",
  info: "--info-color-selected-hover",
  neutral: "--ui-background-hover-color"
};

/** Text colour paired with each semantic surface. */
export const MapOnSurfaceTextColor = {
  positive: "--text-on-surface-positive",
  negative: "--text-on-surface-negative",
  primary: "--text-on-surface-primary",
  warning: "--text-on-surface-warning",
  info: "--text-on-surface-info",
  neutral: "--text-on-surface-neutral"
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

/** True for the semantic colors (which have a surface), false for content colors. */
export function isSemanticElementColor(colorValue: string): colorValue is StateSelectedColorKeys {
  return Object.keys(MapStateSelectedColor).includes(colorValue);
}

/**
 * Text colour that pairs with a semantic surface. Returns `undefined` for content
 * colors, which have no on-surface pairing and keep the default text colour.
 */
export function getOnSurfaceTextColor(colorValue: string): string | undefined {
  if (Object.keys(MapOnSurfaceTextColor).includes(colorValue)) {
    return `var(${MapOnSurfaceTextColor[colorValue as keyof typeof MapOnSurfaceTextColor]})`;
  }
  return undefined;
}

export type ColorStyle = "regular" | "hover" | "selected";
