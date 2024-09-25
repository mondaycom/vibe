import { VibeComponentProps } from "../../../types";
import React from "react";
import { ModalTopActionsProps } from "../ModalTopActions/ModalTopActions.types";

export type ModalSize = "small" | "medium" | "large";

export type ModalCloseEvent =
  | React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  | React.KeyboardEvent<HTMLBodyElement>;

export interface ModalProps extends VibeComponentProps {
  id: string;
  show: boolean;
  size?: ModalSize;
  closeButtonTheme?: ModalTopActionsProps["color"];
  closeButtonAriaLabel?: ModalTopActionsProps["closeButtonAriaLabel"];
  onClose?: (event: ModalCloseEvent) => void;
  renderHeaderAction?: ModalTopActionsProps["renderAction"];
  children: React.ReactNode;
}
