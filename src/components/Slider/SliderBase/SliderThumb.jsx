import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { DialogPositions } from "../../../constants";
import Tooltip from "../../Tooltip/Tooltip";
import { bem } from "../SliderCommons";

const SliderThumb = forwardRef(
  ({ ariaLabeledBy, ariaLabel, className, disabled, id, max, min, position, showValue, valueText, value }, ref) => {
    const [focused, setFocused] = useState(false);

    const tooltipShowDelay = 300;
    const tooltipPosition = DialogPositions.TOP;

    function handlePointerDown(e) {
      console.log("-down", ref.current, e);
    }
    function handlePointerMove(e) {
      const { pageX, pageY, screenX, screenY, target } = e;
      // const elThumb = e.target;
      const elThumb = ref.current;
      // const offset = mergedRef.current.offset();
      // const offset = elThumb.offset();
      if (elThumb) {
        const rect = elThumb.getBoundingClientRect();
        console.log("move offset", rect.top, rect.right, rect.bottom, rect.left, rect);
      }
      console.log("-move", { elThumb, pageX, pageY, screenX, screenY, target }, e);
    }
    function handlePointerUp(e) {
      console.log("-up", e);
    }
    function handlePointerCancel(e) {
      console.log("-cancel", e);
    }
    function handleGotPointerCapture(e) {
      console.log("-got capture", e);
    }
    function handleLostPointerCapture(e) {
      console.log("-last capture", e);
    }
    function handlePointerEnter(e) {
      console.log("-enter", e);
      // setHovered(false);
    }
    function handlePointerLeave(e) {
      console.log("-leave", e);
      // setHovered(false);
    }
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
    console.log("slider: thumb", {
      ref: ref.current,
      focused,
      disabled,
      className,
      ariaLabeledBy,
      ariaLabel,
      id,
      max,
      min,
      valueText,
      value
    });
    return (
      <Tooltip content={showValue ? null : valueText} position={tooltipPosition} showDelay={tooltipShowDelay}>
        <div
          id={id}
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
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onGotPointerCapture={handleGotPointerCapture}
          onLostPointerCapture={handleLostPointerCapture}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
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
  }
);

SliderThumb.propTypes = {
  /**
   * Define a string that labels the current element (Slider)
   */
  ariaLabel: PropTypes.string,
  /**
   * ElementId of element that have the text needed for labeling the current element (Slider)
   */
  ariaLabeledBy: PropTypes.string,
  /**
   * Consumer/Custom/Extra `class names` to be added to the Component's-Root-Node
   */
  className: PropTypes.string,
  /**
   * If set to true, Component will be disabled
   */
  disabled: PropTypes.bool,
  /**
   * Attribute `id` to be added to the Component's-Root-Node
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
   * Position (i.e. offset) from start of track/rail, according to value
   */
  position: PropTypes.number,
  /**
   * Always show `value` instead of Tooltip
   */
  showValue: PropTypes.bool,
  /**
   * Current/selected value of the range of the Component (Slider)
   *   - should be used in Controlled Mode only
   */
  value: PropTypes.number,
  /**
   * Text/presentation of current/selected value
   *  - should be used in Controlled Mode only
   */
  valueText: PropTypes.string
};

SliderThumb.defaultProps = {
  ariaLabel: undefined,
  ariaLabeledBy: undefined,
  className: "",
  disabled: false,
  id: undefined,
  max: 100,
  min: 0,
  position: 0,
  showValue: false,
  value: undefined,
  valueText: undefined
};

export default SliderThumb;
