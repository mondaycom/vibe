import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { DialogPositions } from "../../../constants/sizes";
import Tooltip from "../../Tooltip/Tooltip";
import { COMPONENT_ID, createBemHelper, SIZES_BASIC } from "../SliderCommons";
import "./SliderThumb.scss";

const bem = createBemHelper(COMPONENT_ID);

const SliderThumb = forwardRef(
  (
    { className, ariaLabeledBy, ariaLabel, id, isActive, forElement, max, min, position, valueText, size, value },
    ref
  ) => {
    const [active, setActive] = useState(isActive);

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
      setActive(true);
    }
    function handlePointerLeave(e) {
      console.log("-leave", e);
      setActive(false);
    }
    // function handlePointerOver(e) {
    //   console.log("-over", e);
    // }
    // function handlePointerOut(e) {
    //   console.log("-out", e);
    // }
    console.log("slider: thumb", {
      ref: ref.current,
      active,
      className,
      ariaLabeledBy,
      ariaLabel,
      id,
      forElement,
      max,
      min,
      valueText,
      value
    });
    return (
      <Tooltip content={valueText} position={tooltipPosition} showDelay={tooltipShowDelay}>
        <div
          id={id}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabeledBy}
          aria-valuemax={max}
          aria-valuemin={min}
          aria-valuenow={value}
          aria-valuetext={valueText}
          className={bem("thumb", { [size]: !!size, active }, className)}
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
          tabIndex={0}
        />
      </Tooltip>
    );
  }
);

SliderThumb.sizes = SIZES_BASIC;

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
   * Attribute `id` to be added to the Component's-Root-Node
   */
  id: PropTypes.string,
  /**
   * Position (i.e. offset) from start of track/rail, according to value
   */
  position: PropTypes.number,
  /**
   * Size small/medium/large of the component (Slider)
   */
  size: PropTypes.oneOf(Object.values(SIZES_BASIC))
};

SliderThumb.defaultProps = {
  ariaLabel: undefined,
  ariaLabeledBy: undefined,
  className: "",
  id: undefined,
  position: 0,
  size: SIZES_BASIC.MEDIUM
};

export default SliderThumb;
