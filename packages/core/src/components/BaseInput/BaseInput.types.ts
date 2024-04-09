import { InputHTMLAttributes, ReactNode } from "react";
import { VibeComponentProps } from "../../types";
import { BASE_SIZES } from "../../constants";

type InputSize = (typeof BASE_SIZES)[keyof typeof BASE_SIZES];
type Renderer = ReactNode | ReactNode[];

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement>, VibeComponentProps {
  inputSize?: InputSize;
  leftRender?: Renderer;
  rightRender?: Renderer;
  withReadOnlyStyle?: boolean;
  underline?: boolean;
  success?: boolean;
  error?: boolean;
}
