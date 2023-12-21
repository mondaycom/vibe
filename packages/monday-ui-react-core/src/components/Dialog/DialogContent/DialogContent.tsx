/* eslint-disable react/jsx-props-no-spreading */
import React, { cloneElement, CSSProperties, ReactElement, useCallback, useEffect, useRef } from "react";
import cx from "classnames";
import { camelCase } from "lodash-es";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
import useClickOutside from "../../../hooks/useClickOutside";
import { chainFunctions, NOOP } from "../../../utils/function-utils";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { HideShowEvent } from "../consts/dialog-show-hide-event";
import { VibeComponent, VibeComponentProps } from "../../../types";
import { AnimationType, keyCodes } from "../../../constants";
import * as PopperJS from "@popperjs/core";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import styles from "./DialogContent.module.scss";
import useDisableScroll from "../../../hooks/useDisableScroll";

const EMPTY_OBJECT = {};
const ESCAPE_KEYS = [keyCodes.ESCAPE];

export interface DialogContentProps extends VibeComponentProps {
  children?: ReactElement | ReactElement[];
  position?: PopperJS.Placement;
  wrapperClassName?: string;
  isOpen?: boolean;
  // TODO breaking change convert to enum
  startingEdge?: any;
  // TODO breaking change convert to enum - AnimationType
  animationType?: string;
  onEsc?: (event: React.KeyboardEvent) => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onClickOutside?: (event: React.MouseEvent, hideShowEvent: HideShowEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
  showDelay?: number;
  styleObject?: CSSProperties;
  isReferenceHidden?: boolean;
  hasTooltip?: boolean;
  disableOnClickOutside?: boolean; // TODO prop is passsed, but not used. How it should behave?
  containerSelector?: string;
  disableContainerScroll?: boolean | string;
  /**
   * On context menu event (right click) outside of the dialog
   * @param e
   */
  onContextMenu?: (e: React.MouseEvent) => void;
  "data-testid"?: string;
}

export const DialogContent: VibeComponent<DialogContentProps> = React.forwardRef(
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
    forwardRef
  ) => {
    const ref = useRef(null);
    const onOutSideClick = useCallback(
      (event: React.MouseEvent) => {
        if (isOpen) {
          return onClickOutside(event, HideShowEvent.CLICK_OUTSIDE);
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
      case AnimationType.EXPAND:
        transitionOptions.classNames = {
          appear: styles.expandAppear,
          appearActive: styles.expandAppearActive,
          exit: styles.expandExit
        };
        break;
      case AnimationType.OPACITY_AND_SLIDE:
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
        <CSSTransition {...transitionOptions} in={isOpen} appear={!!animationType} timeout={showDelay}>
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
