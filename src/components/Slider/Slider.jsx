import React, { forwardRef, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import { COLORS_BASIC, BASE_SIZES } from "../../constants";
import useMergeRefs from "../../hooks/useMergeRefs";
import { NOOP } from "../../utils/function-utils";
import "./Slider.scss";
import { bem, ensureDefaultValue } from "./SliderHelpers";
import { SliderProvider } from "./SliderContext";
import SliderBase from "./SliderBase/SliderBase";
import SliderInfix from "./SliderInfix";

const Slider = forwardRef(
  (
    {
      ariaLabel,
      ariaLabelledby,
      className,
      color,
      "data-testid": dataTestId,
      disabled,
      id,
      max,
      min,
      onChange,
      ranged,
      step,
      showValue,
      size,
      value,
      defaultValue,
      valueFormatter,
      valueText,
      // ------ Additional subcomponents' props
      indicateSelection,
      prefix,
      postfix,
      selectionIndicatorWidth
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const infixOptions = useMemo(
      () => ({ prefix, postfix, indicateSelection, selectionIndicatorWidth }),
      [prefix, postfix, indicateSelection, selectionIndicatorWidth]
    );
    return (
      <SliderProvider
        ariaLabel={ariaLabel}
        ariaLabelledby={ariaLabelledby}
        color={color}
        dataTestId={dataTestId}
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
        defaultValue={ensureDefaultValue({ defaultValue, min, max, ranged })}
        valueFormatter={valueFormatter}
        valueText={valueText}
      >
        <div
          className={bem("", { disabled, "value-shown": showValue }, className)}
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

Slider.sizes = BASE_SIZES;
Slider.colors = COLORS_BASIC;

Slider.propTypes = {
  // ------ SliderBase props
  /**
   * Define a string that labels the current element (Slider)
   */
  ariaLabel: PropTypes.string,
  /**
   * ElementId of Node that have the text needed for labeling the current element (Slider)
   */
  ariaLabelledby: PropTypes.string,
  /**
   * Custom `class name` to be added to the component-root-node
   */
  className: PropTypes.string,
  /**
   * Color Mode (primary/positive/negative) of the component (Slider)
   */
  color: PropTypes.oneOf(Object.values(Slider.colors)),
  /**
   * Unique TestId - can be used as Selector for integration tests and other needs (tracking, etc)
   */
  "data-testid": PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  /**
   * Formatter function `value => formattedValue`
   * default formatter return `${value}%`
   */
  /**
   * If set to true, Component (Slider) will be disabled
   *  - impossible to change value of component (Slider)
   *  - visual changes (opacity)
   */
  disabled: PropTypes.bool,
  /**
   * Attribute `id` to be added to the component-root-node
   */
  id: PropTypes.string,
  /**
   * Max range value of the component (Slider)
   */
  max: PropTypes.number,
  /**
   * Min range value of the component (Slider)
   */
  min: PropTypes.number,
  /**
   * Optional onChange callback (for outer trigger or Controlled mode)
   * - required in Controlled Mode
   */
  onChange: PropTypes.func,
  /**
   * If true switch slider to RRange mode (two Thumbs)
   */
  ranged: PropTypes.bool,
  /**
   * The granularity with which the slider can step through values.
   * (A "discrete" slider.) The min prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   */
  step: PropTypes.number,
  /**
   * Always show `value` instead of Tooltip
   */
  showValue: PropTypes.bool,
  /**
   * Size small/medium/large of the component (Slider)
   */
  size: PropTypes.oneOf(Object.values(Slider.sizes)),
  /**
   * Current/selected value of the range of the Component (Slider)
   *   - should be used in Controlled Mode only
   *   - in ranged mode should be an array of two numbers
   */
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  /**
   * Default `value` if value not specified
   *  - should be used in NON-Controlled mode to set initial Value
   *  - in ranged mode should be an array of two numbers
   */
  valueFormatter: PropTypes.func,
  /**
   * Text/presentation of current/selected value
   *  - should be used in Controlled Mode only
   */
  valueText: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),

  // ------ Additional subcomponents' props
  /**
   * Show selected from Slider range value
   */
  indicateSelection: PropTypes.bool,
  /**
   * Options for initial/start/prefix element, it can be one of:
   *  - Any Component (react component, node, text, number etc.)
   *  - Or it can be an object of options for Icons component (see Icon components props)
   *  - Or it can be an object for Label (Icon, Title - and other components)
   *  - Or it can be Render Props Function witch are getting value and valueText
   */
  prefix: PropTypes.oneOfType([
    PropTypes.shape({
      // Icon Component: /Icon/Icons/components/*
      icon: PropTypes.func.isRequired
    }),
    PropTypes.string,
    PropTypes.func,
    PropTypes.node
  ]),
  /**
   * Options for postfix/end/finishing element. Same as prefix element.
   */
  postfix: PropTypes.oneOfType([
    PropTypes.shape({
      // Icon Component: /Icon/Icons/components/*
      icon: PropTypes.func.isRequired
    }),
    PropTypes.string,
    PropTypes.func,
    PropTypes.node
  ]),
  /**
   * Width of SelectionIndicator (i.e. TextField)
   */
  selectionIndicatorWidth: PropTypes.string
};

Slider.defaultProps = {
  // ------ SliderBase props
  ariaLabel: undefined,
  ariaLabelledby: undefined,
  className: "",
  color: undefined,
  "data-testid": "monday-slider",
  defaultValue: 0,
  disabled: false,
  id: undefined,
  max: 100,
  min: 0,
  onChange: NOOP,
  ranged: false,
  step: 1,
  size: BASE_SIZES.SMALL,
  showValue: false,
  value: undefined,
  valueFormatter: value => `${value}%`,
  valueText: undefined,
  // ------ Additional subcomponents' props
  indicateSelection: false,
  prefix: undefined,
  postfix: undefined,
  selectionIndicatorWidth: "60px"
};

export default Slider;
