import { AriaRole, InputHTMLAttributes, ReactNode } from "react";
import { VibeComponentProps } from "../../types";
import { BASE_SIZES } from "../../constants";

export type InputSize = (typeof BASE_SIZES)[keyof typeof BASE_SIZES];
type BaseInputNativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "role">;
type Renderer = ReactNode | ReactNode[];

export interface BaseInputProps extends BaseInputNativeInputProps, VibeComponentProps {
  /**
   * Size of the input element. Will influence also padding and font size.
   */
  size?: InputSize;
  /**
   * A render prop function for adding a component or element to the left side of the input.
   * This could be an icon, text, or any custom element that fits within the input's design.
   */
  renderLeft?: Renderer;
  /**
   * Similar to renderLeft, but for adding an element to the right side of the input.
   * Useful for clear buttons, password visibility toggles, or custom validation icons.
   */
  renderRight?: Renderer;
  /**
   * When true, indicates that the input has successfully passed validation or meets some criteria.
   * This control the visual styling of the input to convey success to the user.
   */
  success?: boolean;
  /**
   * When true, indicates that there is an error with the input's current value.
   * This control the visual styling of the input to convey error to the user.
   */
  error?: boolean;
  /**
   * ARIA role for the input wrapper. This can be used to improve accessibility by
   * giving screen readers more context about the input's purpose.
   */
  wrapperRole?: AriaRole;
  /**
   * ARIA role for the input. Setting this helps in making the input more
   * accessible by providing additional semantic information to assistive technologies.
   */
  inputRole?: AriaRole;
  /**
   * Additional CSS class names to be applied to the input element. This allows for custom
   * styling on top of the default styles provided by the component.
   */
  inputClassName?: string;
}
