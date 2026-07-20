import cx from "classnames";
import React, { useRef, forwardRef } from "react";
import { useMergeRef, type VibeComponentProps, ComponentDefaultTestId, getTestId } from "@vibe/shared";
import styles from "./HiddenText.module.scss";

export interface HiddenTextProps extends VibeComponentProps {
  /**
   * The text content that is hidden but available for assistive technologies.
   */
  text: string;
}

const HiddenText = forwardRef<HTMLSpanElement, HiddenTextProps>(
  ({ text, className = "", id = "hiddenText", "data-testid": dataTestId }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    return (
      <span
        ref={mergedRef}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.HIDDEN_TEXT, id)}
        className={cx(styles.hiddenTextWrapper, className)}
      >
        {text}
      </span>
    );
  }
);

export default HiddenText;
