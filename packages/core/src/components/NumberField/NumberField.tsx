import React, { forwardRef, useMemo, useRef } from "react";
import cx from "classnames";
import { type NumberFieldProps } from "./NumberField.types";
import useNumberFieldState from "./hooks/useNumberFieldState";
import useSpinButtonHandlers from "./hooks/useSpinButtonHandlers";
import { BaseInput } from "@vibe/base";
import FieldLabel from "../FieldLabel/FieldLabel";
import InfoText from "../InfoText/InfoText";
import { Icon } from "@vibe/icon";
import NumberFieldSpinButton from "./components/NumberFieldSpinButton/NumberFieldSpinButton";
import styles from "./NumberField.module.scss";
import Flex from "../Flex/Flex";
import useMergeRef from "../../hooks/useMergeRef";
import { ComponentVibeId } from "../../tests/constants";

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

    const renderedRightIcon = useMemo(() => {
      return (
        <NumberFieldSpinButton
          inputId={id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          disabled={disabled || readOnly}
          size={size}
          isAtMin={isAtMin}
          isAtMax={isAtMax}
        />
      );
    }, [id, onIncrement, onDecrement, disabled, readOnly, size, isAtMin, isAtMax]);

    const infoTextId = useMemo(() => {
      return infoText && id ? `${id}-info-text` : undefined;
    }, [infoText, id]);

    const labelId = useMemo(() => {
      return label && id ? `${id}-label` : undefined;
    }, [label, id]);

    return (
      <Flex
        direction="column"
        align="stretch"
        gap="xs"
        className={cx(styles.numberField, className)}
        data-vibe={ComponentVibeId.NUMBER_FIELD}
      >
        <FieldLabel id={labelId} className={styles.label} labelText={label} required={required} labelFor={id} />
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
          aria-labelledby={labelId}
          aria-describedby={infoTextId}
          disabled={disabled}
          readOnly={readOnly}
          size={size}
          error={error}
          success={success}
          renderLeft={renderedLeftIcon}
          renderRight={renderedRightIcon}
        />
        <InfoText
          id={infoTextId}
          text={infoText}
          error={error}
          success={success}
          disabled={disabled}
          readOnly={readOnly}
        />
      </Flex>
    );
  }
);

export default NumberField;
