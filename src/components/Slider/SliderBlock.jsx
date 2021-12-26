import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import { COMPONENT_ID, createBemHelper } from "./SliderCommons";
import "./SliderBlock.scss";

const bem = createBemHelper(COMPONENT_ID);

const SliderBlock = forwardRef(({ children, className, id }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
  console.log("slider: block", { children, className, id });
  return (
    <div ref={mergedRef} className={bem("", "", className)} id={id}>
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
   * Attribute `id` to be added to the Component's-Root-Node
   */
  id: PropTypes.string
};

SliderBlock.defaultProps = {
  className: undefined,
  id: undefined
};

export default SliderBlock;
