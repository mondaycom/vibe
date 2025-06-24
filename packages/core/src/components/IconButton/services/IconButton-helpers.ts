import { SIZES } from "./../../../constants/sizes";

export const ICON_BUTTON_SIZES = { ...SIZES, XXXS: "xxxs" } as const;

export const XXXS_BUTTON_ICON_SIZE = 10;

const sizesMap = {
  [ICON_BUTTON_SIZES.XXXS]: 12,
  [SIZES.XXS]: 16,
  [SIZES.XS]: 24,
  [SIZES.SMALL]: 32,
  [SIZES.MEDIUM]: 40,
  [SIZES.LARGE]: 48
} as const;

export type Size = (typeof ICON_BUTTON_SIZES)[keyof typeof ICON_BUTTON_SIZES];

export function getWidthHeight(size: Size) {
  return {
    width: `${sizesMap[size]}px`,
    height: `${sizesMap[size]}px`
  };
}
