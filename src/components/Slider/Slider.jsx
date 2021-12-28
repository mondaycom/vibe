import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import { COLORS_BASIC, SIZES_BASIC } from "../../constants";
import { createBemBlockHelper } from "../../helpers/bem-helper";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./Slider.scss";
import SliderBlock from "./SliderBlock";
import { SliderBase, useSliderValues } from "./SliderBase";

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
      indicateSelection,
      max,
      min,
      onChange,
      size,
      value,
      valueDefault,
      valueFormatter,
      valueText
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const { actualValue, actualValueText, setValue } = useSliderValues({
      value,
      valueDefault,
      valueFormatter,
      valueText
    });
    const consumerBem = createBemBlockHelper(classNameBase, { isConsume: true });

    function handleChange(newValue) {
      console.log("slider: handle change", newValue);
      setValue(newValue);
      if (typeof onChange === "function") {
        onChange(newValue);
      }
    }
    console.log("--- slider", { disabled });
    return (
      <SliderBlock id={id} ref={mergedRef} className={consumerBem("", { disabled }, className)} disabled={disabled}>
        <SliderBase
          ariaLabel={ariaLabel}
          ariaLabeledBy={ariaLabeledBy}
          className={consumerBem("plain")}
          classNameBase={classNameBase}
          color={color}
          disabled={disabled}
          max={max}
          min={min}
          onChange={handleChange}
          size={size}
          value={actualValue}
          valueText={actualValueText}
        />
        {indicateSelection && <div className={consumerBem("label", { disabled })}>{actualValueText}</div>}
      </SliderBlock>
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
  indicateSelection: PropTypes.bool
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
  onChange: undefined,
  size: SIZES_BASIC.SMALL,
  value: undefined,
  valueDefault: 0,
  valueFormatter: value => `${value}%`,
  valueText: undefined,
  // ------ Additional subcomponents' props
  indicateSelection: false
};

export default Slider;
