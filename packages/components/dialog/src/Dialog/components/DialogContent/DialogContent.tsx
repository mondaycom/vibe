import React, {
  cloneElement,
  type CSSProperties,
  forwardRef,
  type ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef
} from "react";
import cx from "classnames";
import { camelCase } from "es-toolkit";
import { CSSTransition } from "react-transition-group";
import { useClickOutside } from "@vibe/hooks";
import {
  chainFunctions,
  NOOP,
  useKeyEvent,
  type VibeComponentProps,
  keyCodes,
  getStyle,
  useMergeRef
} from "@vibe/shared";
import {
  type DialogAnimationType,
  type DialogTriggerEvent,
  type DialogStartingEdge,
  type DialogPlacement
} from "../../Dialog.types";
import styles from "./DialogContent.module.scss";
import useDisableScroll from "../../hooks/useDisableScroll";

const EMPTY_OBJECT: CSSProperties = {};
const EMPTY_ANIMATION_CLASSES = {};
const ESCAPE_KEYS = [keyCodes.ESCAPE];
const ANIMATION_ATTRIBUTES: Record<DialogAnimationType, { appear: string; active: string; exit?: string }> = {
  expand: {
    appear: "data-vibe-dialog-expand-appear",
    active: "data-vibe-dialog-expand-appear-active",
    exit: "data-vibe-dialog-expand-exit"
  },
  "opacity-and-slide": {
    appear: "data-vibe-dialog-opacity-slide-appear",
    active: "data-vibe-dialog-opacity-slide-appear-active"
  }
};
const ALL_ANIMATION_ATTRIBUTES = Object.values(ANIMATION_ATTRIBUTES).flatMap(attributes =>
  Object.values(attributes).filter((attribute): attribute is string => Boolean(attribute))
);

export interface DialogContentProps extends VibeComponentProps {
  /**
   * The content inside the dialog.
   */
  children?: ReactElement | ReactElement[];
  /**
   * The placement of the dialog relative to the reference element.
   */
  position?: DialogPlacement;
  /**
   * Class name applied to the dialog wrapper.
   */
  wrapperClassName?: string;
  /**
   * If true, the dialog is open.
   */
  isOpen?: boolean;
  /**
   * The starting edge for animation direction.
   */
  startingEdge?: DialogStartingEdge;
  /**
   * The animation type used for showing/hiding the dialog.
   */
  animationType?: DialogAnimationType;
  /**
   * Callback fired when the Escape key is pressed.
   */
  onEsc?: (event: React.KeyboardEvent) => void;
  /**
   * Callback fired when the mouse enters the dialog.
   */
  onMouseEnter?: (event: React.MouseEvent) => void;
  /**
   * Callback fired when the mouse leaves the dialog.
   */
  onMouseLeave?: (event: React.MouseEvent) => void;
  /**
   * Callback fired when clicking outside the dialog.
   */
  onClickOutside?: (event: React.MouseEvent, hideShowEvent: DialogTriggerEvent) => void;
  /**
   * Callback fired when clicking inside the dialog.
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * Delay before showing the dialog (used for animation timing).
   */
  showDelay?: number;
  /**
   * Inline styles applied to the dialog wrapper.
   */
  styleObject?: CSSProperties;
  /**
   * If true, indicates the reference element is hidden.
   */
  isReferenceHidden?: boolean;
  /**
   * If true, applies tooltip arrow styling.
   */
  hasTooltip?: boolean;
  /**
   * CSS selector of the container for scroll disabling.
   */
  containerSelector?: string;
  /**
   * If true or a selector string, disables scrolling when open.
   */
  disableContainerScroll?: boolean | string;
  /**
   * Callback fired on context menu (right-click) events.
   */
  onContextMenu?: (e: React.MouseEvent) => void;
}

