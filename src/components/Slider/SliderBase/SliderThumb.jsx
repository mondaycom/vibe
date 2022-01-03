import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { DialogPositions } from "../../../constants";
import Tooltip from "../../Tooltip/Tooltip";
import { bem } from "../SliderCommons";
import { useSliderActions, useSliderSelection, useSliderUi } from "../SliderContext";

const tooltipShowDelay = 300;
const tooltipPosition = DialogPositions.TOP;

const SliderThumb = ({ className, index, position }) => {
  const { max, min, value, valueText } = useSliderSelection(index);
  const { ariaLabel, ariaLabeledBy, disabled, focused, showValue } = useSliderUi();
  const { setFocused, setDragging } = useSliderActions();
  const ref = useRef(null);

  function handleBlur() {
    setFocused(null);
  }

  function handleFocus() {
    setFocused(index);
  }

  function handlePointerDown(e) {
    e.stopPropagation();
    setDragging(true);
    document.addEventListener("pointerup", stopMove);
  }

  function stopMove() {
    setDragging(false);
    document.removeEventListener("pointerup", stopMove);
  }

  useEffect(() => {
    if (focused === index && ref && ref.current) {
      ref.current.focus();
    }
  }, [focused, index]);

  console.log("thumb", index, { focused, valueText, value });
  return (
    <Tooltip
      open={focused === index}
      content={showValue ? null : valueText}
      position={tooltipPosition}
      showDelay={tooltipShowDelay}
    >
      <div
        aria-label={ariaLabel}
        aria-labelledby={ariaLabeledBy}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        aria-valuetext={valueText}
        aria-disabled={disabled}
        className={bem("thumb", { focused: focused === index, disabled, [`index-${index}`]: true }, className)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onPointerDown={handlePointerDown}
        ref={ref}
        role="slider"
        style={{ left: `${position}%` }}
        tabIndex={disabled ? -1 : 0}
      >
        {showValue && <label className={bem("thumb-label")}>{valueText}</label>}
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
   * Position (i.e. offset) from start of track/rail, according to value
   */
  position: PropTypes.number
};

SliderThumb.defaultProps = {
  className: "",
  index: 0,
  position: 0
};

export default SliderThumb;
