import { ButtonProps } from "../../../Button";
import React from "react";
import { VibeComponentProps } from "../../../../types";
import { TooltipProps } from "../../../Tooltip";

export interface ModalFooterActionProps extends Omit<ButtonProps, "children" | "kind" | "size"> {
  /**
   * Text to display as the Button's content.
   */
  text: string;
  /**
   * Use when there's a need to display a tooltip on the button (e.g., explain why disabled).
   */
  tooltipProps?: Partial<TooltipProps>;
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
