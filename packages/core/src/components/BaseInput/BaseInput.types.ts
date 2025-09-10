import { type AriaRole, type InputHTMLAttributes, type ReactNode } from "react";
import { type VibeComponentProps } from "@vibe/shared";
import { type BASE_SIZES } from "../../constants";

export type InputSize = (typeof BASE_SIZES)[keyof typeof BASE_SIZES];
type BaseInputNativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "role">;
type Renderer = ReactNode | ReactNode[];

export interface BaseInputProps extends BaseInputNativeInputProps, VibeComponentProps {
  /**
   * The size of the input.
   */
  size?: InputSize;
  /**
   * Element or component rendered on the left side of the input.
   */
  renderLeft?: Renderer;
  /**
   * Element or component rendered on the right side of the input.
   */
  renderRight?: Renderer;
  /**
   * If true, applies success styling to the input.
   */
  success?: boolean;
  /**
   * If true, applies error styling to the input.
   */
  error?: boolean;
  /**
   * The ARIA role of the input wrapper.
   */
  wrapperRole?: AriaRole;
  /**
   * The ARIA role of the input element.
   */
  inputRole?: AriaRole;
  /**
   * Class name applied to the input element.
   */
  inputClassName?: string;
}
