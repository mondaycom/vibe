import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import VibeComponentProps from "src/types/VibeComponentProps";
import styles from "./HiddenText.module.scss";

interface HiddenTextProps extends VibeComponentProps {
  text: string;
}

const HiddenText = forwardRef<HTMLSpanElement, HiddenTextProps>(
  ({ text, className = "", id = "hiddenText", "data-testid": dataTestId }, ref) => {
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
  }
);

export default HiddenText;
