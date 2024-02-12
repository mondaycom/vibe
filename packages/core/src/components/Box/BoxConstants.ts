import styles from "./Box.module.scss";

export const DISABLED = Object.freeze({
  DISABLED: styles.opacityDisabled
});

export const BORDER = Object.freeze({
  DEFAULT: styles.border
});
export type Border = typeof BORDER;

export const BORDER_COLOR = Object.freeze({
  UI_BORDER_COLOR: styles.borderColorUiBorderColor,
  LAYOUT_BORDER_COLOR: styles.borderColorLayoutBorderColor
});
export type BorderColor = typeof BORDER_COLOR;

export const ROUNDED = Object.freeze({
  SMALL: styles.roundedSmall,
  MEDIUM: styles.roundedMedium,
  BIG: styles.roundedBig
});
export type Rounded = typeof ROUNDED;

export const SHADOW = Object.freeze({
  XS: styles.shadowXs,
  SMALL: styles.shadowSmall,
  MEDIUM: styles.shadowMedium,
  LARGE: styles.shadowLarge
});
export type Shadow = typeof SHADOW;

export const MARGIN = Object.freeze({
  AUTO: styles.mAuto,
  XS: styles.mXs,
  SMALL: styles.mSmall,
  MEDIUM: styles.mMedium,
  LARGE: styles.mLarge,
  XL: styles.mXl,
  XXL: styles.mXxl,
  XXXL: styles.mXxxl
});
export type Margin = typeof MARGIN;

export const MARGIN_X = Object.freeze({
  AUTO: styles.mxAuto,
  XS: styles.mxXs,
  SMALL: styles.mxSmall,
  MEDIUM: styles.mxMedium,
  LARGE: styles.mxLarge,
  XL: styles.mxXl,
  XXL: styles.mxXxl,
  XXXL: styles.mxXxxl
});
export type MarginX = typeof MARGIN_X;

export const MARGIN_Y = Object.freeze({
  AUTO: styles.myAuto,
  XS: styles.myXs,
  SMALL: styles.mySmall,
  MEDIUM: styles.myMedium,
  LARGE: styles.myLarge,
  XL: styles.myXl,
  XXL: styles.myXxl,
  XXXL: styles.myXxxl
});
export type MarginY = typeof MARGIN_Y;

export const MARGIN_TOP = Object.freeze({
  AUTO: styles.mtAuto,
  XS: styles.mtXs,
  SMALL: styles.mtSmall,
  MEDIUM: styles.mtMedium,
  LARGE: styles.mtLarge,
  XL: styles.mtXl,
  XXL: styles.mtXxl,
  XXXL: styles.mtXxxl
});
export type MarginTop = typeof MARGIN_TOP;

export const MARGIN_END = Object.freeze({
  AUTO: styles.meAuto,
  XS: styles.meXs,
  SMALL: styles.meSmall,
  MEDIUM: styles.meMedium,
  LARGE: styles.meLarge,
  XL: styles.meXl,
  XXL: styles.meXxl,
  XXXL: styles.meXxxl
});
export type MarginEnd = typeof MARGIN_END;

export const MARGIN_BOTTOM = Object.freeze({
  AUTO: styles.mbAuto,
  XS: styles.mbXs,
  SMALL: styles.mbSmall,
  MEDIUM: styles.mbMedium,
  LARGE: styles.mbLarge,
  XL: styles.mbXl,
  XXL: styles.mbXxl,
  XXXL: styles.mbXxxl
});
export type MarginBottom = typeof MARGIN_BOTTOM;

export const MARGIN_START = Object.freeze({
  AUTO: styles.msAuto,
  XS: styles.msXs,
  SMALL: styles.msSmall,
  MEDIUM: styles.msMedium,
  LARGE: styles.msLarge,
  XL: styles.msXl,
  XXL: styles.msXxl,
  XXXL: styles.msXxxl
});
export type MarginStart = typeof MARGIN_START;

export const PADDING = Object.freeze({
  XS: styles.pXs,
  SMALL: styles.pSmall,
  MEDIUM: styles.pMedium,
  LARGE: styles.pLarge,
  XL: styles.pXl,
  XXL: styles.pXxl,
  XXXL: styles.pXxxl
});
export type Padding = typeof PADDING;

export const PADDING_X = Object.freeze({
  XS: styles.pxXs,
  SMALL: styles.pxSmall,
  MEDIUM: styles.pxMedium,
  LARGE: styles.pxLarge,
  XL: styles.pxXl,
  XXL: styles.pxXxl,
  XXXL: styles.pxXxxl
});
export type PaddingX = typeof PADDING_X;

export const PADDING_Y = Object.freeze({
  XS: styles.pyXs,
  SMALL: styles.pySmall,
  MEDIUM: styles.pyMedium,
  LARGE: styles.pyLarge,
  XL: styles.pyXl,
  XXL: styles.pyXxl,
  XXXL: styles.pyXxxl
});
export type PaddingY = typeof PADDING_Y;

export const PADDING_TOP = Object.freeze({
  XS: styles.ptXs,
  SMALL: styles.ptSmall,
  MEDIUM: styles.ptMedium,
  LARGE: styles.ptLarge,
  XL: styles.ptXl,
  XXL: styles.ptXxl,
  XXXL: styles.ptXxxl
});
export type PaddingTop = typeof PADDING_TOP;

export const PADDING_END = Object.freeze({
  XS: styles.peXs,
  SMALL: styles.peSmall,
  MEDIUM: styles.peMedium,
  LARGE: styles.peLarge,
  XL: styles.peXl,
  XXL: styles.peXxl,
  XXXL: styles.peXxxl
});
export type PaddingEnd = typeof PADDING_END;

export const PADDING_BOTTOM = Object.freeze({
  XS: styles.pbXs,
  SMALL: styles.pbSmall,
  MEDIUM: styles.pbMedium,
  LARGE: styles.pbLarge,
  XL: styles.pbXl,
  XXL: styles.pbXxl,
  XXXL: styles.pbXxxl
});
export type PaddingBottom = typeof PADDING_BOTTOM;

export const PADDING_START = Object.freeze({
  XS: styles.psXs,
  SMALL: styles.psSmall,
  MEDIUM: styles.psMedium,
  LARGE: styles.psLarge,
  XL: styles.psXl,
  XXL: styles.psXxl,
  XXXL: styles.psXxxl
});
export type PaddingStart = typeof PADDING_START;

export const BACKGROUND_COLORS = Object.freeze({
  PRIMARY_BACKGROUND_COLOR: styles.bgPrimaryBackgroundColor,
  SECONDARY_BACKGROUND_COLOR: styles.bgSecondaryBackgroundColor,
  GREY_BACKGROUND_COLOR: styles.bgGreyBackgroundColor,
  ALL_GREY_BACKGROUND_COLOR: styles.bgAllgreyBackgroundColor,
  INVERTED_COLOR_BACKGROUND: styles.bgInvertedColorBackground
});
export type BackgroundColor = typeof BACKGROUND_COLORS;

export const COLORS = Object.freeze({
  PRIMARY_TEXT_COLOR: styles.textPrimaryTextColor,
  TEXT_COLOR_ON_INVERTED: styles.textTextColorOnInverted,
  SECONDARY_TEXT_COLOR: styles.textSecondaryTextColor
});
export type Color = typeof COLORS;
