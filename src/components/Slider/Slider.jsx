import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { SIZES_BASIC } from "./SliderCommons";
import { useSlider } from "./SliderHooks";
import SliderBlock from "./SliderBlock";
import PlainSlider from "./PlainSlider/PlainSlider";
import { PlainSliderProps, PlainSliderDefaultProps } from "./PlainSlider/PlainSliderCommons";
import PercentageLabel from "../ProgressBars/PercentageLabel/PercentageLabel";
import "./Slider.scss";

const Slider = forwardRef((props, ref) => {
  const { blockProps, plainProps, labelProps, is, mergedRef } = useSlider(props, ref);
  return (
    <SliderBlock ref={mergedRef} {...blockProps}>
      <PlainSlider {...plainProps} />
      {is.label && <PercentageLabel {...labelProps} />}
    </SliderBlock>
  );
});

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
