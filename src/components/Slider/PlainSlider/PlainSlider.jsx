import React from "react";
import { createBemHelper } from "../SliderCommons";
import { COMPONENT_ID, PlainSliderProps, PlainSliderDefaultProps, SIZES_BASIC } from "./PlainSliderCommons";
import { usePlainSlider } from "./PlainSliderHooks";
import SliderRail from "./SliderRail";
import SliderTrack from "./SliderTrack";
import SliderFilledTrack from "./SliderFilledTrack";
import SliderThumb from "./SliderThumb";
import "./PlainSlider.scss";

const bem = createBemHelper(COMPONENT_ID);

const PlainSlider = ({
  ariaLabel,
  ariaLabeledBy,
  className,
  classNameBase,
  id,
  max,
  min,
  size,
  value,
  valueDefault,
  valueText
}) => {
  const { filledTrackProps, trackProps, railProps, thumpProps } = usePlainSlider({
    ariaLabel,
    ariaLabeledBy,
    classNameBase,
    id,
    max,
    min,
    size,
    value,
    valueDefault,
    valueText
  });
  console.log("plain slider", { filledTrackProps, trackProps, railProps, thumpProps });
  return (
    <div className={bem("plain", [size], className)}>
      <SliderRail {...railProps}>
        <SliderTrack {...trackProps} />
        <SliderFilledTrack {...filledTrackProps} />
        <SliderThumb {...thumpProps} />
      </SliderRail>
    </div>
  );
};

PlainSlider.sizes = SIZES_BASIC;

PlainSlider.propTypes = {
  ...PlainSliderProps
  // TODO: do we need extend props here?
  // extendedProp: PropTypes.string
};

PlainSlider.defaultProps = {
  ...PlainSliderDefaultProps
  // TODO: do we need extend default props here?
  // extendedProp: ""
};

export default PlainSlider;
