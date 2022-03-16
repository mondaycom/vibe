/* eslint-disable react/jsx-props-no-spreading,react/button-has-type */
import { SIZES } from "constants/sizes";
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useResizeObserver from "hooks/useResizeObserver";
import useMergeRefs from "hooks/useMergeRefs";
import { NOOP } from "utils/function-utils";
import Icon from "components/Icon/Icon";
import Loader from "components/Loader/Loader";
import { ButtonColor, ButtonInputType, ButtonType, getActualSize } from "./ButtonConstants";
import { getParentBackgroundColorNotTransparent, TRANSPARENT_COLOR } from "./helper/dom-helpers";
import "./Button.scss";
import { Rect } from "@popperjs/core";

// @ts-ignore
const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

// min button width
const MIN_BUTTON_HEIGHT_PX = isIE11 ? 32 : 6;
const UPDATE_CSS_VARIABLES_DEBOUNCE = 200;

export interface ButtonProps {
  /** Custom class names to pass to the component */
  className: string;
  /** The button's kind */
  kind: ButtonType;
  /** Callback function to run when the button is clicked */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Blur on button click */
  blurOnMouseUp: boolean;
  /** Name of the button - for form submit usages  */
  name: string;
  /** The button's size */
  size: typeof SIZES[keyof typeof SIZES];
  /** The button's color */
  color: ButtonColor;
  /** The button's type */
  type: ButtonInputType;
  /** Whether the button should be disabled or not */
  disabled: boolean;
  /** Icon to place on the right */
  rightIcon: string | React.Component;
  /** Icon to place on the left */
  leftIcon: string | React.Component;
  /** the success props are used when you have async action and wants to display a success message */
  success: boolean;
  /** Success icon name */
  successIcon: string | React.Component;
  /** Success text */
  successText: string;
  /** loading boolean which switches the text to a loader */
  loading: boolean;
  style: Record<string, string>;
  /** displays the active state */
  active: boolean;
  /** id to pass to the button */
  id: string;
  /** adds 8px margin to the right */
  marginRight: boolean;
  /** adds 8px margin to the left */
  marginLeft: boolean;
  /** element id to describe the button accordingly */
  ariaLabeledBy: string;
  /** aria label to provide important when providing only Icon */
  ariaLabel: string;
  /** aria for a button popup */
  ariaHasPopup: string | boolean;
  /** aria to be set if the popup is open */
  ariaExpanded: boolean;
  /** aria controls - receives id for the controlled region */
  ariaControls: string;
  /** On Button Focus callback */
  onFocus: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /** On Button Blur callback */
  onBlur: (event: React.FocusEvent<HTMLButtonElement>) => void;
  rightFlat: boolean;
  leftFlat: boolean;
  preventClickAnimation: boolean;
  noSidePadding: boolean;
  /** default color for text color in ON_PRIMARY_COLOR kind (should be any type of css color (rbg, var, hex...) */
  defaultTextColorOnPrimaryColor: string;
}

const Button = forwardRef<unknown, ButtonProps>(
  (
    {
      className,
      children,
      kind = ButtonType.PRIMARY,
      onClick = NOOP,
      name,
      size = SIZES.MEDIUM,
      color = ButtonColor.PRIMARY,
      disabled = false,
      rightIcon = null,
      leftIcon = null,
      success = false,
      successText = "",
      successIcon = null,
      style,
      loading = false,
      active = false,
      id,
      marginRight = false,
      marginLeft = false,
      type = ButtonInputType.BUTTON,
      onMouseDown = NOOP,
      ariaLabel,
      rightFlat = false,
      leftFlat = false,
      preventClickAnimation = false,
      noSidePadding = false,
      onFocus = NOOP,
      onBlur = NOOP,
      ariaLabeledBy,
      defaultTextColorOnPrimaryColor = TRANSPARENT_COLOR,
      ariaHasPopup,
      ariaExpanded,
      ariaControls,
      blurOnMouseUp = true
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [hasSizeStyle, setHasSizeStyle] = useState(false);

    const updateCssVariables = useMemo(() => {
      return ({ borderBoxSize }: { borderBoxSize: { blockSize: number; inlineSize: number } }) => {
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
      if (color !== ButtonColor.ON_PRIMARY_COLOR) return;
      if (kind !== ButtonType.PRIMARY) return;
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
      const calculatedColor = success ? ButtonColor.POSITIVE : color;
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
      const props: Record<string, any> = {
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
        "aria-haspopup": ariaHasPopup,
        "aria-expanded": ariaExpanded,
        "aria-controls": ariaControls
      };

      if (loading) {
        props["aria-busy"] = "true";
      }

      return props;
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
            {/** @ts-ignore */}
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
              // @ts-ignore
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
            // @ts-ignore
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
            // @ts-ignore
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

const ButtonWithStaticProperties = Object.assign(Button, {
  sizes: SIZES,
  colors: ButtonColor,
  kinds: ButtonType,
  types: ButtonInputType,
  inputTags: ButtonInputType
});

export default ButtonWithStaticProperties;
