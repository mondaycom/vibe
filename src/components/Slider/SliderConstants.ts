import { Slider } from "../index";
import { IconType } from "../Icon/IconConstants";
import { ReactElement } from "react";

export const BEM_PREFIX = "monday";

export const COMPONENT_ID = "slider";

export const UPDATE_SLIDER_SIZE_DEBOUNCE = 200;

export const TOOLTIP_SHOW_DELAY = 300;

export enum InfixKind {
  PREFIX = "prefix",
  POSTFIX = "postfix"
}

export enum SliderColor {
  PRIMARY = "primary",
  NEGATIVE = "negative",
  POSITIVE = "positive"
}
export type SliderSize = (typeof Slider.sizes)[keyof typeof Slider.sizes];

export type SliderContextSelection = {
  max: number;
  min: number;
  ranged: boolean;
  step: number;
  value: number | number[];
  valueText: string | string[];
};

export type SliderContextUI = {
  active: number;
  ariaLabel: string;
  ariaLabelledby: string;
  color: SliderColor;
  disabled: boolean;
  dragging: number;
  focused: number;
  size: SliderSize;
  shapeTestId: (subElement: string) => string;
  showValue: boolean;
};

export type SliderContextActions = {
  setActive: (value: number) => void;
  setFocused: (value: number) => void;
  setDragging: (value: number) => void;
  changeThumbValue: (newValue: number | string, thumbIndex?: number, cancelFocus?: boolean) => void;
  drugThumb: (newValue: number | number[]) => void;
  decreaseValue: (consumerStep?: number) => void;
  increaseValue: (consumerStep?: number) => void;
};

export type SliderContextInfix = {
  /**
   * Show selected from Slider range value
   */
  indicateSelection?: boolean;
  /**
   * Options for initial/start/prefix element, it can be one of:
   *  - Any Component (react component, node, text, number etc.)
   *  - Or it can be an object of options for Icons component (see Icon components props)
   *  - Or it can be an object for Label (Icon, Heading - and other components)
   *  - Or it can be Render Props Function witch are getting value and valueText
   */
  prefix?:
    | { icon: IconType }
    | string
    | ((value: number | number[], valueText: string | string[]) => ReactElement)
    | ReactElement;
  /**
   * Options for postfix/end/finishing element. Same as prefix element.
   */
  postfix?:
    | { icon: IconType }
    | string
    | ((value: number | number[], valueText: string | string[]) => ReactElement)
    | ReactElement;
  /**
   * Width of SelectionIndicator (i.e. TextField)
   */
  selectionIndicatorWidth?: string;
};
