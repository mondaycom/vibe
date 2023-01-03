/* eslint-disable react/jsx-props-no-spreading */
import camelCase from "lodash/camelCase";
import cx from "classnames";
import { AnimationType, ESCAPE_KEYS } from "../../../constants";
import React, { cloneElement, CSSProperties, ReactElement, useCallback, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import useOnClickOutside from "../../../hooks/useClickOutside";
import { chainFunctions, NOOP } from "../../../utils/function-utils";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { HideShowEvent } from "../consts/dialog-show-hide-event";
import { VibeComponent, VibeComponentProps } from "../../../types";
import * as PopperJS from "@popperjs/core";
import styles from "./DialogContent.module.scss";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";

const transitionOptions: { classNames?: { appear?: string; appearActive?: string; exit?: string } } = {};
const EMPTY_OBJECT = {};

export interface DialogContentProps extends VibeComponentProps {
  children?: ReactElement | ReactElement[];
  position?: PopperJS.Placement;
  wrapperClassName?: string;
  isOpen?: boolean;
  startingEdge?: any;
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
      showDelay,
      styleObject = EMPTY_OBJECT,
      isReferenceHidden,
      hasTooltip = false
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
    useKeyEvent({ keys: ESCAPE_KEYS, callback: onEsc });
    useOnClickOutside({ callback: onOutSideClick, ref });

    switch (animationType) {
      case AnimationType.OPACITY_AND_SLIDE:
        transitionOptions.classNames = {
          appear: styles.opacityAndSlideAppear,
          appearActive: styles.opacityAndSlideAppearActive
        };
        break;
      case AnimationType.EXPAND:
        transitionOptions.classNames = {
          appear: styles.expandAppear,
          appearActive: styles.expandAppearActive,
          exit: styles.expandExit
        };
        break;
    }

    return (
      <span
        className={cx(styles.contentWrapper, "monday-style-dialog-content-wrapper", wrapperClassName)}
        ref={forwardRef}
        style={styleObject}
        onClickCapture={onClick}
        data-popper-reference-hidden={isReferenceHidden}
      >
        <CSSTransition {...transitionOptions} in={isOpen} appear={!!animationType} timeout={showDelay}>
          <div
            className={cx(styles.contentComponent, "monday-style-dialog-content-component", position, {
              [getStyle(styles, camelCase("edge-" + startingEdge))]: startingEdge,
              [`edge-${startingEdge}`]: startingEdge,
              [styles.hasTooltip]: hasTooltip,
              ["has-tooltip"]: hasTooltip
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
