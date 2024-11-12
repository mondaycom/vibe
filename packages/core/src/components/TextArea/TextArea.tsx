import React, { forwardRef, useCallback, useState } from "react";
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
      resize = true,
      showCharCount = false,
      ...rest
    }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const numRows = rows || DEFAULT_ROWS[size];
    const helpTextId = helpText && `${id}-help-text`;
    const allowExceedingMaxLengthTextId = allowExceedingMaxLength && `${id}-allow-exceeding-max-length`;

    const [characterCount, setCharacterCount] = useState(rest.value?.length || 0);

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
            [styles.error]: error || (maxLength && characterCount > maxLength),
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
          maxLength={typeof maxLength === "number" && !allowExceedingMaxLength ? maxLength : undefined}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          rows={numRows}
          className={cx(styles.textArea, [styles[size]], { [styles.resize]: resize })}
          aria-invalid={error}
          aria-describedby={[helpTextId, allowExceedingMaxLengthTextId].filter(id => !!id).join(" ") || undefined}
          onChange={handleOnChange}
        />
        <Flex gap={Flex.gaps.XS} className={cx(styles.subTextContainer)}>
          {helpText && (
            <Text className={cx(styles.helpText)} color={Text.colors.INHERIT} id={helpTextId}>
              {helpText}
            </Text>
          )}
          {showCharCount && (
            <Flex className={cx(styles.limitText)}>
              {characterCount}
              {maxLength && `/${maxLength}`}
              <HiddenText id={allowExceedingMaxLengthTextId} text={`Maximum of ${maxLength} characters`} />
            </Flex>
          )}
        </Flex>
      </div>
    );
  }
);

export default TextArea;
