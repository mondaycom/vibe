import type React from "react";
import type { ReactElement } from "react";
import type { VibeComponentProps } from "@vibe/shared";
import type { Middleware, Placement } from "@floating-ui/react-dom";

export type DialogType = "modal" | "popover";

export type DialogSize = "none" | "small" | "medium" | "large";

export type DialogPosition =
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end"
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end";

export type DialogTriggerEvent =
  | "click"
  | "clickoutside"
  | "esckey"
  | "tab"
  | "mouseenter"
  | "mouseleave"
  | "enter"
  | "mousedown"
  | "focus"
  | "blur"
  | "onContentClick"
  | "contextmenu";

export type DialogAnimationType = "opacity-and-slide" | "expand";

export type DialogStartingEdge = "top" | "bottom";

export type DialogOffset = {
  main?: number;
  secondary?: number;
};

export type DialogEvent = React.MouseEvent | React.KeyboardEvent | KeyboardEvent | React.FocusEvent | CustomEvent;

export type DialogMiddleware = Middleware;

export type DialogPlacement = Placement;

export interface DialogProps extends VibeComponentProps {
  /**
   * Event handler for blur events on the reference element.
   */
  onBlur?: (e: React.FocusEvent) => void;
  /**
   * Event handler for keydown events on the reference element.
   */
  onKeyDown?: (e: React.KeyboardEvent) => void;
  /**
   * Event handler for click events on the reference element.
   */
  onClick?: (e: React.MouseEvent) => void;
  /**
   * Event handler for focus events on the reference element.
   */
  onFocus?: (e: React.FocusEvent) => void;
  /**
   * Event handler for mousedown events on the reference element.
   */
  onMouseDown?: (e: React.MouseEvent) => void;
  /**
   * Event handler for mouseenter events on the reference element.
   */
  onMouseEnter?: (e: React.MouseEvent) => void;
  /**
   * Event handler for mouseleave events on the reference element.
   */
  onMouseLeave?: (e: React.MouseEvent) => void;
  /**
   * Event handler for contextmenu events on the reference element.
   */
  onContextMenu?: (e: React.MouseEvent) => void;
  /**
   * Class name applied to the reference wrapper element.
   */
  referenceWrapperClassName?: string;
  /**
   * The wrapper element type to use for React components. Defaults to "span".
   */
  referenceWrapperElement?: "span" | "div";
  /**
   * The placement of the dialog relative to the reference element.
   */
  position?: DialogPosition;
  /**
   * Custom Floating UI middleware for positioning logic.
   * If you provide `offset`, `flip`, or `shift` middleware, the defaults will be skipped.
   * Other middleware (like `size`, `inline`, `autoPlacement`) are added to the chain.
   * @see https://floating-ui.com/docs/middleware
   */
  middleware?: DialogMiddleware[];
  /**
   * The starting edge of the dialog animation.
   */
  startingEdge?: DialogStartingEdge;
  /**
   * Offset values for positioning adjustments.
   * `main` - distance from reference element
   * `secondary` - cross-axis offset (skidding)
   */
  moveBy?: { main?: number; secondary?: number };
  /**
   * Delay in milliseconds before showing the dialog.
   */
  showDelay?: number;
  /**
   * Delay in milliseconds before hiding the dialog.
   */
  hideDelay?: number;
  /**
   * Events that trigger showing the dialog.
   */
  showTrigger?: DialogTriggerEvent | DialogTriggerEvent[];
  /**
   * Events that trigger hiding the dialog.
   */
  hideTrigger?: DialogTriggerEvent | DialogTriggerEvent[];
  /**
   * If true, keeps the dialog open when mouse enters it.
   */
  showOnDialogEnter?: boolean;
  /**
   * If true, shows the dialog when the component mounts.
   */
  shouldShowOnMount?: boolean;
  /**
   * If true, disables opening the dialog.
   */
  disable?: boolean;
  /**
   * Controls the open state of the dialog (controlled mode).
   */
  open?: boolean;
  /**
   * Controlled open state for derived state pattern.
   */
  isOpen?: boolean;
  /**
   * CSS class names that, when present on target, prevent showing the dialog.
   */
  showTriggerIgnoreClass?: string | string[];
  /**
   * CSS class names that, when present on target, prevent hiding the dialog.
   */
  hideTriggerIgnoreClass?: string | string[];
  /**
   * The animation type used for the dialog.
   */
  animationType?: DialogAnimationType;
  /**
   * Class name applied to the dialog content wrapper.
   */
  wrapperClassName?: string;
  /**
   * If true, prevents animation when mounting.
   */
  preventAnimationOnMount?: boolean;
  /**
   * CSS selector of the container where the dialog is portaled.
   */
  containerSelector?: string;
  /**
   * If true, renders with tooltip arrow styling.
   */
  tooltip?: boolean;
  /**
   * Class name applied to the tooltip arrow element.
   */
  tooltipClassName?: string;
  /**
   * Callback fired when the dialog is shown.
   */
  onDialogDidShow?: (event?: DialogEvent, eventName?: DialogTriggerEvent | string) => void;
  /**
   * Callback fired when the dialog is hidden.
   */
  onDialogDidHide?: (event: DialogEvent, eventName: DialogTriggerEvent | string) => void;
  /**
   * Callback fired when clicking outside the dialog.
   */
  onClickOutside?: (event: React.MouseEvent) => void;
  /**
   * Callback fired when clicking inside the dialog content.
   */
  onContentClick?: (event: React.MouseEvent) => void;
  /**
   * The z-index applied to the dialog.
   */
  zIndex?: number;
  /**
   * If true, uses derived state from props pattern.
   */
  useDerivedStateFromProps?: boolean;
  /**
   * If true, hides the dialog when the reference element scrolls out of view.
   */
  hideWhenReferenceHidden?: boolean;
  /**
   * If true, fires onDialogDidShow callback on mount.
   */
  shouldCallbackOnMount?: boolean;
  /**
   * If true, shows and hides the dialog without delay.
   */
  instantShowAndHide?: boolean;
  /**
   * Callback to dynamically adjust show delay and animation behavior.
   */
  getDynamicShowDelay?: () => { showDelay: number; preventAnimation: boolean };
  /**
   * The content displayed inside the dialog. Can be a render function.
   */
  content?: (() => JSX.Element) | JSX.Element;
  /**
   * The reference element(s) that the dialog is positioned relative to.
   */
  children?: ReactElement | ReactElement[] | string;
  /**
   * If true, keyboard focus/blur events behave like mouse enter/leave.
   */
  addKeyboardHideShowTriggersByDefault?: boolean;
  /**
   * If true or a selector string, disables scrolling in the container when open.
   */
  disableContainerScroll?: boolean | string;
  /**
   * If true, automatically updates position when content resizes.
   */
  observeContentResize?: boolean;
  /**
   * If true, provides LayerProvider context for nested dialogs.
   */
  enableNestedDialogLayer?: boolean;
}
