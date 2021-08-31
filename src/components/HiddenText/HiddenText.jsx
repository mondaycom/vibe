import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./HiddenText.scss";

const HiddenText = forwardRef(({ className, text, id }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <span ref={mergedRef} id={id} className={cx("hidden-text--wrapper", className)}>
      {text}
    </span>
  );
});

HiddenText.propTypes = {
  /** For overriding default styles. */
  className: PropTypes.string,
  /** So that it can be used for aria-labelledby values. */
  id: PropTypes.string,
  text: PropTypes.string.isRequired
};
HiddenText.defaultProps = {
  className: "",
  id: "hiddenText"
};

export default HiddenText;
