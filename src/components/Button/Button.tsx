/* eslint-disable react/button-has-type */
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { SIZES } from "../../constants";
import useResizeObserver from "../../hooks/useResizeObserver";
import useMergeRefs from "../../hooks/useMergeRefs";
import { NOOP } from "../../utils/function-utils";
import Icon from "../../components/Icon/Icon";
import Loader from "../../components/Loader/Loader";
import { BUTTON_ICON_SIZE, ButtonColor, ButtonInputType, ButtonType, getActualSize, Size } from "./ButtonConstants";
import { getParentBackgroundColorNotTransparent, TRANSPARENT_COLOR } from "./helper/dom-helpers";
import { getTestId } from "../../tests/test-ids-utils";
import { isIE11 } from "../../utils/user-agent-utils";
import { SubIcon, VibeComponent } from "../../types";
import { ComponentDefaultTestId } from "../../tests/constants";
import "./Button.scss";

// min button width
const MIN_BUTTON_HEIGHT_PX = isIE11() ? 32 : 6;
const UPDATE_CSS_VARIABLES_DEBOUNCE = 200;

export interface ButtonProps {
  children?: React.ReactNode;
  /** Custom class names to pass to the component */
  className?: string;
  /** The button's kind */
  kind?: ButtonType;
  /** Callback function to run when the button is clicked */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Blur on button click */
  blurOnMouseUp?: boolean;
  /** Name of the button - for form submit usages  */
  name?: string;
  /** The button's size */
  size?: Size;
  /** The button's color */
  color?: ButtonColor;
  /** The button's type */
  type?: ButtonInputType;
  /** Whether the button should be disabled or not */
  disabled?: boolean;
  /** Icon to place on the right */
  rightIcon?: SubIcon;
  /** Icon to place on the left */
  leftIcon?: SubIcon;
  /** the success props are used when you have async action and wants to display a success message */
  success?: boolean;
  /** Success icon name */
  successIcon?: SubIcon;
  /** Success text */
  successText?: string;
  /** loading boolean which switches the text to a loader */
  loading?: boolean;
  style?: React.CSSProperties;
  /** displays the active state */
  active?: boolean;
  /** id to pass to the button */
  id?: string;
  /** adds 8px margin to the right */
  marginRight?: boolean;
  /** adds 8px margin to the left */
  marginLeft?: boolean;
  /** element id to describe the button accordingly */
  ariaLabeledBy?: string;
  /** aria label to provide important when providing only Icon */
  ariaLabel?: string;
  /** aria for a button popup */
  ariaHasPopup?: React.HTMLProps<HTMLButtonElement>["aria-haspopup"];
  /** aria to be set if the popup is open */
  ariaExpanded?: boolean;
  /** aria controls - receives id for the controlled region */
  ariaControls?: string;
  /** On Button Focus callback */
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /** On Button Blur callback */
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  rightFlat?: boolean;
  leftFlat?: boolean;
  preventClickAnimation?: boolean;
  noSidePadding?: boolean;
  /** default color for text color in ON_PRIMARY_COLOR kind (should be any type of css color (rbg, var, hex...) */
  defaultTextColorOnPrimaryColor?: string;
  dataTestId?: string;
  /** Change the focus indicator from around the button to within it */
  insetFocus?: boolean;
  /** Specifies the tab order of an element */
  tabIndex?: number;
}

const Button: VibeComponent<ButtonProps, unknown> & {
  sizes?: typeof SIZES;
  colors?: typeof ButtonColor;
  kinds?: typeof ButtonType;
  types?: typeof ButtonInputType;
  inputTags?: typeof ButtonInputType;
} = forwardRef<unknown, ButtonProps>(
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
      insetFocus,
      tabIndex
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
      if (disabled || !button) {
        return;
      }
      if (blurOnMouseUp) {
        button.blur();
      }
    }, [disabled, buttonRef, blurOnMouseUp]);

    const onButtonClicked = useCallback(
      (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
      (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
      const props: Record<string, any> = {
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
        tabIndex,
        "data-testid": dataTestId || getTestId(ComponentDefaultTestId.BUTTON, id),
        onMouseDown: onMouseDownClicked,
        "aria-disabled": disabled,
        "aria-busy": loading,
        "aria-labelledby": ariaLabeledBy,
        "aria-label": ariaLabel,
        "aria-haspopup": ariaHasPopup,
        "aria-expanded": ariaExpanded,
        "aria-controls": ariaControls,
        "aria-pressed": active
      };
      return props;
    }, [
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
      tabIndex,
      dataTestId,
      onMouseDownClicked,
      disabled,
      loading,
      ariaLabeledBy,
      ariaLabel,
      ariaHasPopup,
      ariaExpanded,
      ariaControls,
      active
    ]);

    const leftIconSize = useMemo(() => {
      if (typeof leftIcon !== "function") return;
      return BUTTON_ICON_SIZE;
    }, [leftIcon]);

    const rightIconSize = useMemo(() => {
      if (typeof rightIcon !== "function") return;
      return BUTTON_ICON_SIZE;
    }, [rightIcon]);

    const successIconSize = useMemo(() => {
      if (typeof successIcon !== "function") return;
      return BUTTON_ICON_SIZE;
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
              iconType={Icon?.type.ICON_FONT}
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
            iconType={Icon?.type.ICON_FONT}
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
            iconType={Icon?.type.ICON_FONT}
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

Object.assign(Button, {
  sizes: SIZES,
  colors: ButtonColor,
  kinds: ButtonType,
  types: ButtonInputType,
  inputTags: ButtonInputType,
  defaultTestId: ComponentDefaultTestId.BUTTON
});

Button.defaultProps = {
  className: undefined,
  name: undefined,
  style: undefined,
  id: undefined,
  dataTestId: undefined,
  kind: Button.kinds?.PRIMARY,
  onClick: NOOP,
  size: Button.sizes?.MEDIUM,
  color: Button.colors?.PRIMARY,
  disabled: false,
  rightIcon: null,
  leftIcon: null,
  success: false,
  successText: "",
  successIcon: null,
  loading: false,
  active: false,
  marginRight: false,
  marginLeft: false,
  type: Button.types?.BUTTON,
  onMouseDown: NOOP,
  rightFlat: false,
  leftFlat: false,
  preventClickAnimation: false,
  noSidePadding: false,
  onFocus: NOOP,
  onBlur: NOOP,
  defaultTextColorOnPrimaryColor: TRANSPARENT_COLOR,
  ariaHasPopup: undefined,
  blurOnMouseUp: true,
  ariaExpanded: undefined,
  ariaControls: undefined,
  ariaLabel: undefined,
  ariaLabeledBy: undefined,
  insetFocus: false
};

export default Button;
