import React, { forwardRef, useMemo, useRef } from "react";
import cx from "classnames";
import { NumberFieldProps } from "./NumberField.types";
import useNumberFieldState from "./hooks/useNumberFieldState";
import useSpinButtonHandlers from "./hooks/useSpinButtonHandlers";
import BaseInput from "../BaseInput/BaseInput";
import FieldLabel from "../FieldLabel/FieldLabel";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import NumberFieldSpinButton from "./components/NumberFieldSpinButton/NumberFieldSpinButton";
import styles from "./NumberField.module.scss";
import Flex from "../Flex/Flex";
import useMergeRef from "../../hooks/useMergeRef";

const NumberField = forwardRef(
  (
    {
      className,
      value,
      onChange,
      label,
      required,
      placeholder,
      infoText,
      error,
      success,
      disabled,
      readOnly,
      min,
      max,
      step = 1,
      size = "medium",
      leftIcon,
      "aria-label": ariaLabel,
      id,
      "data-testid": dataTestId,
      allowOutOfBounds,
      onValidityChange,
      ...inputProps
    }: NumberFieldProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRef<HTMLInputElement>(ref, inputRef);

    const {
      inputValue,
      numericValue,
      onChange: handleChange,
      onKeyDown,
      isAtMin,
      isAtMax
    } = useNumberFieldState({
      value,
      onChange,
      min,
      max,
      step,
      disabled,
      readOnly,
      allowOutOfBounds,
      onValidityChange
    });

    const { onIncrement, onDecrement } = useSpinButtonHandlers({
      onChange,
      value: numericValue,
      step,
      min,
      max,
      allowOutOfBounds,
      readOnly,
      inputRef
    });

    const renderedLeftIcon = useMemo(() => {
      if (!leftIcon) return null;
      return <Icon icon={leftIcon} className={styles.leftIcon} />;
    }, [leftIcon]);

    return (
      <Flex
        direction="column"
        align="stretch"
        gap="xs"
        className={cx(
          styles.numberField,
          {
            [styles.error]: error,
            [styles.success]: success,
            [styles.disabled]: disabled,
            [styles.readOnly]: readOnly
          },
          className
        )}
      >
        {label && <FieldLabel className={styles.label} labelText={label} required={required} labelFor={id} />}
        <BaseInput
          {...inputProps}
          data-testid={dataTestId}
          ref={mergedRef}
          id={id}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          type="text"
          inputMode="numeric"
          inputRole="spinbutton"
          aria-valuenow={numericValue}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-required={required}
          aria-label={ariaLabel || label}
          disabled={disabled}
          readOnly={readOnly}
          size={size}
          error={error}
          success={success}
          renderLeft={renderedLeftIcon}
          renderRight={
            <NumberFieldSpinButton
              inputId={id}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              disabled={disabled || readOnly}
              size={size}
              isAtMin={isAtMin}
              isAtMax={isAtMax}
            />
          }
        />
        {infoText && (
          <Text type={Text.types.TEXT2} className={styles.infoText}>
            {infoText}
          </Text>
        )}
      </Flex>
    );
  }
);

export default NumberField;