const DialogContent = forwardRef<HTMLElement, DialogContentProps>(
  (
    {
      onEsc = NOOP,
      children,
      position,
      wrapperClassName,
      isOpen = false,
      startingEdge,
      animationType = "expand",
      onMouseEnter = NOOP,
      onMouseLeave = NOOP,
      onClickOutside = NOOP,
      onClick = NOOP,
      onContextMenu = NOOP,
      showDelay,
      styleObject = EMPTY_OBJECT,
      isReferenceHidden,
      hasTooltip = false,
      containerSelector,
      disableContainerScroll = false,
      "data-testid": dataTestId
    },
    forwardedRef
  ) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLSpanElement>(null);
    const mergedWrapperRef = useMergeRef(forwardedRef, wrapperRef);

    const onOutsideClick = useCallback(
      (event: React.MouseEvent) => {
        if (isOpen) {
          return onClickOutside(event, "clickoutside");
        }
      },
      [isOpen, onClickOutside]
    );
    const overrideOnContextMenu = useCallback(
      (event: React.MouseEvent) => {
        if (isOpen) {
          onContextMenu(event);
        }
      },
      [isOpen, onContextMenu]
    );

    // Wrap escape callback to ensure useKeyEvent always receives a valid function
    const escapeCallback = useMemo(
      () => (event: KeyboardEvent) => {
        if (isOpen && onEsc !== NOOP) {
          onEsc(event as unknown as React.KeyboardEvent);
        }
      },
      [isOpen, onEsc]
    );
    useKeyEvent({ keys: ESCAPE_KEYS, callback: escapeCallback });

    // Watch the wrapper ref to include padding area, tooltip arrows, and nested Dialogs
    useClickOutside({ callback: onOutsideClick, ref: wrapperRef });
    useClickOutside({ eventName: "contextmenu", callback: overrideOnContextMenu, ref: wrapperRef });
    const selectorToDisable = typeof disableContainerScroll === "string" ? disableContainerScroll : containerSelector;
    const { disableScroll, enableScroll } = useDisableScroll(selectorToDisable);

    useEffect(() => {
      if (disableContainerScroll) {
        if (isOpen) {
          disableScroll();
        } else {
          enableScroll();
        }
      }
    }, [disableContainerScroll, disableScroll, enableScroll, isOpen]);

    const animationAttributes = animationType ? ANIMATION_ATTRIBUTES[animationType] : undefined;
    const clearAnimationAttributes = useCallback(() => {
      ALL_ANIMATION_ATTRIBUTES.forEach(attribute => contentRef.current?.removeAttribute(attribute));
    }, []);

    // Class mutations can invalidate the entire content subtree through unrelated
    // global [class*="..."] selectors. Keep CSSTransition's timing and repaint,
    // but express its animation phases with dedicated attributes.

    // Clone children to attach mouse event handlers, with proper type checking
    const childrenWithHandlers = React.Children.map(children, child => {
      // Only clone valid React elements, pass through primitives unchanged
      if (!React.isValidElement(child)) {
        return child;
      }

      return cloneElement(child as ReactElement, {
        onMouseEnter: chainFunctions([(child as ReactElement).props.onMouseEnter, onMouseEnter]),
        onMouseLeave: chainFunctions([(child as ReactElement).props.onMouseLeave, onMouseLeave])
      });
    });

    return (
      <span
        // Legacy class name preserved for Monolith overrides
        className={cx("monday-style-dialog-content-wrapper", styles.contentWrapper, wrapperClassName)}
        ref={mergedWrapperRef}
        data-testid={dataTestId}
        style={styleObject}
        onClickCapture={onClick}
        data-dialog-reference-hidden={isReferenceHidden}
      >
        <CSSTransition
          classNames={EMPTY_ANIMATION_CLASSES}
          nodeRef={contentRef}
          in={isOpen}
          appear={!!animationType}
          timeout={showDelay}
          onEnter={isAppearing => {
            clearAnimationAttributes();
            if (isAppearing && animationAttributes) {
              contentRef.current?.setAttribute(animationAttributes.appear, "");
            }
          }}
          onEntering={isAppearing => {
            if (isAppearing && animationAttributes) {
              contentRef.current?.setAttribute(animationAttributes.active, "");
            }
          }}
          onEntered={clearAnimationAttributes}
          onExit={() => {
            clearAnimationAttributes();
            if (animationAttributes?.exit) {
              contentRef.current?.setAttribute(animationAttributes.exit, "");
            }
          }}
          onExited={clearAnimationAttributes}
        >
          <div
            className={cx(styles.contentComponent, getStyle(styles, camelCase(position)), {
              [getStyle(styles, camelCase("edge-" + startingEdge))]: startingEdge,
              [styles.hasTooltip]: hasTooltip
            })}
            ref={contentRef}
          >
            {childrenWithHandlers}
          </div>
        </CSSTransition>
      </span>
    );
  }
);

export default DialogContent;
