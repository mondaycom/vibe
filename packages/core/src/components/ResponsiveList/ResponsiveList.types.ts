import { ReactNode } from "react";
import { VibeComponentProps } from "../../types";
import { MenuButtonSize } from "../MenuButton/MenuButtonConstants";
import { MenuButtonProps } from "../MenuButton/MenuButton";

export const DEFAULT_MINIMAL_MARGIN = 32;
export const EMPTY_ARRAY: ReactNode[] = [];

export interface ResponsiveListProps extends VibeComponentProps {
  children?: ReactNode[];
  menuButtonClassName?: string;
  menuWrapperClassName?: string;
  /**
   These attributes will be passed to the MenuButton
   */
  menuButtonProps?: MenuButtonProps;
  menuButtonAriaLabel?: string;
  rootClassName?: string;
  dialogClassName?: string;
  menuButtonSize?: MenuButtonSize;
  /**
   Amount of space to save between the menu button and the content
   */
  paddingSize?: number;
  dialogZIndex?: number;
  /**
   *  we use resize observer behind the scene to update the size, debounce the amount of callbacks (each callback may cause a reflow)
   */
  resizeDebounceTime?: number;
}
