/* eslint-disable react/jsx-props-no-spreading,react/button-has-type */
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useResizeObserver from "../../hooks/useResizeObserver";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./Button.scss";
import { BUTTON_COLORS, BUTTON_INPUT_TYPE, BUTTON_TYPES, getActualSize } from "./ButtonConstants";
import { NOOP } from "../../utils/function-utils";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";
import { SIZES } from "../../constants/sizes";
import { getParentBackgroundColorNotTransparent, TRANSPARENT_COLOR } from "./helper/dom-helpers";

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
      ariaLabeledBy,
      defaultTextColorOnPrimaryColor,
      ariaHasPopup,
      ariaExpanded,
      ariaControls,
      blurOnMouseUp
    },
    ref
  ) => {
    const buttonRef = useRef(null);
    const [hasSizeStyle, setHasSizeStyle] = useState(false);

    const updateCssVariables = useMemo(() => {
      return ({ borderBoxSize }) => {
        const { blockSize, inlineSize } = borderBoxSize;
        const width = Math.max(inlineSize, MIN_BUTTON_HEIGHT_PX);
        const height = Math.max(blockSize, MIN_BUTTON_HEIGHT_PX);
        if (!buttonRef.current) return;
        buttonRef.current.style.setProperty("--element-width", `${width}px`);
        buttonRef.current.style.setProperty("--element-height", `${height}px`);
        setHasSizeStyle(true);
      };
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
      buttonElement.style.color = getParentBackgroundColorNotTransparent(buttonElement, defaultTextColorOnPrimaryColor);
    }, [kind, buttonRef, color, defaultTextColorOnPrimaryColor]);

    const onMouseUp = useCallback(() => {
      const button = buttonRef.current;
      if (!button) {
        return;
      }
      if (blurOnMouseUp) {
        button.blur();
      }
    }, [buttonRef, blurOnMouseUp]);

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
        `monday-style-button--size-${getActualSize(size)}`,
        `monday-style-button--kind-${kind}`,
        `monday-style-button--color-${calculatedColor}`,
        {
          "has-style-size": hasSizeStyle,
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
      rightFlat,
      hasSizeStyle
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
        "aria-disabled": disabled,
        "aria-labelledby": ariaLabeledBy,
        "aria-label": ariaLabel,
        "aria-busy": loading ? "true" : undefined,
        "aria-haspopup": ariaHasPopup,
        "aria-expanded": ariaExpanded,
        "aria-controls": ariaControls
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
      ariaLabeledBy,
      ariaControls,
      ariaExpanded,
      ariaHasPopup
    ]);

    const leftIconSize = useMemo(() => {
      if (typeof leftIcon !== "function") return;
      if (size === SIZES.SMALL) return "20";
      if (size === SIZES.MEDIUM) return "24";
      return "24";
    }, [leftIcon, size]);

    const rightIconSize = useMemo(() => {
      if (typeof rightIcon !== "function") return;
      if (size === SIZES.SMALL) return "20";
      if (size === SIZES.MEDIUM) return "24";
      return "24";
    }, [rightIcon, size]);

    const successIconSize = useMemo(() => {
      if (typeof successIcon !== "function") return;
      if (size === SIZES.SMALL) return "20";
      if (size === SIZES.MEDIUM) return "24";
      return "24";
    }, [successIcon, size]);

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
              iconSize={successIconSize}
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
            iconSize={leftIconSize}
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
            iconSize={rightIconSize}
            className={cx({ "monday-style-button--right-icon": !!children })}
            ignoreFocusStyle
          />
        ) : null}
      </button>
    );
  }
);

Button.sizes = SIZES;
Button.colors = BUTTON_COLORS;
Button.kinds = BUTTON_TYPES;
Button.inputTags = BUTTON_INPUT_TYPE;

Button.propTypes = {
  className: PropTypes.string,
  /** The kind of a button is exposed on the component  */
  kind: PropTypes.oneOf([Button.kinds.PRIMARY, Button.kinds.SECONDARY, Button.kinds.TERTIARY]),
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  /** Blur on button click */
  blurOnMouseUp: PropTypes.bool,
  /** Name of the button - for form submit usages  */
  name: PropTypes.string,
  /** The size of a button is exposed on the component  */
  size: PropTypes.oneOf([Button.sizes.SMALL, Button.sizes.MEDIUM, Button.sizes.LARGE]),

  /** The color of a button is exposed on the component  */
  color: PropTypes.oneOf([
    Button.colors.PRIMARY,
    Button.colors.NEGATIVE,
    Button.colors.POSITIVE,
    Button.colors.ON_PRIMARY_COLOR,
    Button.colors.ON_INVERTED_BACKGROUND
  ]),

  /** The type of a button is exposed on the component  */
  type: PropTypes.oneOf([Button.inputTags.BUTTON, Button.inputTags.SUBMIT, Button.inputTags.RESET]),
  /** Disabled property which causes the button to be disabled */
  disabled: PropTypes.bool,
  /** Icon to place on the right */
  rightIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Icon to place on the left */
  leftIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** the success props are used when you have async action and wants to display a success message */
  success: PropTypes.bool,
  /** Success icon name */
  successIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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
  /** aria for a button popup */
  ariaHasPopup: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** aria to be set if the popup is open */
  ariaExpanded: PropTypes.bool,
  /** aria controls - receives id for the controlled region */
  ariaControls: PropTypes.string,
  /** On Button Focus callback */
  onFocus: PropTypes.func,
  /** On Button Blur callback */
  onBlur: PropTypes.func,
  rightFlat: PropTypes.bool,
  leftFlat: PropTypes.bool,
  preventClickAnimation: PropTypes.bool,
  noSidePadding: PropTypes.bool,
  /** default color for text color in ON_PRIMARY_COLOR kind (should be any type of css color (rbg, var, hex...) */
  defaultTextColorOnPrimaryColor: PropTypes.string
};

Button.defaultProps = {
  kind: BUTTON_TYPES.PRIMARY,
  onClick: NOOP,
  onMouseDown: NOOP,
  blurOnMouseUp: true,
  name: undefined,
  style: undefined,
  size: SIZES.MEDIUM,
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
  id: undefined,
  marginRight: false,
  marginLeft: false,
  type: BUTTON_INPUT_TYPE.BUTTON,
  rightFlat: false,
  leftFlat: false,
  preventClickAnimation: false,
  noSidePadding: false,
  onFocus: NOOP,
  onBlur: NOOP,
  defaultTextColorOnPrimaryColor: TRANSPARENT_COLOR,
  ariaHasPopup: undefined,
  ariaExpanded: undefined,
  ariaControls: undefined,
  ariaLabel: undefined,
  ariaLabeledBy: undefined
};

export default Button;
