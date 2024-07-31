import { TextareaHTMLAttributes } from "react";
import { VibeComponentProps } from "../../types";

export type TextAreaSize = "small" | "large";
type TextAreaNativeInputProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "role">;

export interface TextAreaProps extends TextAreaNativeInputProps, VibeComponentProps {
  /**
   * The current value of the textarea.
   */
  value?: string;
  /**
   * Determines the size of the textarea text as well as the default row count.
   */
  size?: TextAreaSize;
  /**
   * Indicates that the textarea has passed validation successfully, controlling
   * the visual styling to convey success.
   */
  success?: boolean;
  /**
   * Indicates an error with the current value of the textarea, controlling
   * the visual styling to convey error.
   */
  error?: boolean;
  /**
   * The number of rows in the textarea. Defaults according to the size prop.
   */
  rows?: number;
  /**
   * Label text associated with the textarea element.
   */
  label?: string;
  /**
   * If true, the textarea becomes non-interactive
   */
  disabled?: boolean;
  /**
   * If true, the textarea is read-only and cannot be modified by the user
   */
  readOnly?: boolean;
  /**
   * Function to call on textarea value change.
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * Help text associated with the textarea element, typically used for guidance.
   */
  helpText?: string;
  /**
   * Accessibility label for the textarea element.
   */
  "aria-label"?: React.AriaAttributes["aria-label"];
  /**
   * If true, the textarea is required and must be filled out by the user.
   */
  required?: boolean;
  /**
   * If true, the textarea can be resized vertically by the user.
   */
  resize?: boolean;
  /**
   * Placeholder text to display when the textarea is empty.
   */
  placeholder?: string;
}
