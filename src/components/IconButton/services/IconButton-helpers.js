import { SIZES } from "../../../constants/sizes";

const sizesMap = {
  [SIZES.XXS]: 16,
  [SIZES.XS]: 24,
  [SIZES.SMALL]: 32,
  [SIZES.MEDIUM]: 40,
  [SIZES.LARGE]: 48
};

export function getWidthHeight(size) {
  return {
    width: `${sizesMap[size]}px`,
    height: `${sizesMap[size]}px`
  };
}
