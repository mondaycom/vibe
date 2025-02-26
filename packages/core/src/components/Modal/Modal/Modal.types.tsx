import { VibeComponentProps } from "../../../types";
import React from "react";
import { ModalTopActionsProps } from "../ModalTopActions/ModalTopActions.types";
import { PortalTarget } from "../hooks/usePortalTarget/usePortalTarget.types";

export type ModalSize = "small" | "medium" | "large" | "full-view";

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
   * This is intended for advanced use-cases.
   * It allows you to control the default focus behavior when the modal mounts.
   * Make sure to use this prop only when you understand the implications.
   *
   * Determines if focus should automatically move to the first focusable element when the component mounts.
   * When set to `false` - disables the automatic focus behavior.
   * - Notice this might break keyboard and general accessibility and should be used with caution.
   */
  autoFocus?: boolean;
  /**
   * This is intended for advanced use-cases.
   * It allows you to control the focus behavior when moving between elements within the modal.
   * Make sure to use this prop only when you understand the implications.
   *
   * Called whenever focus is about to move to a new element within the modal.
   * Return:
   * - `true` to allow normal flow focus.
   * - `false` to block it (let the browser decide, usually moves to body).
   *   - Notice this might break keyboard accessibility and should be used with caution.
   * - An HTMLElement to redirect focus to instead of normal flow.
   * - Any other value (e.g., null, undefined) would act as `false`.
   */
  onFocusAttempt?: (nextFocusedElement?: HTMLElement) => boolean | HTMLElement;
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
