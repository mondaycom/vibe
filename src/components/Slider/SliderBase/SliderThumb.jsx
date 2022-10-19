import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import cx from "classnames";
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { DialogPosition } from "../../../constants";
import { NOOP } from "../../../utils/function-utils";
import Tooltip from "../../Tooltip/Tooltip";
import { TOOLTIP_SHOW_DELAY } from "../SliderConstants";
import { useSliderActions, useSliderSelection, useSliderUi } from "../SliderContext";
import styles from "./SliderThumb.module.scss";

const tooltipPosition = DialogPosition.TOP;

const SliderThumb = ({ className, index, onMove, position, id, "data-testid": dataTestId }) => {
  const { max, min, ranged, value: valueOrValues, valueText: valueOrValuesText } = useSliderSelection();
  const value = ranged ? valueOrValues[index] : valueOrValues;
  const valueText = ranged ? valueOrValuesText[index] : valueOrValuesText;
  const { active, ariaLabel, ariaLabelledby, disabled, dragging, focused, shapeTestId, showValue } = useSliderUi();
  const { setActive, setFocused, setDragging } = useSliderActions();
  const ref = useRef(null);

  function handleBlur() {
    setFocused(null);
    setActive(null);
  }

  function handleFocus() {
    setFocused(index);
    setActive(index);
  }

  function handlePointerLeave() {
    setActive(null);
  }

  function handlePointerDown(e) {
    e.stopPropagation();
    setDragging(index);
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", stopMove);
  }

  function stopMove() {
    setDragging(null);
    document.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerup", stopMove);
  }

  useEffect(() => {
    if (focused === index && ref && ref.current) {
      ref.current.focus();
    }
  }, [focused, index]);

  return (
    <Tooltip
      open={active === index || dragging === index}
      content={showValue ? null : valueText}
      position={tooltipPosition}
      showDelay={TOOLTIP_SHOW_DELAY}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.SLIDER_THUMB, id)}
    >
      <div
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        aria-valuetext={valueText}
        aria-disabled={disabled}
        className={cx(
          styles.sliderThumb,
          "monday-slider__thumb",
          {
            [styles.dragging]: dragging === index,
            ["monday-slider__thumb--dragging"]: dragging === index,
            [styles.focused]: focused === index,
            ["monday-slider__thumb--focused"]: focused === index,
            "monday-slider__thumb--disabled": disabled,
            [`monday-slider__thumb--index-${index}`]: true
          },
          className
        )}
        id={id}
        data-testid={shapeTestId(`thumb-${index}`)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onPointerDown={handlePointerDown}
        onPointerLeave={handlePointerLeave}
        ref={ref}
        role="slider"
        style={{ left: `${position}%` }}
        tabIndex={disabled ? -1 : 0}
      >
        {showValue && <label className={cx(styles.label, "monday-slider__thumb-label")}>{valueText}</label>}
      </div>
    </Tooltip>
  );
};

SliderThumb.propTypes = {
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className: PropTypes.string,
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  index: PropTypes.number,
  /**
   * On SliderThumb move callback
   */
  onMove: PropTypes.func,
  /**
   * Position (i.e. offset) from start of track/rail, according to value
   */
  position: PropTypes.number
};

SliderThumb.defaultProps = {
  className: "",
  index: 0,
  onMove: NOOP,
  position: 0
};

export default SliderThumb;
