/* eslint-disable react/jsx-props-no-spreading,react/button-has-type */
import React, { useCallback, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useResizeObserver from "../../hooks/useResizeObserver";
import "./Button.scss";
import {
  BUTTON_COLORS,
  BUTTON_INPUT_TYPE,
  BUTTON_SIZES,
  BUTTON_TYPES
} from "./ButtonContstants";
import { NOOP } from "../../utils/function-utils";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";

const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

// min button width
const MIN_BUTTON_HEIGHT_PX = isIE11 ? 32 : 6;
const UPDATE_CSS_VARIABLES_DEBOUNCE = 200;

const Button = ({
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
  type
}) => {
  const buttonRef = useRef(null);

  const updateCssVariables = useMemo(() => {
    const callback = ({ borderBoxSize }) => {
      const { blockSize, inlineSize } = borderBoxSize;
      const width = Math.max(inlineSize, MIN_BUTTON_HEIGHT_PX);
      const height = Math.max(blockSize, MIN_BUTTON_HEIGHT_PX);
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
        "monday-style-button--margin-left": marginLeft
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
    marginLeft
  ]);

  const buttonProps = useMemo(() => {
    return {
      disabled,
      ref: buttonRef,
      type,
      className: classNames,
      name,
      onMouseUp,
      style,
      onClick: onButtonClicked,
      id
    };
  }, [
    disabled,
    buttonRef,
    classNames,
    name,
    onMouseUp,
    style,
    onButtonClicked,
    id,
    type
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
            className={cx({ "monday-style-button--left-icon": !!successText })}
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
};

Button.propTypes = {
  kind: PropTypes.oneOf([
    BUTTON_TYPES.PRIMARY,
    BUTTON_TYPES.SECONDARY,
    BUTTON_TYPES.TERTIARY
  ]),
  onClick: PropTypes.func,
  name: PropTypes.string,
  size: PropTypes.oneOf([
    BUTTON_SIZES.SMALL,
    BUTTON_SIZES.MEDIUM,
    BUTTON_SIZES.LARGE
  ]),
  color: PropTypes.oneOf([
    BUTTON_COLORS.PRIMARY,
    BUTTON_COLORS.NEGATIVE,
    BUTTON_COLORS.POSITIVE,
    BUTTON_COLORS.ON_PRIMARY_COLOR
  ]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  rightIcon: PropTypes.string,
  leftIcon: PropTypes.string,
  successIcon: PropTypes.string,
  successText: PropTypes.string,
  success: PropTypes.bool,
  loading: PropTypes.bool,
  style: PropTypes.object,
  active: PropTypes.bool,
  id: PropTypes.string,
  marginRight: PropTypes.bool,
  marginLeft: PropTypes.bool,
  type: PropTypes.oneOf([
    BUTTON_INPUT_TYPE.BUTTON,
    BUTTON_INPUT_TYPE.SUBMIT,
    BUTTON_INPUT_TYPE.RESET
  ])
};
Button.defaultProps = {
  kind: BUTTON_TYPES.PRIMARY,
  onClick: NOOP,
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
  type: BUTTON_INPUT_TYPE.BUTTON
};

Button.sizes = BUTTON_SIZES;
Button.colors = BUTTON_COLORS;
Button.kind = BUTTON_TYPES;
Button.kinds = BUTTON_TYPES;
Button.inputTags = BUTTON_INPUT_TYPE;

export default Button;
