import camelCase from "lodash/camelCase";
import cx from "classnames";
/* eslint-disable react/jsx-props-no-spreading */
import React, { cloneElement, useCallback, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import useOnClickOutside from "../../../hooks/useClickOutside";
import { chainFunctions } from "../../../utils/function-utils";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { HIDE_SHOW_EVENTS } from "../consts/dialog-show-hide-event";
import { DIALOG_ANIMATION_TYPES } from "../../../constants";
import styles from "./DialogContent.module.scss";

const transitionOptions = {};
const NOOP = () => {};
const EMPTY_OBJECT = {};

const KEYS = ["Esc", "Escape"];

export const DialogContent = React.forwardRef(
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
      event => {
        if (isOpen) {
          return onClickOutside(event, HIDE_SHOW_EVENTS.CLICK_OUTSIDE);
        }
      },
      [isOpen, onClickOutside]
    );
    useKeyEvent({ keys: KEYS, callback: onEsc });
    useOnClickOutside({ callback: onOutSideClick, ref });

    switch (animationType) {
      case DIALOG_ANIMATION_TYPES.OPACITY_AND_SLIDE:
        transitionOptions.classNames = {
          appear: styles.opacityAndSlideAppear,
          appearActive: styles.opacityAndSlideAppearActive
        };
        break;
      case DIALOG_ANIMATION_TYPES.EXPAND:
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
              [styles[camelCase("edge-" + startingEdge)]]: startingEdge,
              [`edge-${startingEdge}`]: startingEdge,
              [styles.hasTooltip]: hasTooltip,
              ["has-tooltip"]: hasTooltip
            })}
            ref={ref}
          >
            {React.Children.toArray(children).map(child => {
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
