import React from "react";
import MenuButton from "../../MenuButton/MenuButton";
import IconButton from "../../IconButton/IconButton";
import { ButtonColor } from "../../Button/ButtonConstants";

export type ModalTopActionsTheme = "light" | "dark";
export type ModalTopActionsButtonColor =
  | ButtonColor.PRIMARY
  | ButtonColor.ON_PRIMARY_COLOR
  | ButtonColor.ON_INVERTED_BACKGROUND;

export interface ModalTopActionsProps {
  /**
   * Action element or render function for the top-right area.
   * When provided as a function, receives the current button color theme
   */
  renderAction?:
    | React.ReactElement<typeof MenuButton | typeof IconButton>
    | ((color?: ModalTopActionsButtonColor) => React.ReactElement<typeof MenuButton | typeof IconButton>);
  /**
   * Color theme for the top actions
   */
  theme?: ModalTopActionsTheme;
  /**
   * Accessibility label for the close button
   */
  closeButtonAriaLabel?: string;
  /**
   * Callback fired when the close button is clicked
   */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
