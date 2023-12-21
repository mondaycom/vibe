import React, { forwardRef, ReactElement, useMemo, useRef } from "react";
import { BASE_SIZES } from "../../constants";
import useMergeRef from "../../hooks/useMergeRef";
import { NOOP } from "../../utils/function-utils";
import { ensureDefaultValue } from "./SliderHelpers";
import { SliderProvider } from "./SliderContext";
import SliderBase from "./SliderBase/SliderBase";
import SliderInfix from "./SliderInfix";
import { IconType } from "../Icon/IconConstants";
import { SliderColor, SliderSize } from "./SliderConstants";
import cx from "classnames";
import { withStaticProps } from "../../types";
import styles from "./Slider.module.scss";

export type SliderProps = {
  // ------ SliderBase props
  /**
   * Define a string that labels the current element (Slider)
   */
  ariaLabel?: string;
  /**
   * ElementId of Node that have the text needed for labeling the current element (Slider)
   */
  ariaLabelledby?: string;
  /**
   * Custom `class name` to be added to the component-root-node
   */
  className?: string;
  /**
   * Color Mode (primary/positive/negative) of the component (Slider)
   */
  color?: SliderColor;
  /**
   * Unique TestId - can be used as Selector for integration tests and other needs (tracking, etc)
   */
  "data-testid"?: string;
  defaultValue?: number | number[];
  /**
   * Formatter function `value => formattedValue`
   * default formatter return `${value}%`
   */
  /**
   * If set to true, Component (Slider) will be disabled
   *  - impossible to change value of component (Slider)
   *  - visual changes (opacity)
   */
  disabled?: boolean;
  /**
   * Attribute `id` to be added to the component-root-node
   */
  id?: string;
  /**
   * Max range value of the component (Slider)
   */
  max?: number;
  /**
   * Min range value of the component (Slider)
   */
  min?: number;
  /**
   * Optional onChange callback (for outer trigger or Controlled mode)
   * - required in Controlled Mode
   */
  onChange?: (value: number | number[]) => void;
  /**
   * If true switch slider to RRange mode (two Thumbs)
   */
  ranged?: boolean;
  /**
   * The granularity with which the slider can step through values.
   * (A "discrete" slider.) The min prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   */
  step?: number;
  /**
   * Always show `value` instead of Tooltip
   */
  showValue?: boolean;
  /**
   * Size small/medium/large of the component (Slider)
   */
  size?: SliderSize;
  /**
   * Current/selected value of the range of the Component (Slider)
   *   - should be used in Controlled Mode only
   *   - in ranged mode should be an array of two numbers
   */
  value?: number | number[];
  /**
   * Function to format the value, e.g. add %. By default, returns `${value}%`
   */
  valueFormatter?: (value: number) => string;
  /**
   * Text/presentation of current/selected value
   *  - should be used in Controlled Mode only
   */
  valueText?: string;
  // ------ Additional subcomponents' props
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
  prefix?: { icon: IconType } | string | ((value: number, valueText: string) => void) | ReactElement;
  /**
   * Options for postfix/end/finishing element. Same as prefix element.
   */
  postfix?: { icon: IconType } | string | ((value: number, valueText: string) => void) | ReactElement;
  /**
   * Width of SelectionIndicator (i.e. TextField)
   */
  selectionIndicatorWidth?: string;
};

const Slider: React.FC<SliderProps> & {
  sizes?: typeof BASE_SIZES;
  colors?: typeof SliderColor;
} = forwardRef(
  (
    {
      ariaLabel,
      ariaLabelledby,
      className,
      color,
      "data-testid": dataTestId = "monday-slider",
      disabled = false,
      id,
      max = 100,
      min = 0,
      onChange = NOOP,
      ranged = false,
      step = 1,
      showValue = false,
      size = Slider.sizes.SMALL,
      value,
      defaultValue = 0,
      valueFormatter = (value: number) => `${value}%`,
      valueText,
      // ------ Additional subcomponents' props
      indicateSelection = false,
      prefix,
      postfix,
      selectionIndicatorWidth = "60px"
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const infixOptions = useMemo(
      () => ({ prefix, postfix, indicateSelection, selectionIndicatorWidth }),
      [prefix, postfix, indicateSelection, selectionIndicatorWidth]
    );
    return (
      <SliderProvider
        ariaLabel={ariaLabel}
        ariaLabelledby={ariaLabelledby}
        color={color}
        data-testid={dataTestId}
        disabled={disabled}
        infixOptions={infixOptions}
        max={max}
        min={min}
        onChange={onChange}
        ranged={ranged}
        showValue={showValue}
        size={size}
        step={step}
        value={value}
        defaultValue={ensureDefaultValue(defaultValue, min, max, ranged)}
        valueFormatter={valueFormatter}
        valueText={valueText}
      >
        <div
          className={cx(styles.slider, { [styles.valueShown]: showValue }, className)}
          data-testid={dataTestId}
          id={id}
          ref={mergedRef}
        >
          <SliderInfix kind={SliderInfix.kinds.PREFIX} />
          <SliderBase />
          <SliderInfix kind={SliderInfix.kinds.POSTFIX} />
        </div>
      </SliderProvider>
    );
  }
);

export default withStaticProps(Slider, {
  sizes: BASE_SIZES,
  colors: SliderColor
});
