import React, { cloneElement, CSSProperties, forwardRef, ReactElement, useCallback, useEffect, useRef } from "react";
import cx from "classnames";
import { camelCase } from "lodash-es";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
import useClickOutside from "../../../hooks/useClickOutside";
import { chainFunctions, NOOP } from "../../../utils/function-utils";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { VibeComponentProps } from "../../../types";
import { keyCodes } from "../../../constants";
import { DialogAnimationType, DialogTriggerEvent } from "../Dialog.types";
import * as PopperJS from "@popperjs/core";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import styles from "./DialogContent.module.scss";
import useDisableScroll from "../../../hooks/useDisableScroll";

const EMPTY_OBJECT = {};
const ESCAPE_KEYS = [keyCodes.ESCAPE];

export interface DialogContentProps extends VibeComponentProps {
  /**
   * The content inside the dialog.
   */
  children?: ReactElement | ReactElement[];
  /**
   * The placement of the dialog relative to the reference element.
   */
  position?: PopperJS.Placement;
  /**
   * Class name applied to the dialog wrapper.
   */
  wrapperClassName?: string;
  /**
   * If true, the dialog is open.
   */
  isOpen?: boolean;
  // TODO: [breaking] use type
  /**
   * The starting edge of the dialog.
   */
  startingEdge?: any;
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
   * Delay before showing the dialog.
   */
  showDelay?: number;
  /**
   * Inline styles applied to the dialog.
   */
  styleObject?: CSSProperties;
  /**
   * If true, hides the reference element when the dialog is shown.
   */
  isReferenceHidden?: boolean;
  /**
   * If true, applies tooltip arrow to the dialog.
   */
  hasTooltip?: boolean;
  /**
   * The CSS selector of the container where the dialog should be rendered.
   */
  containerSelector?: string;
  /**
   * If true, disables scrolling in the container when the dialog is open.
   */
  disableContainerScroll?: boolean | string;
  /**
   * Callback fired when the context menu (right-click) event occurs outside the dialog.
   */
  onContextMenu?: (e: React.MouseEvent) => void;
}

const DialogContent = forwardRef(
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
    }: DialogContentProps,
    forwardRef: React.ForwardedRef<HTMLElement>
  ) => {
    const ref = useRef<HTMLDivElement>(null);
    const onOutSideClick = useCallback(
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
    useKeyEvent({ keys: ESCAPE_KEYS, callback: onEsc });
    useClickOutside({ callback: onOutSideClick, ref });
    useClickOutside({ eventName: "contextmenu", callback: overrideOnContextMenu, ref });
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

    const transitionOptions: Partial<CSSTransitionProps> = { classNames: undefined };

    switch (animationType) {
      case "expand":
        transitionOptions.classNames = {
          appear: styles.expandAppear,
          appearActive: styles.expandAppearActive,
          exit: styles.expandExit
        };
        break;
      case "opacity-and-slide":
        transitionOptions.classNames = {
          appear: styles.opacitySlideAppear,
          appearActive: styles.opacitySlideAppearActive
        };
        break;
    }
    return (
      <span
        // don't remove old classname - override from Monolith
        className={cx("monday-style-dialog-content-wrapper", styles.contentWrapper, wrapperClassName)}
        ref={forwardRef}
        data-testid={dataTestId}
        style={styleObject}
        onClickCapture={onClick}
        data-popper-reference-hidden={isReferenceHidden}
      >
        <CSSTransition
          classNames={transitionOptions.classNames}
          nodeRef={ref}
          in={isOpen}
          appear={!!animationType}
          timeout={showDelay}
        >
          <div
            className={cx(styles.contentComponent, getStyle(styles, camelCase(position)), {
              [getStyle(styles, camelCase("edge-" + startingEdge))]: startingEdge,
              [styles.hasTooltip]: hasTooltip
            })}
            ref={ref}
          >
            {React.Children.toArray(children).map((child: ReactElement) => {
              return cloneElement(child, {
                onMouseEnter: chainFunctions([child.props.onMouseEnter, onMouseEnter]),
                onMouseLeave: chainFunctions([child.props.onMouseLeave, onMouseLeave])
              });
            })}
          </div>
        </CSSTransition>
      </span>
    );
  }
);

export default DialogContent;
