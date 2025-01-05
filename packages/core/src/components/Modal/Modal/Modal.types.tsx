import { VibeComponentProps } from "../../../types";
import React from "react";
import { ModalTopActionsProps } from "../ModalTopActions/ModalTopActions.types";
import { PortalTarget } from "../hooks/usePortalTarget/usePortalTarget.types";

export type ModalSize = "small" | "medium" | "large";

export type ModalCloseEvent =
  | React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  | React.KeyboardEvent<HTMLDivElement>;

export interface ModalProps extends VibeComponentProps {
  /**
   * Unique identifier for the modal.
   */
  id: string;
  /**
   * Controls the visibility of the modal.
   */
  show: boolean;
  /**
   * Determines the width and max-height of the modal.
   */
  size?: ModalSize;
  /**
   * Theme color for the close button.
   */
  closeButtonTheme?: ModalTopActionsProps["theme"];
  /**
   * Accessibility label for the close button.
   */
  closeButtonAriaLabel?: ModalTopActionsProps["closeButtonAriaLabel"];
  /**
   * Callback fired when the modal should close.
   */
  onClose?: (event: ModalCloseEvent) => void;
  /**
   * Additional action to render in the header area.
   */
  renderHeaderAction?: ModalTopActionsProps["renderAction"];
  /**
   * Reference to an element that triggered the modal, used for animations.
   */
  anchorElementRef?: React.RefObject<HTMLElement>;
  /**
   * When true, prevents closing the modal when clicking the overlay ("click-outside") or pressing ESC.
   */
  alertModal?: boolean;
  /**
   * The target element to render the modal into.
   */
  container?: PortalTarget;
  /**
   * Modal content.
   */
  children: React.ReactNode;
  /**
   * Additional inline styles for the modal.
   */
  style?: React.CSSProperties;
  /**
   * The z-index to be used for the modal and overlay.
   */
  zIndex?: number;
  /**
   * If provided, overrides the automatically generated aria-labelledby, that is assigned when used with ModalHeader.
   */
  "aria-labelledby"?: string;
  /**
   * If provided, overrides the automatically generated aria-describedby, that is assigned when used with ModalHeader.
   */
  "aria-describedby"?: string;
}
