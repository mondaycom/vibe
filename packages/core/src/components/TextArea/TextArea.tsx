import React, { forwardRef } from "react";
import cx from "classnames";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./TextArea.module.scss";
import { TextAreaProps, TextAreaSize } from "./TextArea.types";
import Text from "../Text/Text";

const DEFAULT_ROWS: Record<TextAreaSize, number> = {
  small: 3,
  large: 4
};

const TextArea = forwardRef(
  (
    {
      size = "small",
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
      "aria-label": ariaLabel,
      required,
      resize = true,
      placeholder
    }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const numRows = rows || DEFAULT_ROWS[size];
    const helpTextId = helpText && `${id}-help-text`;

    return (
      <div
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
          <label className={cx(styles.label, { [styles.required]: required })} htmlFor={id}>
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          rows={numRows}
          className={cx(styles.textArea, [styles[size]], { [styles.resize]: resize })}
          value={value}
          onChange={onChange}
          aria-invalid={error}
          aria-label={ariaLabel}
          aria-describedby={helpTextId ?? undefined}
          placeholder={placeholder}
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
