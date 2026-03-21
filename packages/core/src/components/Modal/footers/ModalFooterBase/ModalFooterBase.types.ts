import { type ButtonProps } from "@vibe/button";
import type React from "react";
import { type VibeComponentProps } from "../../../../types";
import { type TooltipProps } from "@vibe/tooltip";

export interface ModalFooterActionProps extends Omit<ButtonProps, "children" | "kind" | "size"> {
  /**
   * The text displayed inside the button.
   */
  text: string;
  /**
   * Props for displaying a tooltip on the button.
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
   * Additional content rendered inside the footer.
   */
  renderAction?: React.ReactNode;
}
