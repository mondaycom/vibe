import { ButtonProps } from "../../../Button";
import React from "react";
import { VibeComponentProps } from "../../../../types";

export interface ModalFooterActionProps extends Omit<ButtonProps, "children" | "kind" | "size"> {
  /**
   * Text to display as the Button's content.
   */
  text: string;
}

export interface ModalFooterBaseProps extends VibeComponentProps {
  /**
   * Props for the primary action button.
   */
  primaryButton: ModalFooterActionProps;
  /**
   * Props for the optional secondary action button.
   */
  secondaryButton?: ModalFooterActionProps;
  /**
   * Additional content to render in the footer.
   */
  renderAction?: React.ReactNode;
}
