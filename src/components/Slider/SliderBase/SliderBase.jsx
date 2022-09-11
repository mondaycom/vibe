import { camelCase } from "lodash";
import cx from "classnames";
import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import {
  isArrowDownEvent,
  isArrowLeftEvent,
  isArrowRightEvent,
  isArrowUpEvent,
  isEndEvent,
  isHomeEvent,
  isPageDownEvent,
  isPageUpEvent
} from "../../../utils/dom-event-utils";
import { useSliderActions, useSliderSelection, useSliderUi } from "../SliderContext";
import { calcDimensions, calculatePageStep, getNearest, moveToPx } from "../SliderHelpers";
import { useSliderRail } from "../SliderHooks";
import SliderRail from "./SliderRail";
import SliderTrack from "./SliderTrack";
import SliderFilledTrack from "./SliderFilledTrack";
import SliderThumb from "./SliderThumb";
import styles from "./SliderBase.module.scss";

const SliderBase = forwardRef(({ className, id }, ref) => {
  const { color, disabled, size, shapeTestId } = useSliderUi();
  const { min, max, ranged, step, value } = useSliderSelection();
  const { changeThumbValue, drugThumb, decreaseValue, increaseValue } = useSliderActions();
  const { railCoords, railRef } = useSliderRail({ min, max, step, ref });
  const { dimension, offset, positions, thumbKeys } = calcDimensions({ max, min, ranged, value });

  const handlePointerMove = useCallback(
    e => {
      const offsetInPx = Math.round(e.clientX - railCoords.left);
      const newValue = moveToPx({ offsetInPx, min, max, railCoords, step });
      drugThumb(newValue);
    },
    [drugThumb, min, max, railCoords, step]
  );

  const handleRailClick = useCallback(
    e => {
      const offsetInPx = e.clientX - railCoords.left;
      const newValue = moveToPx({ offsetInPx, min, max, railCoords, step });
      const thumbIndex = getNearest({ newValue, ranged, value });
      changeThumbValue(newValue, { thumbIndex });
    },
    [changeThumbValue, min, max, railCoords, ranged, step, value]
  );

  function handleKeyDown(e) {
    if (isArrowUpEvent(e) || isArrowRightEvent(e)) {
      return increaseValue();
    }
    if (isArrowDownEvent(e) || isArrowLeftEvent(e)) {
      return decreaseValue();
    }
    if (isPageUpEvent(e)) {
      e.preventDefault();
      return increaseValue(calculatePageStep({ min, max, step }));
    }
    if (isPageDownEvent(e)) {
      e.preventDefault();
      return decreaseValue(calculatePageStep({ min, max, step }));
    }
    if (isHomeEvent(e)) {
      e.preventDefault();
      return changeThumbValue(max);
    }
    if (isEndEvent(e)) {
      e.preventDefault();
      return changeThumbValue(min);
    }
  }

  return (
    <div
      className={cx(
        styles.sliderBase,
        "monday-slider__base",
        {
          [styles[`${camelCase("slider__base--" + size)}`]]: size,
          [`monday-slider__base--${size}`]: size,
          [styles[`${camelCase("slider__base--" + color)}`]]: color,
          [`monday-slider__base--${color}`]: color,
          [styles.sliderBaseDisabled]: disabled,
          ["monday-slider__base--disabled"]: disabled
        },
        className
      )}
      id={id}
      data-testid={shapeTestId("base")}
      onKeyDown={handleKeyDown}
    >
      <SliderRail onClick={handleRailClick} ref={railRef}>
        <SliderTrack />
        {railRef.current && (
          <>
            <SliderFilledTrack dimension={dimension} offset={offset} />
            {positions.map((position, index) => {
              return (
                <SliderThumb key={thumbKeys[index]} index={index} onMove={handlePointerMove} position={position} />
              );
            })}
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
  className: PropTypes.string
};

SliderBase.defaultProps = {
  className: ""
};

export default SliderBase;
