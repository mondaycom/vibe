import React, { forwardRef, useState } from "react";
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
      required,
      characterLimit,
      allowExceedingLimit,
      onChange,
      resize = true,
      ...rest
    }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const numRows = rows || DEFAULT_ROWS[size];
    const helpTextId = helpText && `${id}-help-text`;

    const [characterCount, setCharacterCount] = useState(rest.value?.length || 0);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (!allowExceedingLimit && event.currentTarget.value.length >= characterLimit && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault();
        event.stopPropagation();
      }
      rest.onKeyDown?.(event);
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharacterCount(event.target.value.length);
      onChange?.(event);
    }

    return (
      <div
        className={cx(
          styles.textAreaWrapper,
          {
            [styles.error]: error || (characterLimit && characterCount > characterLimit),
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
          {...rest}
          id={id}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          rows={numRows}
          className={cx(styles.textArea, [styles[size]], { [styles.resize]: resize })}
          aria-invalid={error}
          aria-describedby={helpTextId ?? undefined}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        <div className={cx(styles.subTextContainer)}>
          {helpText && (
            <Text className={cx(styles.helpText)} color={Text.colors.INHERIT} id={helpTextId}>
              {helpText}
            </Text>
          )}
          {characterLimit && <div className={cx(styles.limitText)}>{characterCount}/{characterLimit}</div>}
        </div>
      </div>
    );
  }
);

export default TextArea;
