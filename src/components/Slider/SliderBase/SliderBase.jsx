import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./SliderBase.scss";
import { bem } from "../SliderCommons";
import { useSliderInteractions } from "../SliderHooks";
import SliderRail from "./SliderRail";
import SliderTrack from "./SliderTrack";
import SliderFilledTrack from "./SliderFilledTrack";
import SliderThumb from "./SliderThumb";
import { useSliderActions, useSliderSelection, useSliderUi } from "../SliderContext";
import { isArrowDownEvent, isArrowLeftEvent, isArrowRightEvent, isArrowUpEvent } from "../../../utils/dom-event-utils";

export function calcDimensions(max, min, value) {
  const valuePoints = max - min;
  const dimension = Math.round((value * 100) / valuePoints);
  const position = dimension;
  return { dimension, position };
}

const SliderBase = forwardRef(({ className, onChange }, ref) => {
  const { color, disabled, size, consumerBem } = useSliderUi();
  const { min, max, value } = useSliderSelection();
  const { changeValue, increaseValue, decreaseValue, setFocused } = useSliderActions();
  const { coords, moveToPx, railRef } = useSliderInteractions({ min, max, ref });
  const { dimension, position } = calcDimensions(max, min, value);

  function handleRailClick(e) {
    console.log("handle click on rail:", e.clientX, coords);
    const fromStartInPx = e.clientX - coords.left;
    const newValue = moveToPx(fromStartInPx);
    changeValue(newValue);
    setFocused(true);
  }

  function handleKeyDown(e) {
    if (isArrowUpEvent(e) || isArrowRightEvent(e)) {
      return increaseValue();
    }
    if (isArrowDownEvent(e) || isArrowLeftEvent(e)) {
      return decreaseValue();
    }
  }

  console.log("base slider", { disabled, railRef, value, dimension, position, coords });
  return (
    <div onKeyDown={handleKeyDown} className={bem("base", { [size]: size, [color]: color, disabled }, className)}>
      <SliderRail className={consumerBem("rail")} onClick={handleRailClick} ref={railRef}>
        <SliderTrack className={consumerBem("track")} />
        {railRef.current && (
          <>
            <SliderFilledTrack className={consumerBem("filled-track")} dimension={dimension} onChange={onChange} />
            <SliderThumb className={consumerBem("filled-track")} position={position} />
          </>
        )}
      </SliderRail>
    </div>
  );
});

SliderBase.propTypes = {
  /**
   * Custom `class name` to be added to the component-root-node
   */
  className: PropTypes.string,
  /**
   * Optional onChange callback (for outer trigger or Controlled mode)
   * - required in Controlled Mode
   */
  onChange: PropTypes.func
};

SliderBase.defaultProps = {
  className: "",
  onChange: undefined
};

export default SliderBase;
