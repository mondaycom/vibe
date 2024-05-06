import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./TextArea.module.scss";
import { TextAreaProps } from "./TextArea.types";
import Text from "../Text/Text";

const DEFAULT_ROWS = {
  medium: 3,
  large: 4
};

const TextArea = forwardRef(
  (
    {
      size = "medium",
      rows,
      label,
      helpText,
      success,
      error,
      className,
      "data-testid": dataTestId,
      id,
      disabled,
      readOnly,
      value,
      onChange,
      ariaLabel,
      required
    }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const numRows = rows || DEFAULT_ROWS[size];
    const helpTextId = helpText && `${id}-help-text`;

    return (
      <div
        ref={mergedRef}
        className={cx(
          styles.textAreaWrapper,
          {
            [styles.error]: error,
            [styles.success]: success,
            [styles.disabled]: disabled,
            [styles.readOnly]: readOnly
          },
          className
        )}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TEXT_AREA, id)}
      >
        {label && (
          <label className={styles.label} htmlFor={id}>
            {label}
            {required && <span className={styles.required}> *</span>}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          rows={numRows}
          className={cx(styles.textArea, [styles[size]])}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-label={ariaLabel}
          aria-describedby={helpTextId ?? undefined}
        />
        {helpText && (
          <Text className={cx(styles.helpText)} color={Text.colors.INHERIT} id={helpTextId}>
            {helpText}
          </Text>
        )}
      </div>
    );
  }
);

export default TextArea;
