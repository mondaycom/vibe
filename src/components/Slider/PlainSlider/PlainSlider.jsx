import React from "react";
import { createBemBlockHelper } from "../../../helpers/bem-helper";
import { SIZES_BASIC } from "../../../constants";
import { calcDimensions, COMPONENT_ID, PlainSliderDefaultProps, PlainSliderProps } from "./PlainSliderCommons";
import { usePlainSlider, useSliderInteractions, useSliderValues } from "./PlainSliderHooks";
import SliderRail from "./SliderRail";
import SliderTrack from "./SliderTrack";
import SliderFilledTrack from "./SliderFilledTrack";
import SliderThumb from "./SliderThumb";
import "./PlainSlider.scss";

const bem = createBemBlockHelper(COMPONENT_ID);

const PlainSlider = ({
  ariaLabel,
  ariaLabeledBy,
  className,
  classNameBase,
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
  const consumerBem = createBemBlockHelper(classNameBase);
  const { subProps } = usePlainSlider({
    ariaLabel,
    ariaLabeledBy,
    classNameBase,
    id,
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

  const { coords, moveToPx, refs } = useSliderInteractions({ min, max });

  function handleRailClick(e) {
    console.log("handle click on Rail:", e.clientX, coords);
    const fromStartInPx = e.clientX - coords.left;
    const newValue = moveToPx(fromStartInPx);
    changeValue(newValue);
  }

  function changeValue(newValue) {
    setValue(newValue);
    if (typeof onChange === "function") {
      onChange(newValue);
    }
  }

  const { dimension, position } = calcDimensions(max, min, value);
  console.log("plain slider", { refs, subProps, value, dimension, position, coords });
  return (
    <div className={bem("plain", [size], className)}>
      <SliderRail className={consumerBem("rail")} ref={refs.rail} onClick={handleRailClick}>
        <SliderTrack className={consumerBem("track")} />
        {refs.rail.current && (
          <>
            <SliderFilledTrack className={consumerBem("filled-track")} dimension={dimension} />
            <SliderThumb
              {...subProps.thumb}
              ref={refs.thumb}
              position={position}
              value={finalValue}
              valueText={finalValueText}
            />
          </>
        )}
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
