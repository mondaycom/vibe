import { ButtonProps } from "../../../Button";
import React from "react";
import { VibeComponentProps } from "../../../../types";

export interface ModalFooterActionProps extends Omit<ButtonProps, "children" | "kind"> {
  text: string;
}

export interface ModalFooterBaseProps extends VibeComponentProps {
  primaryButton: ModalFooterActionProps;
  secondaryButton?: ModalFooterActionProps;
  renderAction?: React.ReactNode;
}
