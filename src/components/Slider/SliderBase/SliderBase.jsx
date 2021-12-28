import React from "react";
import PropTypes from "prop-types";
import { COLORS_BASIC, SIZES_BASIC } from "../../../constants";
import { createBemBlockHelper } from "../../../helpers/bem-helper";
import "./SliderBase.scss";
import { bem } from "../SliderCommons";
import { calcDimensions } from "./SliderBaseHelpers";
import { useSliderInteractions, useSliderValues } from "./SliderBaseHooks";
import SliderRail from "./SliderRail";
import SliderTrack from "./SliderTrack";
import SliderFilledTrack from "./SliderFilledTrack";
import SliderThumb from "./SliderThumb";

const SliderBase = ({
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
  size,
  value,
  valueDefault,
  valueFormatter,
  valueText
}) => {
  const { actualValue, actualValueText, setValue } = useSliderValues({
    value,
    valueDefault,
    valueFormatter,
    valueText
  });
  const { coords, moveToPx, refs } = useSliderInteractions({ min, max });
  const consumerBem = createBemBlockHelper(classNameBase, { isConsume: true });

  function changeValue(newValue) {
    console.log("change value");
    setValue(newValue);
    if (typeof onChange === "function") {
      onChange(newValue);
    }
  }

  function handleRailClick(e) {
    console.log("handle click on Rail:", e.clientX, coords);
    const fromStartInPx = e.clientX - coords.left;
    const newValue = moveToPx(fromStartInPx);
    changeValue(newValue);
  }

  const { dimension, position } = calcDimensions(max, min, value);
  console.log("plain slider", { disabled, refs, value, dimension, position, coords });
  return (
    <div id={id} className={bem("plain", { [size]: size, [color]: color, disabled }, className)}>
      <SliderRail className={consumerBem("rail")} onClick={handleRailClick} ref={refs.rail} size={size}>
        <SliderTrack className={consumerBem("track")} />
        {refs.rail.current && (
          <>
            <SliderFilledTrack className={consumerBem("filled-track")} dimension={dimension} />
            <SliderThumb
              ariaLabel={ariaLabel}
              ariaLabelBy={ariaLabeledBy}
              className={consumerBem("thumb")}
              disabled={disabled}
              max={max}
              min={min}
              ref={refs.thumb}
              position={position}
              size={size}
              value={actualValue}
              valueText={actualValueText}
            />
          </>
        )}
      </SliderRail>
    </div>
  );
};

SliderBase.colors = COLORS_BASIC;
SliderBase.sizes = SIZES_BASIC;

SliderBase.propTypes = {
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
  color: PropTypes.oneOf(Object.values(SliderBase.colors)),
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
  size: PropTypes.oneOf(Object.values(SliderBase.sizes)),
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
  valueText: PropTypes.string
};

SliderBase.defaultProps = {
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
  valueText: undefined
};

export default SliderBase;
