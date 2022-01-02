import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { isArrowUpEvent, isArrowDownEvent, isArrowLeftEvent, isArrowRightEvent } from "../../../utils/dom-event-utils";
import { DialogPositions } from "../../../constants";
import Tooltip from "../../Tooltip/Tooltip";
import { bem } from "../SliderCommons";
import { useSliderActions, useSliderSelection, useSliderUi } from "../SliderContext";

const SliderThumb = ({ className, position }) => {
  // const [focused, setFocused] = useState(false);
  const { ariaLabel, ariaLabeledBy, disabled, focused, showValue } = useSliderUi();
  const { step, max, min, value, valueText } = useSliderSelection();
  const { setFocused } = useSliderActions();
  const ref = useRef(null);

  const tooltipShowDelay = 300;
  const tooltipPosition = DialogPositions.TOP;

  // function handlePointerDown(e) {
  //   console.log("-down", ref.current, e);
  // }
  // function handlePointerMove(e) {
  //   const { pageX, pageY, screenX, screenY, target } = e;
  //   // const elThumb = e.target;
  //   const elThumb = ref.current;
  //   // const offset = mergedRef.current.offset();
  //   // const offset = elThumb.offset();
  //   if (elThumb) {
  //     const rect = elThumb.getBoundingClientRect();
  //     console.log("move offset", rect.top, rect.right, rect.bottom, rect.left, rect);
  //   }
  //   console.log("-move", { elThumb, pageX, pageY, screenX, screenY, target }, e);
  // }
  // function handlePointerUp(e) {
  //   console.log("-up", e);
  // }
  // function handlePointerCancel(e) {
  //   console.log("-cancel", e);
  // }
  // function handleGotPointerCapture(e) {
  //   console.log("-got capture", e);
  // }
  // function handleLostPointerCapture(e) {
  //   console.log("-last capture", e);
  // }
  // function handlePointerEnter(e) {
  //   console.log("-enter", e);
  //   // setHovered(false);
  // }
  // function handlePointerLeave(e) {
  //   console.log("-leave", e);
  //   // setHovered(false);
  // }
  function handleFocus(e) {
    console.log("-focus", e);
    setFocused(true);
  }
  function handleBlur(e) {
    console.log("-blur", e);
    setFocused(false);
  }
  // function handlePointerOver(e) {
  //   console.log("-over", e);
  // }
  // function handlePointerOut(e) {
  //   console.log("-out", e);
  // }

  console.log("slider: thumb", { focused, valueText, value });
  return (
    <Tooltip content={showValue ? null : valueText} position={tooltipPosition} showDelay={tooltipShowDelay}>
      <div
        aria-label={ariaLabel}
        aria-labelledby={ariaLabeledBy}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        aria-valuetext={valueText}
        aria-disabled={disabled}
        className={bem("thumb", { focused, disabled }, className)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // onKeyDown={handleKeyDown}
        // onPointerDown={handlePointerDown}
        // onPointerMove={handlePointerMove}
        // onPointerUp={handlePointerUp}
        // onPointerCancel={handlePointerCancel}
        // onGotPointerCapture={handleGotPointerCapture}
        // onLostPointerCapture={handleLostPointerCapture}
        // onPointerEnter={handlePointerEnter}
        // onPointerLeave={handlePointerLeave}
        // onPointerOver={handlePointerOver}
        // onPointerOut={handlePointerOut}
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
   * Position (i.e. offset) from start of track/rail, according to value
   */
  position: PropTypes.number
};

SliderThumb.defaultProps = {
  className: "",
  position: 0
};

export default SliderThumb;
