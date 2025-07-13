import { useCallback, useEffect, useState } from "react";
import { NumberFieldProps } from "../NumberField.types";
import { calculateSteppedValue } from "../utils/calcValue";

export type UseNumberFieldStateProps = Pick<
  NumberFieldProps,
  "value" | "onChange" | "min" | "max" | "step" | "disabled" | "readOnly" | "allowOutOfBounds" | "onValidityChange"
>;

const useNumberFieldState = ({
  value: controlledValue,
  onChange,
  min,
  max,
  step = 1,
  disabled,
  readOnly,
  allowOutOfBounds,
  onValidityChange
}: UseNumberFieldStateProps) => {
  const [inputValue, setInputValue] = useState(controlledValue === null ? "" : String(controlledValue));

  useEffect(() => {
    const controlledValueStr = controlledValue === null ? "" : String(controlledValue);
    setInputValue(prevInputValue =>
      controlledValue !== parseFloat(prevInputValue) ? controlledValueStr : prevInputValue
    );
  }, [controlledValue]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const stringValue = event.target.value;

      if (stringValue === "") {
        setInputValue("");
        onChange(null, event);
        return;
      }

      const numericRegex = /^-?\d*\.?\d*$/;
      if (!numericRegex.test(stringValue)) {
        return;
      }

      setInputValue(stringValue);
      const isPartial = stringValue === "-" || stringValue.endsWith(".");
      if (isPartial && stringValue.length === 1 && stringValue.endsWith(".")) {
        onChange(0, event);
        return;
      }

      if (!isPartial) {
        const newNumber = parseFloat(stringValue);
        if (allowOutOfBounds) {
          if (newNumber !== controlledValue) {
            onChange(newNumber, event);
          }
          return;
        }

        const clampedValue = Math.max(min ?? -Infinity, Math.min(max ?? Infinity, newNumber));
        if (clampedValue !== controlledValue) {
          onChange(clampedValue, event);
        }
      }
    },
    [onChange, allowOutOfBounds, min, max, controlledValue]
  );

  useEffect(() => {
    if (!onValidityChange) return;

    if (controlledValue === null) {
      onValidityChange(true);
      return;
    }

    const isWithinBounds =
      (min === undefined || controlledValue >= min) && (max === undefined || controlledValue <= max);
    onValidityChange(isWithinBounds);
  }, [controlledValue, min, max, onValidityChange]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled || readOnly) {
        return;
      }

      const isArrowUp = event.key === "ArrowUp";
      const isArrowDown = event.key === "ArrowDown";

      if (isArrowUp || isArrowDown) {
        event.preventDefault();
        const direction = isArrowUp ? 1 : -1;
        const newValue = calculateSteppedValue({
          value: controlledValue,
          direction,
          step,
          min,
          max,
          allowOutOfBounds
        });
        onChange(newValue, event);
      }
    },
    [controlledValue, step, min, max, onChange, disabled, readOnly, allowOutOfBounds]
  );

  const isAtMin = !allowOutOfBounds && controlledValue !== null && min !== undefined && controlledValue <= min;
  const isAtMax = !allowOutOfBounds && controlledValue !== null && max !== undefined && controlledValue >= max;

  return {
    inputValue,
    numericValue: controlledValue,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    isAtMin,
    isAtMax
  };
};

export default useNumberFieldState;
