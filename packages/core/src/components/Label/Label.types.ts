import { VibeComponentProps } from "../../types";
import { LabelColor, LabelKind } from "./LabelConstants";
import React from "react";
import { TextType } from "../Text/TextConstants";
import Text from "../Text/Text";

export type Sizes = "small" | "medium";

export const mapSizesToTextSize: Record<Sizes, TextType> = {
  small: Text.types.TEXT3,
  medium: Text.types.TEXT2
};

export interface LabelProps extends VibeComponentProps {
  /**
   * @deprecated - use className instead
   */
  wrapperClassName?: string;
  /**
   * Class name for an inner text wrapper
   */
  labelClassName?: string;
  kind?: LabelKind;
  color?: LabelColor;
  text?: string;
  isAnimationDisabled?: boolean;
  isLegIncluded?: boolean;
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  celebrationAnimation?: boolean;
  size?: Sizes;
}
