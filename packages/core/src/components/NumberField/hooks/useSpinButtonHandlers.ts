import { useCallback } from "react";
import { NumberFieldProps } from "../NumberField.types";
import { calculateSteppedValue } from "../utils/calc-value";

export type UseSpinButtonHandlersProps = Pick<
  NumberFieldProps,
  "onChange" | "value" | "step" | "min" | "max" | "allowOutOfBounds" | "readOnly"
>;

const useSpinButtonHandlers = ({
  onChange,
  value,
  step = 1,
  min,
  max,
  allowOutOfBounds,
  readOnly
}: UseSpinButtonHandlersProps) => {
  const handleStep = useCallback(
    (direction: number, event: React.MouseEvent | React.KeyboardEvent) => {
      if (readOnly) return;
      const newValue = calculateSteppedValue({ value, direction, step, min, max, allowOutOfBounds });
      onChange(newValue, event);
    },
    [value, step, min, max, onChange, allowOutOfBounds, readOnly]
  );

  const onIncrement = useCallback(
    (event: React.MouseEvent | React.KeyboardEvent) => {
      handleStep(1, event);
    },
    [handleStep]
  );

  const onDecrement = useCallback(
    (event: React.MouseEvent | React.KeyboardEvent) => {
      handleStep(-1, event);
    },
    [handleStep]
  );

  return {
    onIncrement,
    onDecrement
  };
};

export default useSpinButtonHandlers;
