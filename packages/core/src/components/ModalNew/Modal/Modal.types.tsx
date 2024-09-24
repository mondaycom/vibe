import { VibeComponentProps } from "../../../types";
import React from "react";
import { ModalTopActionsProps } from "../ModalTopActions/ModalTopActions.types";

export type ModalSize = "small" | "medium" | "large";

export interface ModalProps extends VibeComponentProps {
  show: boolean;
  size?: ModalSize;
  closeButtonTheme?: ModalTopActionsProps["color"];
  closeButtonAriaLabel?: ModalTopActionsProps["closeButtonAriaLabel"];
  onClose?: ModalTopActionsProps["onClose"];
  renderHeaderAction?: ModalTopActionsProps["renderAction"];
  children: React.ReactNode;
}
