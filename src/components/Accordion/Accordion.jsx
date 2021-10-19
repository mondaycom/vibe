import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./Accordion.scss";

const Accordion = forwardRef(({ className, id }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div ref={mergedRef} className={cx("accordion--wrapper", className)} id={id}>
      My awesome new component
    </div>
  );
});

Accordion.propTypes = {
   /**
   * class name to be add to the wrapper
   */
  className: PropTypes.string,
  /**
   * id to be add to the wrapper
   */
  id: PropTypes.string
};
Accordion.defaultProps = {
  className: "",
  id: undefined
};

export default Accordion;
