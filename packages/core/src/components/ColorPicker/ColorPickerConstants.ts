import { BaseSizes, SIZES } from "../../constants/sizes";

export const DEFAULT_NUMBER_OF_COLORS_IN_LINE = 5;

export const COLOR_SIZES: Record<BaseSizes, number> = {
  [SIZES.SMALL]: 24,
  [SIZES.MEDIUM]: 32,
  [SIZES.LARGE]: 40
};

export const COLOR_PADDING = 8;
export const DIALOG_WIDTH_PADDING = 24;

/**
 * @deprecated
 */
export enum ColorShapes {
  SQUARE = "square",
  CIRCLE = "circle"
}
