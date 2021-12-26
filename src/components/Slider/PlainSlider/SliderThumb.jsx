import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import useMergeRefs from "../../../hooks/useMergeRefs";
import { COMPONENT_ID, createBemHelper, ensureValueText, SIZES_BASIC } from "../SliderCommons";
import "./SliderThumb.scss";

const bem = createBemHelper(COMPONENT_ID);

const SliderThumb = forwardRef(
  ({ className, ariaLabeledBy, ariaLabel, id, forElement, max, min, valueText, size, value }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    console.log("slider: thumb", { className, ariaLabeledBy, ariaLabel, id, forElement, max, min, valueText, value });
    return (
      <div
        id={id}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabeledBy}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        aria-valuetext={ensureValueText(valueText, value)}
        className={bem("thumb", [size], className)}
        ref={mergedRef}
        role="slider"
        tabIndex={0}
      />
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
   * Size small/medium/large of the component (Slider)
   */
  size: PropTypes.oneOf(Object.values(SIZES_BASIC))
};

SliderThumb.defaultProps = {
  ariaLabel: undefined,
  ariaLabeledBy: undefined,
  className: "",
  id: undefined,
  size: SIZES_BASIC.MEDIUM
};

export default SliderThumb;

/** `htmlFor/for` attribute to add to the component-root-node */
// forElement: PropTypes.string,
//     forElement: undefined,
