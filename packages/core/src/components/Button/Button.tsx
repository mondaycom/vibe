/* eslint-disable react/button-has-type */
import React, { AriaAttributes, forwardRef, useCallback, useEffect, useMemo, useRef } from "react";
import { camelCase } from "lodash-es";
import cx from "classnames";
import { SIZES } from "../../constants";
import useMergeRef from "../../hooks/useMergeRef";
import { NOOP } from "../../utils/function-utils";
import Icon from "../../components/Icon/Icon";
import Loader from "../../components/Loader/Loader";
import {
  BUTTON_ICON_SIZE,
  ButtonColor as ButtonColorEnum,
  ButtonInputType as ButtonInputTypeEnum,
  ButtonType as ButtonTypeEnum
} from "./ButtonConstants";
import { ButtonColor, ButtonInputType, ButtonType, ButtonSize } from "./Button.types";
import { getParentBackgroundColorNotTransparent, TRANSPARENT_COLOR } from "./helper/dom-helpers";
import { getTestId } from "../../tests/test-ids-utils";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./Button.module.scss";
import { useButtonLoading } from "./helper/useButtonLoading";

export interface ButtonProps extends VibeComponentProps {
  /**
   * The content of the button.
   */
  children: React.ReactNode;
  /**
   * Class name applied when the button is active.
   */
  activeButtonClassName?: string;
  /**
   * The button's style variant.
   */
  kind?: ButtonType;
  /**
   * Callback fired when the button is clicked.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Callback fired when the button is pressed down.
   */
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * If true, the button loses focus when clicked.
   */
  blurOnMouseUp?: boolean;
  /**
   * The name of the button, for form submissions.
   */
  name?: string;
  /**
   * The size of the button.
   */
  size?: ButtonSize;
  /**
   * The color of the button.
   */
  color?: ButtonColor;
  /**
   * The HTML type of the button.
   */
  type?: ButtonInputType;
  /**
   * If true, the button is disabled.
   */
  disabled?: boolean;
  /**
   * Icon displayed on the right side.
   */
  rightIcon?: SubIcon;
  /**
   * Icon displayed on the left side.
   */
  leftIcon?: SubIcon;
  /**
   * If true, displays a success state after an async action.
   */
  success?: boolean;
  /**
   * The icon displayed in the success state.
   */
  successIcon?: SubIcon;
  /**
   * The text displayed in the success state.
   */
  successText?: string;
  /**
   * If true, replaces the text with a loading indicator.
   */
  loading?: boolean;
  /**
   * Class name applied to the loader container.
   */
  loaderClassName?: string;
  /**
   * Inline styles applied to the button.
   */
  style?: React.CSSProperties;
  /**
   * If true, applies an active state to the button.
   */
  active?: boolean;
  /**
   * If true, adds an 8px margin to the right.
   */
  marginRight?: boolean;
  /**
   * If true, adds an 8px margin to the left.
   */
  marginLeft?: boolean;
  /**
   * ID of the element labeling the button.
   */
  ariaLabeledBy?: string;
  /**
   * The label of the button for accessibility.
   */
  ariaLabel?: string;
  /**
   * Defines the presence of a popup associated with the button.
   */
  ariaHasPopup?: React.HTMLProps<HTMLButtonElement>["aria-haspopup"];
  /**
   * If true, indicates that the associated popup is open.
   */
  ariaExpanded?: boolean;
  /**
   * ID of the region controlled by the button.
   */
  ariaControls?: string;
  /**
   * ID of the element describing the button.
   */
  "aria-describedby"?: AriaAttributes["aria-describedby"];
  /**
   * If true, hides the button from assistive technologies.
   */
  "aria-hidden"?: AriaAttributes["aria-hidden"];
  /**
   * Indicates the pressed state of a toggle button.
   */
  "aria-pressed"?: AriaAttributes["aria-pressed"];
  /**
   * Callback fired when the button gains focus.
   */
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /**
   * Callback fired when the button loses focus.
   */
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /**
   * If true, removes right-side padding.
   */
  rightFlat?: boolean;
  /**
   * If true, removes left-side padding.
   */
  leftFlat?: boolean;
  /**
   * If true, prevents the click animation effect.
   */
  preventClickAnimation?: boolean;
  /**
   * If true, removes side padding.
   */
  noSidePadding?: boolean;
  /**
   * The default text color when using `ON_PRIMARY_COLOR` kind.
   */
  defaultTextColorOnPrimaryColor?: string;
  /**
   * If true, the focus indicator is displayed inside the button instead of around it.
   */
  insetFocus?: boolean;
  /**
   * The tab order of the button.
   */
  tabIndex?: number;
}

const Button: VibeComponent<ButtonProps, unknown> & {
  sizes?: typeof SIZES;
  colors?: typeof ButtonColorEnum;
  kinds?: typeof ButtonTypeEnum;
  types?: typeof ButtonInputTypeEnum;
  inputTags?: typeof ButtonInputTypeEnum;
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
      loading: isLoading,
      loaderClassName,
      active,
      activeButtonClassName,
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
      "aria-describedby": ariaDescribedBy,
      "aria-hidden": ariaHidden,
      "aria-pressed": ariaPressed,
      blurOnMouseUp,
      "data-testid": dataTestId,
      insetFocus,
      tabIndex
    }: ButtonProps,
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const mergedRef = useMergeRef(ref, buttonRef);

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
        tabIndex: disabled || ariaHidden ? -1 : tabIndex,
        "data-testid": dataTestId || getTestId(ComponentDefaultTestId.BUTTON, id),
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

    const hasRenderableChildren = useMemo(() => React.Children.toArray(children).some(Boolean), [children]);

    const buttonContent = useMemo(
      () => (
        <>
          {leftIcon ? (
            <Icon
              iconType="font"
              icon={leftIcon}
              iconSize={leftIconSize}
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
              iconSize={rightIconSize}
              className={cx({
                [styles.rightIcon]: hasRenderableChildren
              })}
              ignoreFocusStyle
            />
          ) : null}
        </>
      ),
      [children, hasRenderableChildren, leftIcon, leftIconSize, rightIcon, rightIconSize]
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
                iconSize={successIconSize}
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

Button.defaultProps = {
  className: undefined,
  name: undefined,
  style: undefined,
  id: undefined,
  kind: "primary",
  onClick: NOOP,
  size: "medium",
  color: "primary",
  disabled: false,
  rightIcon: null,
  leftIcon: null,
  success: false,
  successText: "",
  successIcon: null,
  loading: false,
  loaderClassName: undefined,
  active: false,
  marginRight: false,
  marginLeft: false,
  type: "button",
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

export default withStaticProps(Button, {
  sizes: SIZES,
  colors: ButtonColorEnum,
  kinds: ButtonTypeEnum,
  types: ButtonInputTypeEnum,
  inputTags: ButtonInputTypeEnum
});
