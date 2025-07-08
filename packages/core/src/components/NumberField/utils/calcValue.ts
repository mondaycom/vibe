import { NumberFieldProps } from "../NumberField.types";

type CalculateSteppedValueProps = Pick<NumberFieldProps, "value" | "step" | "min" | "max" | "allowOutOfBounds"> & {
  direction: number;
};

export const calculateSteppedValue = ({
  value,
  direction,
  step = 1,
  min,
  max,
  allowOutOfBounds
}: CalculateSteppedValueProps): number => {
  const numericValue = value ?? 0;
  let newValue = numericValue + direction * step;

  if (allowOutOfBounds) {
    return newValue;
  }

  if (min !== undefined) {
    newValue = Math.max(min, newValue);
  }
  if (max !== undefined) {
    newValue = Math.min(max, newValue);
  }
  return newValue;
};
