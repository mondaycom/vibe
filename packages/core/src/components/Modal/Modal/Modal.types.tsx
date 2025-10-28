import { type VibeComponentProps } from "../../../types";
import type React from "react";
import { type ModalTopActionsProps } from "../ModalTopActions/ModalTopActions.types";
import { type PortalTarget } from "../hooks/usePortalTarget/usePortalTarget.types";
import { type FocusEscapeTarget } from "../hooks/useFocusEscapeTargets/useFocusEscapeTargets.types";

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
   * Specifies elements/containers that should be allowed to receive focus outside this modal.
   * When focus moves to these elements, the focus lock will ignore them.
   * This allows other UI components (tooltips, dropdowns, nested modals, etc.) to receive focus.
   *
   * Accepts:
   * - CSS selectors (string)
   * - Refs to elements (React.RefObject<HTMLElement>)
   * - Direct element references (HTMLElement)
   */
  allowFocusEscapeTo?: FocusEscapeTarget[];
  /**
   * This is intended for advanced use-cases.
   * It allows you to control which elements the focus lock should manage.
   * Make sure to use this prop only when you understand the implications.
   *
   * **Note:** If you only need to allow focus to specific selectors, use `allowFocusEscapeTo` instead.
   *
   * Called whenever focus is attempting to move to any element (inside or outside the modal).
   * Return:
   * - `true` to let focus-lock **manage** this element (keep it within the modal's focus trap).
   * - `false` to let focus-lock **ignore** this element (allow focus to move outside the modal).
   * - An HTMLElement to redirect focus to that element instead.
   * - Any other value (e.g., null, undefined) would act as `false`.
   *
   * @example
   * // Complex custom logic
   * <Modal
   *   onFocusAttempt={(el) => {
   *     if (el?.dataset.customBehavior) return false;
   *     return true;
   *   }}
   * />
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
