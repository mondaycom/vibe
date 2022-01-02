import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import { COLORS_BASIC, SIZES_BASIC } from "../../constants";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./Slider.scss";
import { bem } from "./SliderCommons";
import { SliderProvider } from "./SliderContext";
import SliderBase from "./SliderBase/SliderBase";
import SliderInfix from "./SliderInfix";
import { createBemBlockHelper } from "../../helpers/bem-helper";

const Slider = forwardRef(
  (
    {
      ariaLabel,
      ariaLabeledBy,
      className,
      classNameBase,
      color,
      disabled,
      id,
      max,
      min,
      onChange,
      step,
      showValue,
      size,
      value,
      valueDefault,
      valueFormatter,
      valueText,
      // ------ Additional subcomponents' props
      indicateSelection,
      prefix,
      postfix
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const consumerBem = createBemBlockHelper(classNameBase, { isConsume: true });
    function handleChange(newValue) {
      console.log("slider: handle change", newValue);
      if (typeof onChange === "function") {
        onChange(newValue);
      }
    }
    const providerProps = {
      ariaLabel,
      ariaLabeledBy,
      classNameBase,
      color,
      disabled,
      max,
      min,
      onChange,
      showValue,
      size,
      step,
      value,
      valueDefault,
      valueFormatter,
      valueText,
      infixOptions: {
        prefix,
        postfix,
        indicateSelection
      }
    };
    console.log("--- slider", { disabled });
    return (
      <SliderProvider {...providerProps}>
        <div ref={mergedRef} className={bem("", { disabled }, className)} id={id}>
          <SliderInfix kind="prefix" />
          <SliderBase className={consumerBem("base")} onChange={handleChange} />
          <SliderInfix kind="postfix" />
        </div>
      </SliderProvider>
    );
  }
);

Slider.sizes = SIZES_BASIC;
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
  ariaLabeledBy: PropTypes.string,
  /**
   * Custom `class name` to be added to the component-root-node
   */
  className: PropTypes.string,
  /**
   * Custom base of class names for add to component-root and internal-components nodes
   *  - check Dev Tools for found available Custom/Consumer Classes
   */
  classNameBase: PropTypes.string,
  /**
   * Color Mode (primary/positive/negative) of the component (Slider)
   */
  color: PropTypes.oneOf(Object.values(Slider.colors)),
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
   * Step for Component (Slider) changes
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
   */
  value: PropTypes.number,
  /**
   * Default `value` if value not specified
   *  - should be used in NON-Controlled mode to set initial Value
   */
  valueDefault: PropTypes.number,
  /**
   * Formatter function `value => formattedValue`
   * default formatter return `${value}%`
   */
  valueFormatter: PropTypes.func,
  /**
   * Text/presentation of current/selected value
   *  - should be used in Controlled Mode only
   */
  valueText: PropTypes.string,

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
      icon: PropTypes.string.isRequired
    }),
    PropTypes.shape({
      text: PropTypes.string.isRequired
    }),
    PropTypes.func,
    PropTypes.node
  ]),
  /**
   * Options for postfix/end/finishing element. Same as prefix element.
   */
  postfix: PropTypes.oneOfType([
    PropTypes.shape({
      icon: PropTypes.string.isRequired
    }),
    PropTypes.shape({
      text: PropTypes.string.isRequired
    }),
    PropTypes.func,
    PropTypes.node
  ])
};

Slider.defaultProps = {
  // ------ SliderBase props
  ariaLabel: undefined,
  ariaLabeledBy: undefined,
  className: "",
  classNameBase: "",
  color: undefined,
  disabled: false,
  id: undefined,
  max: 100,
  min: 0,
  onChange: (e) => {console.log('outer change', e)},
  step: 1,
  size: SIZES_BASIC.SMALL,
  showValue: false,
  value: undefined,
  valueDefault: 0,
  valueFormatter: value => `${value}%`,
  valueText: undefined,
  // ------ Additional subcomponents' props
  indicateSelection: false,
  prefix: undefined,
  postfix: undefined
};

export default Slider;
