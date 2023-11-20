import React, { useLayoutEffect, useRef, forwardRef } from "react";
import cx from "classnames";
import styles from "./HiddenInputPlaceholder.module.scss";
import useMergeRefs from "../../hooks/useMergeRefs";

interface HiddenInputPlaceholderProps {
  className?: string;
  value: string;
  onChange: (width: number) => void;
}

const HiddenInputPlaceholder = forwardRef<HTMLElement, HiddenInputPlaceholderProps>(
  ({ className, value, onChange }, ref) => {
    const valueRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, valueRef] });

    useLayoutEffect(() => {
      const { width } = valueRef.current.getBoundingClientRect();
      onChange(width);
    }, [onChange, value]);

    return (
      <div className={cx(styles.hiddenInputPlaceholder, className)} ref={mergedRef} aria-hidden>
        {value}
      </div>
    );
  }
);

export default HiddenInputPlaceholder;
