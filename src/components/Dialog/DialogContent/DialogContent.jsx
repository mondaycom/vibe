/* eslint-disable react/jsx-props-no-spreading */
import React, { cloneElement, useRef, useCallback } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import useOnClickOutside from "../../../hooks/useClickOutside";
import { chainFunctions } from "../../../utils/function-utils";
import "./DialogContent.scss";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { HIDE_SHOW_EVENTS } from "../consts/dialog-show-hide-event";

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

    if (animationType) {
      transitionOptions.classNames = `monday-style-animation-${animationType}`;
    }
    return (
      <span
        className={classNames("monday-style-dialog-content-wrapper", wrapperClassName)}
        ref={forwardRef}
        style={styleObject}
        onClickCapture={onClick}
        data-popper-reference-hidden={isReferenceHidden}
      >
        <CSSTransition {...transitionOptions} in={isOpen} appear={!!animationType} timeout={showDelay}>
          <div
            className={classNames("monday-style-dialog-content-component", position, {
              [`edge-${startingEdge}`]: startingEdge,
              "has-tooltip": hasTooltip
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
