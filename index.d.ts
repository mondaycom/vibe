import * as React from "react";

export enum BASE_SIZES {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}

export enum ALL_SIZES {
  XXS = "xxs",
  XS = "xs"
}
export type IconType = React.ReactElement | string;
export type SIZES = BASE_SIZES | ALL_SIZES;

export enum DialogPositions {
  LEFT = "left",
  LEFT_START = "left-start",
  LEFT_END = "left-end",
  RIGHT = "right",
  RIGHT_START = "right-start",
  RIGHT_END = "right-end",
  TOP = "top",
  TOP_START = "top-start",
  TOP_END = "top-end",
  BOTTOM = "bottom",
  BOTTOM_START = "bottom-start",
  BOTTOM_END = "bottom-end"
}

declare enum BUTTON_TYPES {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary"
}

declare enum BUTTON_COLORS {
  PRIMARY = "primary",
  POSITIVE = "positive",
  NEGATIVE = "negative",
  ON_PRIMARY_COLOR = "on-primary-color",
  ON_INVERTED_BACKGROUND = "on-inverted-background"
}

export type Button = {
  kind?: BUTTON_TYPES;
  onClick?(event: React.MouseEvent): void;
  onMouseDown?(event: React.MouseEvent): void;
  blurOnMouseUp?: boolean;
  name?: string;
  style?: CSSStyleRule;
  size?: SIZES;
  color?: BUTTON_COLORS;
  disabled?: boolean;
  className?: string;
  rightIcon?: IconType | null;
  leftIcon?: IconType | null;
  successIcon?: IconType | null;
  successText?: string;
  success?: boolean;
  loading?: boolean;
  active?: boolean;
  id?: string;
  marginRight?: boolean;
  marginLeft?: boolean;
  type?: "button" | "submit" | "reset";
  rightFlat?: boolean;
  leftFlat?: boolean;
  preventClickAnimation?: boolean;
  noSidePadding?: boolean;
  onFocus?(event: React.MouseEvent): void;
  onBlur?(event: React.MouseEvent): void;
  defaultTextColorOnPrimaryColor?: string;
  ariaHasPopup?: boolean;
  ariaExpanded?: boolean;
  ariaControls?: string;
  ariaLabel?: string;
  ariaLabeledBy?: string;
};
