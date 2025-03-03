import React, { forwardRef, useCallback, useMemo, useState } from "react";
import cx from "classnames";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./TextArea.module.scss";
import { TextAreaProps, TextAreaSize } from "./TextArea.types";
import Text from "../Text/Text";
import { Flex } from "../Flex";
import { HiddenText } from "../HiddenText";

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
      maxLength,
      allowExceedingMaxLength,
      onChange,
      value,
      resize = true,
      showCharCount = false,
      ...rest
    }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const numRows = rows || DEFAULT_ROWS[size];
    const helpTextId = helpText && `${id}-help-text`;
    const allowExceedingMaxLengthTextId = allowExceedingMaxLength && `${id}-allow-exceeding-max-length`;

    const ariaDescribedby = useMemo(
      () => [helpTextId, allowExceedingMaxLengthTextId].filter(id => !!id).join(" ") || undefined,
      [helpTextId, allowExceedingMaxLengthTextId]
    );

    const [characterCount, setCharacterCount] = useState(value?.length || 0);
    const isErrorState = error || (typeof maxLength === "number" && characterCount > maxLength);

    const handleOnChange = useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCharacterCount(event.target.value.length);
        onChange?.(event);
      },
      [onChange]
    );

    return (
      <div
        className={cx(
          styles.textAreaWrapper,
          {
            [styles.error]: isErrorState,
            [styles.success]: success,
            [styles.disabled]: disabled,
            [styles.readOnly]: readOnly
          },
          className
        )}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TEXT_AREA, id)}
        data-vibe={ComponentDefaultTestId.TEXT_AREA}
      >
        {label && (
          <label className={cx(styles.label, { [styles.required]: required })} htmlFor={id}>
            {label}
          </label>
        )}
        <textarea
          {...rest}
          id={id}
          maxLength={typeof maxLength === "number" && !allowExceedingMaxLength ? maxLength : undefined}
          ref={ref}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          rows={numRows}
          className={cx(styles.textArea, [styles[size]], { [styles.resize]: resize })}
          aria-invalid={isErrorState}
          aria-describedby={ariaDescribedby}
          onChange={handleOnChange}
        />
        {(showCharCount || helpText) && (
          <Flex gap="xs" justify="space-between" className={cx(styles.subTextContainer)}>
            {helpText && (
              <Text className={cx(styles.helpText)} color="inherit" id={helpTextId}>
                {helpText}
              </Text>
            )}
            {showCharCount && (
              <>
                <Text className={styles.limitText}>
                  {characterCount}
                  {typeof maxLength === "number" && `/${maxLength}`}
                </Text>
                <HiddenText id={allowExceedingMaxLengthTextId} text={`Maximum of ${maxLength} characters`} />
              </>
            )}
          </Flex>
        )}
      </div>
    );
  }
);

export default TextArea;
