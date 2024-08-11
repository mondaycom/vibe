import React from "react";
import { VibeComponentProps } from "../../../types";
import MenuButton from "../../MenuButton/MenuButton";
import IconButton from "../../IconButton/IconButton";
import { ButtonColor } from "../../Button/ButtonConstants";

export type ModalTopActionsColor = "light" | "dark";
export type ModalTopActionsButtonColor =
  | ButtonColor.PRIMARY
  | ButtonColor.ON_PRIMARY_COLOR
  | ButtonColor.ON_INVERTED_BACKGROUND;

export interface ModalTopActionsProps extends VibeComponentProps {
  renderAction?: (color?: ModalTopActionsButtonColor) => React.ReactElement<typeof MenuButton | typeof IconButton>;
  color?: ModalTopActionsColor;
  closeButtonAriaLabel?: string;
  onClose?: React.MouseEventHandler<HTMLDivElement>;
}
