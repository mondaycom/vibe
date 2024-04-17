import { AriaRole, InputHTMLAttributes, ReactNode } from "react";
import { VibeComponentProps } from "../../types";
import { BASE_SIZES } from "../../constants";
import VibeComponent from "../../types/VibeComponent";

export type InputSize = (typeof BASE_SIZES)[keyof typeof BASE_SIZES];
type BaseInputNativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "role">;
type Renderer = ReactNode | ReactNode[];

export interface BaseInputProps extends BaseInputNativeInputProps, VibeComponentProps {
  size?: InputSize;
  leftRender?: Renderer;
  rightRender?: Renderer;
  success?: boolean;
  error?: boolean;
  wrapperRole?: AriaRole;
  inputRole?: AriaRole;
  wrapperClassName?: string;
}

export type BaseInputComponent = VibeComponent<BaseInputProps, HTMLInputElement>;
