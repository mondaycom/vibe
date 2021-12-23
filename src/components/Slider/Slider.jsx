import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./Slider.scss";

const Slider = forwardRef(({ className, id }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div ref={mergedRef} className={cx("slider--wrapper", className)} id={id}>
      My awesome new component
    </div>
  );
});

Slider.propTypes = {
  /**
   * class name to be added to the wrapper
   */
  className: PropTypes.string,
  /**
   * id to be added to the wrapper
   */
  id: PropTypes.string
};
Slider.defaultProps = {
  className: "",
  id: undefined
};

export default Slider;
