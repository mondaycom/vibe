/* eslint-disable react/button-has-type */
import React, { type AriaAttributes, forwardRef, useCallback, useEffect, useMemo, useRef } from "react";
import { camelCase } from "es-toolkit";
import cx from "classnames";
import { SIZES, useMergeRef, NOOP } from "@vibe/shared";
import { Icon, type SubIcon } from "@vibe/icon";
import { Loader } from "@vibe/loader";
import {
  ButtonColor as ButtonColorEnum,
  ButtonInputType as ButtonInputTypeEnum,
  ButtonType as ButtonTypeEnum
} from "./ButtonConstants";
import { type ButtonColor, type ButtonInputType, type ButtonType, type ButtonSize } from "./Button.types";
import { getParentBackgroundColorNotTransparent, TRANSPARENT_COLOR } from "./helper/dom-helpers";
import {
  getTestId,
  type VibeComponentProps,
  withStaticProps,
  ComponentDefaultTestId,
  ComponentVibeId
} from "@vibe/shared";
import { getStyle } from "@vibe/shared";
import styles from "./Button.module.scss";
import { useButtonLoading } from "./helper/useButtonLoading";

export interface ButtonProps extends VibeComponentProps {
  children: React.ReactNode;
  /** Custom class names to pass to the component */
  className?: string;
  activeButtonClassName?: string;
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
  size?: ButtonSize;
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
  /** className which is applied to loader container **/
  loaderClassName?: string;
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
  "aria-describedby"?: AriaAttributes["aria-describedby"];
  /**
   * aria to be used for screen reader to know if the button is hidden
   */
  "aria-hidden"?: AriaAttributes["aria-hidden"];
  /**
   * Indicates the current "pressed" state of toggle buttons
   */
  "aria-pressed"?: AriaAttributes["aria-pressed"];
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
  "data-testid"?: string;
  /** Change the focus indicator from around the button to within it */
  insetFocus?: boolean;
  /** Specifies the tab order of an element */
  tabIndex?: number;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      kind = "primary",
      onClick = NOOP,
      name,
      size = "medium",
      color = "primary",
      disabled = false,
      rightIcon = null,
      leftIcon = null,
      success = false,
      successText = "",
      successIcon = null,
      style,
      loading: isLoading = false,
      loaderClassName,
      active = false,
      activeButtonClassName,
      id,
      marginRight = false,
      marginLeft = false,
      type = "button",
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
      "aria-describedby": ariaDescribedBy,
      "aria-hidden": ariaHidden,
      "aria-pressed": ariaPressed,
      blurOnMouseUp = true,
      "data-testid": dataTestId,
      insetFocus = false,
      tabIndex
    }: ButtonProps,
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const mergedRef = useMergeRef(ref, buttonRef);

    // TODO: REMOVE - Fake performance regression for testing
    let _fake = 0;
    for (let i = 0; i < 5000000; i++) {
      _fake += Math.sqrt(i) * Math.sin(i) * Math.cos(i);
    }
    if (_fake === -999) console.log(_fake); // Prevent optimization

    const { loading } = useButtonLoading({ isLoading });

    useEffect(() => {
      if (color !== "on-primary-color" && color !== "fixed-light") return;
      if (kind !== "primary") return;
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
      const calculatedColor = success ? "positive" : color;
      return cx(
        className,
        styles.button,
        getStyle(styles, camelCase("size-" + size)),
        getStyle(styles, camelCase("kind-" + kind)),
        getStyle(styles, camelCase("color-" + calculatedColor)),
        {
          [styles.success]: success,
          [getStyle(styles, camelCase("color-" + calculatedColor + "-active"))]: active,
          [activeButtonClassName]: active,
          [styles.marginRight]: marginRight,
          [styles.marginLeft]: marginLeft,
          [styles.rightFlat]: rightFlat,
          [styles.leftFlat]: leftFlat,
          [styles.preventClickAnimation]: preventClickAnimation,
          [styles.noSidePadding]: noSidePadding,
          [styles.disabled]: disabled,
          [styles.insetFocusStyle]: insetFocus
        }
      );
    }, [
      success,
      color,
      className,
      size,
      kind,
      active,
      activeButtonClassName,
      marginRight,
      marginLeft,
      rightFlat,
      leftFlat,
      preventClickAnimation,
      noSidePadding,
      disabled,
      insetFocus
    ]);

    const buttonProps = useMemo(() => {
      const props: Record<string, unknown> = {
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
        tabIndex: tabIndex ?? (disabled || ariaHidden ? -1 : undefined),
        "data-testid": dataTestId || getTestId(ComponentDefaultTestId.BUTTON, id),
        "data-vibe": ComponentVibeId.BUTTON,
        onMouseDown: onMouseDownClicked,
        "aria-disabled": disabled,
        "aria-busy": loading,
        "aria-labelledby": ariaLabeledBy,
        "aria-label": ariaLabel,
        "aria-haspopup": ariaHasPopup,
        "aria-expanded": ariaExpanded,
        "aria-controls": ariaControls,
        "aria-describedby": ariaDescribedBy,
        "aria-hidden": ariaHidden,
        "aria-pressed": ariaPressed
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
      ariaDescribedBy,
      ariaHidden,
      ariaPressed
    ]);

    const iconSize = useCallback(
      (icon: SubIcon) => {
        if (typeof icon !== "function") return;
        switch (size) {
          case "xxs":
          case "xs":
            return 16;
          default:
            return 20;
        }
      },
      [size]
    );

    const hasRenderableChildren = useMemo(() => React.Children.toArray(children).some(Boolean), [children]);

    const buttonContent = useMemo(
      () => (
        <>
          {leftIcon ? (
            <Icon
              iconType="font"
              icon={leftIcon}
              iconSize={iconSize(leftIcon)}
              className={cx({
                [styles.leftIcon]: hasRenderableChildren
              })}
              ignoreFocusStyle
            />
          ) : null}
          {children}
          {rightIcon ? (
            <Icon
              iconType="font"
              icon={rightIcon}
              iconSize={iconSize(rightIcon)}
              className={cx({
                [styles.rightIcon]: hasRenderableChildren
              })}
              ignoreFocusStyle
            />
          ) : null}
        </>
      ),
      [children, hasRenderableChildren, iconSize, leftIcon, rightIcon]
    );

    if (loading) {
      return (
        <button {...buttonProps} key={`${id}-loading`}>
          <span className={cx(styles.loader, loaderClassName)}>
            <Loader className={styles.loaderSvg} />
            <span aria-hidden className={styles.textPlaceholder}>
              {buttonContent}
            </span>
          </span>
        </button>
      );
    }

    if (success) {
      return (
        <button {...buttonProps} key={`${id}-success`}>
          <span className={styles.successContent}>
            {successIcon ? (
              <Icon
                iconType="font"
                icon={successIcon}
                iconSize={iconSize(successIcon)}
                className={cx({
                  [styles.leftIcon]: !!successText
                })}
                ignoreFocusStyle
              />
            ) : null}
            {successText}
          </span>
          <span aria-hidden="true" className={styles.textPlaceholder}>
            {buttonContent}
          </span>
        </button>
      );
    }

    return (
      <button {...buttonProps} key={`${id}-button`}>
        {buttonContent}
      </button>
    );
  }
);

interface ButtonStaticProps {
  sizes: typeof SIZES;
  colors: typeof ButtonColorEnum;
  kinds: typeof ButtonTypeEnum;
  types: typeof ButtonInputTypeEnum;
  inputTags: typeof ButtonInputTypeEnum;
}

export default withStaticProps<ButtonProps, ButtonStaticProps>(Button, {
  sizes: SIZES,
  colors: ButtonColorEnum,
  kinds: ButtonTypeEnum,
  types: ButtonInputTypeEnum,
  inputTags: ButtonInputTypeEnum
});
