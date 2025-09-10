import { type InputHTMLAttributes } from "react";
import type { SubIcon } from "../../types";
import { type VibeComponentProps } from "@vibe/shared";
import { type FormElementProps } from "../../types/FormElement";

type NumberFieldNativeInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | "size"
  | "value"
  | "onChange"
  | "disabled"
  | "readOnly"
  | "id"
  | "type"
  | "inputMode"
  | "role"
  | "aria-valuenow"
  | "aria-valuemin"
  | "aria-valuemax"
  | "aria-required"
  | "aria-invalid"
  | "min"
  | "max"
  | "step"
>;

interface NumberFieldBaseProps extends NumberFieldNativeInputProps, Omit<VibeComponentProps, "id"> {
  /**
   * The current value of the number field.
   */
  value: number | null;
  /**
   * Callback fired when the value changes.
   * @param {number | null} value - The new value.
   * @param {React.ChangeEvent<HTMLInputElement> | React.MouseEvent | React.KeyboardEvent} event - The event that triggered the change.
   */
  onChange: (
    value: number | null,
    event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent | React.KeyboardEvent
  ) => void;
  /**
   * If true, the input will be required.
   */
  required?: boolean;
  /**
   * The placeholder text to display when the input is empty.
   */
  placeholder?: string;
  /**
   * If true, the input will be in an error state.
   */
  error?: boolean;
  /**
   * If true, the input will be in a success state.
   */
  success?: boolean;
  /**
   * If true, the input will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the input will be read-only.
   */
  readOnly?: boolean;
  /**
   * The minimum value allowed.
   */
  min?: number;
  /**
   * The maximum value allowed.
   */
  max?: number;
  /**
   * The amount to increment or decrement the value by.
   */
  step?: number;
  /**
   * The size of the input.
   */
  size?: "small" | "medium" | "large";
  /**
   * An icon to display on the left side of the input.
   */
  leftIcon?: SubIcon;
}

type NumberFieldValidityChangeProps =
  | {
      /**
       * If false, the value will be clamped to the min/max values on change.
       */
      allowOutOfBounds?: false;
      onValidityChange?: never;
    }
  | {
      /**
       * If true, the value can exceed the min/max values.
       * Can be used alongside `onValidityChange` to handle the validity of the value.
       */
      allowOutOfBounds: true;
      /**
       * Callback fired when the validity of the value changes (if it is within the min/max bounds).
       */
      onValidityChange?: (isValid: boolean) => void;
    };

export type NumberFieldProps = NumberFieldBaseProps & FormElementProps & NumberFieldValidityChangeProps;
