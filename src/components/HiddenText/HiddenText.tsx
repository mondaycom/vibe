import cx from "classnames";
import React, { useRef, forwardRef } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
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
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.HIDDEN_TEXT, id)}
        className={cx(styles.hiddenTextWrapper, className)}
      >
        {text}
      </span>
    );
  }
);

Object.assign(HiddenText, {
  defaultTestId: ComponentDefaultTestId.HIDDEN_TEXT
});

export default HiddenText;
