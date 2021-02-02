/* eslint-disable react/jsx-props-no-spreading,react/button-has-type */
import React, { forwardRef, useCallback, useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useResizeObserver from "../../hooks/useResizeObserver";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./Button.scss";
import { BUTTON_COLORS, BUTTON_INPUT_TYPE, BUTTON_SIZES, BUTTON_TYPES } from "./ButtonContstants";
import { NOOP } from "../../utils/function-utils";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";
import { getParentBackgroundColorNotTransparent } from "./helper/dom-helpers";

const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

// min button width
const MIN_BUTTON_HEIGHT_PX = isIE11 ? 32 : 6;
const UPDATE_CSS_VARIABLES_DEBOUNCE = 200;

const Button = forwardRef(
  (
    {
      className,
      children,
      kind,
      onClick,
      name,
      size,
      color,
      disabled,
      rightIcon,
      leftIcon,
      success,
      successText,
      successIcon,
      style,
      loading,
      active,
      id,
      marginRight,
      marginLeft,
      type,
      onMouseDown,
      ariaLabel,
      rightFlat,
      leftFlat,
      preventClickAnimation,
      noSidePadding,
      onFocus,
      onBlur,
      ariaLabeledBy
    },
    ref
  ) => {
    const buttonRef = useRef(null);

    const updateCssVariables = useMemo(() => {
      const callback = ({ borderBoxSize }) => {
        const { blockSize, inlineSize } = borderBoxSize;
        const width = Math.max(inlineSize, MIN_BUTTON_HEIGHT_PX);
        const height = Math.max(blockSize, MIN_BUTTON_HEIGHT_PX);
        if (!buttonRef.current) return;
        buttonRef.current.style.setProperty("--element-width", `${width}px`);
        buttonRef.current.style.setProperty("--element-height", `${height}px`);
      };
      return callback;
    }, [buttonRef]);

    useResizeObserver({
      ref: buttonRef,
      callback: updateCssVariables,
      debounceTime: UPDATE_CSS_VARIABLES_DEBOUNCE
    });
    useEffect(() => {
      if (color !== BUTTON_COLORS.ON_PRIMARY_COLOR) return;
      if (kind !== BUTTON_TYPES.PRIMARY) return;
      if (!buttonRef.current) return;

      const buttonElement = buttonRef.current;
      buttonElement.style.color = getParentBackgroundColorNotTransparent(buttonElement);
    }, [kind, buttonRef, color]);

    const onMouseUp = useCallback(() => {
      const button = buttonRef.current;
      if (!button) {
        return;
      }
      button.blur();
    }, [buttonRef]);

    const onButtonClicked = useCallback(
      event => {
        if (disabled || loading || success) {
          event.preventDefault();
          return;
        }

        if (onClick) {
          onClick(event);
        }
      },
      [onClick, disabled, loading, success]
    );

    const onMouseDownClicked = useCallback(
      event => {
        if (disabled || loading || success) {
          event.preventDefault();
          return;
        }

        if (onMouseDown) {
          onMouseDown(event);
        }
      },
      [onMouseDown, disabled, loading, success]
    );

    const classNames = useMemo(() => {
      const calculatedColor = success ? BUTTON_COLORS.POSITIVE : color;
      return cx(
        className,
        "monday-style-button",
        `monday-style-button--size-${size}`,
        `monday-style-button--kind-${kind}`,
        `monday-style-button--color-${calculatedColor}`,
        {
          "monday-style-button--loading": loading,
          [`monday-style-button--color-${calculatedColor}-active`]: active,
          "monday-style-button--margin-right": marginRight,
          "monday-style-button--margin-left": marginLeft,
          "monday-style-button--right-flat": rightFlat,
          "monday-style-button--left-flat": leftFlat,
          "monday-style-button--prevent-click-animation": preventClickAnimation,
          "monday-style-button--no-side-padding": noSidePadding
        }
      );
    }, [
      size,
      kind,
      color,
      className,
      success,
      loading,
      active,
      marginRight,
      marginLeft,
      noSidePadding,
      preventClickAnimation,
      leftFlat,
      rightFlat
    ]);

    const mergedRef = useMergeRefs({ refs: [ref, buttonRef] });

    const buttonProps = useMemo(() => {
      return {
        disabled,
        ref: mergedRef,
        type,
        className: classNames,
        name,
        onMouseUp,
        style,
        onClick: onButtonClicked,
        id,
        onFocus,
        onBlur,
        onMouseDown: onMouseDownClicked,
        "aria-labelledby": ariaLabeledBy,
        "aria-label": ariaLabel,
        "aria-busy": loading
      };
    }, [
      disabled,
      classNames,
      name,
      onMouseUp,
      style,
      onButtonClicked,
      id,
      type,
      onMouseDownClicked,
      ariaLabel,
      loading,
      onFocus,
      onBlur,
      mergedRef,
      ariaLabeledBy
    ]);

    if (loading) {
      return (
        <button {...buttonProps}>
          <span className="monday-style-button__loader">
            <Loader svgClassName="monday-style-button-loader-svg" />
          </span>
        </button>
      );
    }

    if (success) {
      return (
        <button {...buttonProps}>
          {successIcon ? (
            <Icon
              iconType={Icon.type.ICON_FONT}
              clickable={false}
              icon={successIcon}
              className={cx({
                "monday-style-button--left-icon": !!successText
              })}
              ignoreFocusStyle
            />
          ) : null}
          {successText}
        </button>
      );
    }

    return (
      <button {...buttonProps}>
        {leftIcon ? (
          <Icon
            iconType={Icon.type.ICON_FONT}
            clickable={false}
            icon={leftIcon}
            className={cx({ "monday-style-button--left-icon": !!children })}
            ignoreFocusStyle
          />
        ) : null}
        {children}
        {rightIcon ? (
          <Icon
            iconType={Icon.type.ICON_FONT}
            clickable={false}
            icon={rightIcon}
            className={cx({ "monday-style-button--right-icon": !!children })}
            ignoreFocusStyle
          />
        ) : null}
      </button>
    );
  }
);

Button.sizes = BUTTON_SIZES;
Button.colors = BUTTON_COLORS;
Button.kinds = BUTTON_TYPES;
Button.inputTags = BUTTON_INPUT_TYPE;

Button.propTypes = {
  className: PropTypes.string,
  /** The kind of a button is exposed on the component  */
  kind: PropTypes.oneOf([Button.kinds.PRIMARY, Button.kinds.SECONDARY, Button.kinds.TERTIARY]),
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  /** Name of the button - for form submit usages  */
  name: PropTypes.string,
  /** The size of a button is exposed on the component  */
  size: PropTypes.oneOf([Button.sizes.SMALL, Button.sizes.MEDIUM, Button.sizes.LARGE]),

  /** The color of a button is exposed on the component  */
  color: PropTypes.oneOf([
    Button.colors.PRIMARY,
    Button.colors.NEGATIVE,
    Button.colors.POSITIVE,
    Button.colors.ON_PRIMARY_COLOR
  ]),

  /** The type of a button is exposed on the component  */
  type: PropTypes.oneOf([Button.inputTags.BUTTON, Button.inputTags.SUBMIT, Button.inputTags.RESET]),
  /** Disabled property which causes the button to be disabled */
  disabled: PropTypes.bool,
  /** Icon to place on the right */
  rightIcon: PropTypes.string,
  /** Icon to place on the left */
  leftIcon: PropTypes.string,
  /** the success props are used when you have async action and wants to display a success message */
  success: PropTypes.bool,
  /** Success icon name */
  successIcon: PropTypes.string,
  /** Success text */
  successText: PropTypes.string,

  /** loading boolean which switches the text to a loader */
  loading: PropTypes.bool,

  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  /** displays the active state */
  active: PropTypes.bool,
  /** id to pass to the button */
  id: PropTypes.string,
  /** adds 8px margin to the right */
  marginRight: PropTypes.bool,
  /** adds 8px margin to the left */
  marginLeft: PropTypes.bool,

  /** element id to describe the button accordingly */
  ariaLabeledBy: PropTypes.string,
  /** aria label to provide important when providing only Icon */
  ariaLabel: PropTypes.string,
  /** On Button Focus callback */
  onFocus: PropTypes.func,
  /** On Button Blur callback */
  onBlur: PropTypes.func,
  rightFlat: PropTypes.bool,
  leftFlat: PropTypes.bool,
  preventClickAnimation: PropTypes.bool,
  noSidePadding: PropTypes.bool
};

Button.defaultProps = {
  kind: BUTTON_TYPES.PRIMARY,
  onClick: NOOP,
  onMouseDown: NOOP,
  name: "",
  size: BUTTON_SIZES.MEDIUM,
  color: BUTTON_COLORS.PRIMARY,
  disabled: false,
  className: "",
  rightIcon: null,
  leftIcon: null,
  successIcon: "",
  successText: "",
  success: false,
  loading: false,
  active: false,
  id: "",
  marginRight: false,
  marginLeft: false,
  type: BUTTON_INPUT_TYPE.BUTTON,
  ariaLabel: "",
  ariaLabeledBy: "",
  rightFlat: false,
  leftFlat: false,
  preventClickAnimation: false,
  noSidePadding: false,
  onFocus: NOOP,
  onBlur: NOOP
};

export default Button;
