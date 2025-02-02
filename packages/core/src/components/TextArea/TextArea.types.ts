import { TextareaHTMLAttributes } from "react";
import { VibeComponentProps } from "../../types";

export type TextAreaSize = "small" | "large";
type TextAreaNativeInputProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "role" | "aria-describedby" | "aria-invalid"
>;

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
   * Label text associated with the textarea element.
   */
  label?: string;
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
   * If true, the textarea can be resized vertically by the user.
   */
  resize?: boolean;
  /**
   * Placeholder text to display when the textarea is empty.
   */
  placeholder?: string;
  /**
   * The allowed number of characters.
   */
  maxLength?: number;
  /**
   * If true, the TextArea will allow the user to exceed the character limit set by maxLength.
   * Note: Using this prop will only make sense alongside the maxLength prop.
   */
  allowExceedingMaxLength?: boolean;
  /**
   * If true, the character count and limit will be displayed below the textarea.
   */
  showCharCount?: boolean;
  /**
   * If true, the textarea will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the textarea will be read-only.
   */
  readOnly?: boolean;
}
