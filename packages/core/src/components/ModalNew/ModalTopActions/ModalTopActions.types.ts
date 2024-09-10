import React from "react";
import MenuButton from "../../MenuButton/MenuButton";
import IconButton from "../../IconButton/IconButton";
import { ButtonColor } from "../../Button/ButtonConstants";

export type ModalTopActionsColor = "light" | "dark";
export type ModalTopActionsButtonColor =
  | ButtonColor.PRIMARY
  | ButtonColor.ON_PRIMARY_COLOR
  | ButtonColor.ON_INVERTED_BACKGROUND;

export interface ModalTopActionsProps {
  /**
   * action can be passed either as a function or direct
   * it allows passing back to consumer the color he chose, so he won't have to define it twice
   */
  renderAction?:
    | React.ReactElement<typeof MenuButton | typeof IconButton>
    | ((color?: ModalTopActionsButtonColor) => React.ReactElement<typeof MenuButton | typeof IconButton>);
  color?: ModalTopActionsColor;
  closeButtonAriaLabel?: string;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
