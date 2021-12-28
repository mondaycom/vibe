import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./SliderBlock.scss";
import { bem } from "./SliderCommons";

const SliderBlock = forwardRef(({ children, className, disabled, id }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
  console.log("slider: block", { children, className, id });
  return (
    <div ref={mergedRef} className={bem("", { disabled }, className)} id={id}>
      {children}
    </div>
  );
});

SliderBlock.propTypes = {
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
  id: PropTypes.string
};

SliderBlock.defaultProps = {
  className: undefined,
  disabled: false,
  id: undefined
};

export default SliderBlock;
