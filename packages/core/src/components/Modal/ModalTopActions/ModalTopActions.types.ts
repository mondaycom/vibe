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
   * The action element or a function that renders an action element in the top-right area.
   * When provided as a function, it receives the current button color theme.
   */
  renderAction?:
    | React.ReactElement<typeof MenuButton | typeof IconButton>
    | ((color?: ModalTopActionsButtonColor) => React.ReactElement<typeof MenuButton | typeof IconButton>);
  /**
   * The color theme for the top actions.
   */
  theme?: ModalTopActionsTheme;
  /**
   * The label of the close button for accessibility.
   */
  closeButtonAriaLabel?: string;
  /**
   * Callback fired when the close button is clicked.
   */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
