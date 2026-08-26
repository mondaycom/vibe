import { type TextareaHTMLAttributes } from "react";
import { type VibeComponentProps } from "@vibe/shared";

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
   * If true, applies success styling to the textarea.
   */
  success?: boolean;
  /**
   * If true, applies error styling to the textarea.
   */
  error?: boolean;
  /**
   * The label associated with the textarea.
   */
  label?: string;
  /**
   * Callback fired when the textarea value changes.
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * Help text displayed below the textarea.
   */
  helpText?: string;
  /**
   * The accessibility label for the textarea.
   */
  "aria-label"?: React.AriaAttributes["aria-label"];
  /**
   * If true, the textarea can be resized vertically.
   */
  resize?: boolean;
  /**
   * The placeholder text displayed when the textarea is empty.
   */
  placeholder?: string;
  /**
   * The maximum number of characters allowed.
   */
  maxLength?: number;
  /**
   * If true, allows the user to exceed the character limit set by `maxLength`.
   */
  allowExceedingMaxLength?: boolean;
  /**
   * If true, displays the character count below the textarea.
   */
  showCharCount?: boolean;
  /**
   * If true, disables the textarea.
   */
  disabled?: boolean;
  /**
   * If true, makes the textarea read-only.
   */
  readOnly?: boolean;
}
