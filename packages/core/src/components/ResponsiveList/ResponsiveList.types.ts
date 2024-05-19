import { ReactNode } from "react";
import { VibeComponentProps } from "../../types";
import { MenuButtonSize } from "../MenuButton/MenuButtonConstants";
import { MenuButtonProps } from "../MenuButton/MenuButton";

export const DEFAULT_MINIMAL_MARGIN = 32;
export const EMPTY_ARRAY: ReactNode[] = [];

export interface ResponsiveListProps extends VibeComponentProps {
  rootClassName?: string;
  children?: ReactNode[];
  menuButtonSize?: MenuButtonSize;
  paddingSize?: number;
  dialogZIndex?: number;
  dialogClassName?: string;
  menuButtonClassName?: string;
  menuWrapperClassName?: string;
  resizeDebounceTime?: number;
  menuButtonAriaLabel?: string;
  menuButtonProps?: MenuButtonProps;
}
