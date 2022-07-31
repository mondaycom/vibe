/* eslint-disable react/jsx-props-no-spreading,react/button-has-type */
import { SIZES } from "../../constants/sizes";
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useResizeObserver from "../../hooks/useResizeObserver";
import useMergeRefs from "../../hooks/useMergeRefs";
import { NOOP } from "../../utils/function-utils";
import Icon from "../../components/Icon/Icon";
import Loader from "../../components/Loader/Loader";
import { BUTTON_COLORS, BUTTON_INPUT_TYPE, BUTTON_TYPES, getActualSize } from "./ButtonConstants";
import { getParentBackgroundColorNotTransparent, TRANSPARENT_COLOR } from "./helper/dom-helpers";
import "./Button.scss";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";

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
      blurOnMouseUp,
      dataTestId,
      insetFocus
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
      if (disabled || !button) {
        return;
      }
      if (blurOnMouseUp) {
        button.blur();
      }
    }, [disabled, buttonRef, blurOnMouseUp]);

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
          "monday-style-button--no-side-padding": noSidePadding,
          "monday-style-button--disabled": disabled,
          "inset-focus-style": insetFocus
        }
      );
    }, [
      success,
      color,
      className,
      size,
      kind,
      hasSizeStyle,
      loading,
      active,
      marginRight,
      marginLeft,
      rightFlat,
      leftFlat,
      preventClickAnimation,
      noSidePadding,
      disabled,
      insetFocus
    ]);

    const mergedRef = useMergeRefs({ refs: [ref, buttonRef] });

    const buttonProps = useMemo(() => {
      return {
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
        "data-testid": dataTestId || getTestId(ELEMENT_TYPES.BUTTON, id),
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
      mergedRef,
      type,
      classNames,
      name,
      onMouseUp,
      style,
      onButtonClicked,
      id,
      onFocus,
      onBlur,
      dataTestId,
      onMouseDownClicked,
      ariaLabeledBy,
      ariaLabel,
      loading,
      ariaHasPopup,
      ariaExpanded,
      ariaControls
    ]);

    const leftIconSize = useMemo(() => {
      if (typeof leftIcon !== "function") return;
      return "24";
    }, [leftIcon]);

    const rightIconSize = useMemo(() => {
      if (typeof rightIcon !== "function") return;
      return "24";
    }, [rightIcon]);

    const successIconSize = useMemo(() => {
      if (typeof successIcon !== "function") return;
      return "24";
    }, [successIcon]);

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
Button.types = BUTTON_INPUT_TYPE;
Button.inputTags = BUTTON_INPUT_TYPE;

Button.propTypes = {
  /** Custom class name to pass to the component */
  className: PropTypes.string,
  /** The button's kind */
  kind: PropTypes.oneOf([Button.kinds.PRIMARY, Button.kinds.SECONDARY, Button.kinds.TERTIARY]),
  /** Callback function to run when the button is clicked */
  onClick: PropTypes.func,
  /** Callback function to run when the `onMouseDown` event is triggered */
  onMouseDown: PropTypes.func,
  /** Blur the button after click */
  blurOnMouseUp: PropTypes.bool,
  /** The button's form name */
  name: PropTypes.string,
  /** The button's size  */
  size: PropTypes.oneOf([Button.sizes.SMALL, Button.sizes.MEDIUM, Button.sizes.LARGE]),
  /** The button's color  */
  color: PropTypes.oneOf([
    Button.colors.PRIMARY,
    Button.colors.NEGATIVE,
    Button.colors.POSITIVE,
    Button.colors.ON_PRIMARY_COLOR,
    Button.colors.ON_INVERTED_BACKGROUND
  ]),
  /** The button's type  */
  type: PropTypes.oneOf([Button.inputTags.BUTTON, Button.inputTags.SUBMIT, Button.inputTags.RESET]),
  /** Whether the button is disabled or not */
  disabled: PropTypes.bool,
  /** Icon to render to the right of the button */
  rightIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Icon to render to the left of the button */
  leftIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Displays a custom success state, see the `successIcon` and `successText` props as well */
  success: PropTypes.bool,
  /** Success icon name */
  successIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Success text */
  successText: PropTypes.string,
  /** Displays a spinner on the button */
  loading: PropTypes.bool,
  /** Custom style to pass to the component */
  style: PropTypes.object,
  /** Marks the button as active */
  active: PropTypes.bool,
  /** HTML ID to pass to the button */
  id: PropTypes.string,
  /** Adds a little bit of margin to the right */
  marginRight: PropTypes.bool,
  /** Adds a little bit of margin to the left */
  marginLeft: PropTypes.bool,
  /** Element id to describe the button accordingly */
  ariaLabeledBy: PropTypes.string,
  /** Aria label to provide important when providing only Icon */
  ariaLabel: PropTypes.string,
  /** Aria for a button popup */
  ariaHasPopup: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Aria to be set if the popup is open */
  ariaExpanded: PropTypes.bool,
  /** Aria controls - receives id for the controlled region */
  ariaControls: PropTypes.string,
  /** Callback function to run when the button is focused */
  onFocus: PropTypes.func,
  /** Callback function to run when the button is blurred */
  onBlur: PropTypes.func,
  rightFlat: PropTypes.bool,
  leftFlat: PropTypes.bool,
  preventClickAnimation: PropTypes.bool,
  noSidePadding: PropTypes.bool,
  /** Default text color in `ON_PRIMARY_COLOR` kind (should be any type of css color (rgb, var, hex...) */
  defaultTextColorOnPrimaryColor: PropTypes.string,
  /** Change the focus indicator from around the button to within it */
  insetFocus: PropTypes.bool
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
  ariaLabeledBy: undefined,
  insetFocus: false
};

export default Button;
