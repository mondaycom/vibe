/* eslint-disable react/button-has-type */
import React, { AriaAttributes, forwardRef, useCallback, useEffect, useMemo, useRef } from "react";
import { camelCase } from "lodash-es";
import cx from "classnames";
import { SIZES } from "../../constants";
import useMergeRef from "../../hooks/useMergeRef";
import { NOOP } from "../../utils/function-utils";
import Icon from "../../components/Icon/Icon";
import Loader from "../../components/Loader/Loader";
import { BUTTON_ICON_SIZE, ButtonColor, ButtonInputType, ButtonType, getActualSize, Size } from "./ButtonConstants";
import { getParentBackgroundColorNotTransparent, TRANSPARENT_COLOR } from "./helper/dom-helpers";
import { getTestId } from "../../tests/test-ids-utils";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { ComponentDefaultTestId } from "../../tests/constants";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./Button.module.scss";
import { useButtonLoading } from "./helper/useButtonLoading";

export interface ButtonProps extends VibeComponentProps {
  children?: React.ReactNode;
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
  /**
   * @deprecated - use "data-testid" instead
   */
  dataTestId?: string;
  "data-testid"?: string;
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
      blurOnMouseUp,
      dataTestId: backwardCompatabilityDataTestId,
      "data-testid": dataTestId,
      insetFocus,
      tabIndex
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const mergedRef = useMergeRef(ref, buttonRef);

    const { loading } = useButtonLoading({ isLoading });
    const overrideDataTestId = backwardCompatibilityForProperties([dataTestId, backwardCompatabilityDataTestId]);

    useEffect(() => {
      if (color !== ButtonColor.ON_PRIMARY_COLOR && color !== ButtonColor.FIXED_LIGHT) return;
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
        styles.button,
        getStyle(styles, camelCase("size-" + getActualSize(size))),
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
      loading,
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
        "data-testid": overrideDataTestId || getTestId(ComponentDefaultTestId.BUTTON, id),
        onMouseDown: onMouseDownClicked,
        "aria-disabled": disabled,
        "aria-busy": loading,
        "aria-labelledby": ariaLabeledBy,
        "aria-label": ariaLabel,
        "aria-haspopup": ariaHasPopup,
        "aria-expanded": ariaExpanded,
        "aria-controls": ariaControls,
        "aria-describedby": ariaDescribedBy,
        "aria-hidden": ariaHidden
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
      overrideDataTestId,
      onMouseDownClicked,
      disabled,
      loading,
      ariaLabeledBy,
      ariaLabel,
      ariaHasPopup,
      ariaExpanded,
      ariaControls,
      ariaDescribedBy,
      ariaHidden
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

    const buttonContent = useMemo(
      () => (
        <>
          {leftIcon ? (
            <Icon
              iconType={Icon?.type.ICON_FONT}
              clickable={false}
              icon={leftIcon}
              iconSize={leftIconSize}
              className={cx({
                [styles.leftIcon]: !!children
              })}
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
              className={cx({
                [styles.rightIcon]: !!children
              })}
              ignoreFocusStyle
            />
          ) : null}
        </>
      ),
      [children, leftIcon, leftIconSize, rightIcon, rightIconSize]
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
                iconType={Icon?.type.ICON_FONT}
                clickable={false}
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
  dataTestId: undefined,
  kind: ButtonType.PRIMARY,
  onClick: NOOP,
  size: SIZES.MEDIUM,
  color: ButtonColor.PRIMARY,
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
  type: ButtonInputType.BUTTON,
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
  colors: ButtonColor,
  kinds: ButtonType,
  types: ButtonInputType,
  inputTags: ButtonInputType
});
