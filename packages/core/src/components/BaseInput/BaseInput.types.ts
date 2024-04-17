import { AriaRole, InputHTMLAttributes, ReactNode } from "react";
import { VibeComponentProps } from "../../types";
import { BASE_SIZES } from "../../constants";

export type InputSize = (typeof BASE_SIZES)[keyof typeof BASE_SIZES];
type BaseInputNativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "role">;
type Renderer = ReactNode | ReactNode[];

export interface BaseInputProps extends BaseInputNativeInputProps, VibeComponentProps {
  size?: InputSize;
  renderLeft?: Renderer;
  renderRight?: Renderer;
  success?: boolean;
  error?: boolean;
  wrapperRole?: AriaRole;
  inputRole?: AriaRole;
  inputClassName?: string;
}
