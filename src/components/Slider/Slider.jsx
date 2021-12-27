import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import { SIZES_BASIC } from "./SliderCommons";
import { useSlider } from "./SliderHooks";
import SliderBlock from "./SliderBlock";
import PlainSlider from "./PlainSlider/PlainSlider";
import { PlainSliderDefaultProps, PlainSliderProps } from "./PlainSlider/PlainSliderCommons";
import { useSliderValues } from "./PlainSlider/PlainSliderHooks";
import "./Slider.scss";

const Slider = forwardRef(
  (
    {
      ariaLabel,
      ariaLabeledBy,
      className,
      classNameBase,
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
    const { subProps, is } = useSlider({
      ariaLabel,
      ariaLabeledBy,
      className,
      classNameBase,
      id,
      indicateSelection,
      max,
      min,
      size
    });
    const { finalValue, finalValueText, setValue } = useSliderValues({
      value,
      valueDefault,
      valueFormatter,
      valueText
    });
    function handleChange(newValue) {
      console.log("slider: handleChange", newValue);
      setValue(newValue);
      if (typeof onChange === "function") {
        onChange(newValue);
      }
    }
    return (
      <SliderBlock ref={mergedRef} {...subProps.block}>
        <PlainSlider {...subProps.plain} onChange={handleChange} value={finalValue} valueText={finalValueText} />
        {is.label && <div {...subProps.label}>finalValueText</div>}
      </SliderBlock>
    );
  }
);

Slider.sizes = SIZES_BASIC;

Slider.propTypes = {
  ...PlainSliderProps,
  /**
   * Show selected from Slider range value
   */
  indicateSelection: PropTypes.bool
};

Slider.defaultProps = {
  ...PlainSliderDefaultProps,
  indicateSelection: false
};

export default Slider;
