import cx from "classnames";
import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./HiddenText.module.scss";

const HiddenText = forwardRef(({ className, text, id, "data-testId": dataTestId }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <span
      ref={mergedRef}
      id={id}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.HIDDEN_TEXT, id)}
      className={cx(styles.wrapper, "hidden-text--wrapper", className)}
    >
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
