/* eslint-disable jsx-a11y/no-autofocus */
import React, { forwardRef, useRef, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import useDebounceEvent from "../../hooks/useDebounceEvent";
import "./TextField.scss";
import Icon from "../Icon/Icon";
import { FEEDBACK_CLASSES, FEEDBACK_STATES, sizeMapper } from "./TextFieldHelpers";
import FieldLabel from "../FieldLabel/FieldLabel";
import { TEXT_FIELD_SIZE, TEXT_TYPES } from "./TextFieldConstants";
import useMergeRefs from "../../hooks/useMergeRefs";

const NOOP = () => {};

const EMPTY_OBJECT = { primary: "", secondary: "", label: "" };
const TextField = forwardRef(
  (
    {
      className,
      placeholder,
      autoComplete,
      value,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      debounceRate,
      autoFocus,
      disabled,
      setRef,
      iconName,
      secondaryIconName,
      id,
      title,
      size,
      validation,
      wrapperClassName,
      onIconClick,
      clearOnIconClick,
      labelIconName,
      showCharCount,
      inputAriaLabel,
      iconsNames,
      type,
      maxLength,
      trim,
      role,
      required
    },
    ref
  ) => {
    const inputRef = useRef(null);
    const { inputValue, onEventChanged, clearValue } = useDebounceEvent({
      delay: debounceRate,
      onChange,
      initialStateValue: value,
      trim
    });

    const currentStateIconName = useMemo(() => {
      if (secondaryIconName) {
        return inputValue ? secondaryIconName : iconName;
      }
      return iconName;
    }, [iconName, secondaryIconName, inputValue]);

    const iconClickable = useMemo(() => {
      return !disabled && (clearOnIconClick || onIconClick !== NOOP);
    }, [onIconClick, clearOnIconClick, disabled]);

    const onIconClickCallback = useCallback(() => {
      if (disabled) {
        return;
      }

      if (clearOnIconClick) {
        if (inputRef.current) {
          inputRef.current.focus();
        }
        clearValue();
      }
      onIconClick(currentStateIconName);
    }, [clearValue, currentStateIconName, inputRef, clearOnIconClick, disabled, onIconClick]);

    const validationClass = useMemo(() => {
      if (!validation) {
        return "";
      }
      return FEEDBACK_CLASSES[validation.status];
    }, [validation]);

    const hasIcon = iconName || secondaryIconName;
    const shouldShowExtraText = showCharCount || (validation && validation.text);
    const isSecondary = secondaryIconName === currentStateIconName;
    const isPrimary = iconName === currentStateIconName;

    const mergedRef = useMergeRefs({ refs: [ref, inputRef, setRef] });

    return (
      <div
        className={classNames("input-component", wrapperClassName, {
          "input-component--disabled": disabled
        })}
        role={role}
      >
        <div className="input-component__label--wrapper">
          <FieldLabel labelText={title} icon={labelIconName} iconLabel={iconsNames.layout} labelFor={id} />
          <div className={classNames("input-component__input-wrapper", sizeMapper[size], validationClass)}>
            <input
              className={classNames(className, "input-component__input", {
                "input-component__input--has-icon": !!hasIcon
              })}
              placeholder={placeholder}
              autoComplete={autoComplete}
              value={inputValue}
              onChange={onEventChanged}
              disabled={disabled}
              ref={mergedRef}
              autoFocus={autoFocus}
              type={type}
              id={id}
              onBlur={onBlur}
              onFocus={onFocus}
              onKeyDown={onKeyDown}
              aria-label={inputAriaLabel || placeholder}
              maxLength={maxLength}
              aria-invalid={validation && validation.status === "error"}
              required={required}
            />
            <div
              className={classNames("input-component__icon--container", {
                "input-component__icon--container-has-icon": hasIcon,
                "input-component__icon--container-active": isPrimary
              })}
            >
              <Icon
                icon={iconName}
                onClick={onIconClickCallback}
                className={classNames("input-component__icon")}
                clickable={isPrimary && iconClickable}
                id={id}
                iconLabel={iconsNames.primary}
                iconType={Icon.type.ICON_FONT}
                ignoreFocusStyle
              />
            </div>
            <div
              className={classNames("input-component__icon--container", {
                "input-component__icon--container-has-icon": hasIcon,
                "input-component__icon--container-active": isSecondary
              })}
            >
              <Icon
                icon={secondaryIconName}
                onClick={onIconClickCallback}
                className={classNames("input-component__icon")}
                clickable={isSecondary && iconClickable}
                id={id}
                iconLabel={iconsNames.secondary}
                iconType={Icon.type.ICON_FONT}
                ignoreFocusStyle
              />
            </div>
          </div>
          {shouldShowExtraText && (
            <div className="input-component__sub-text-container">
              {validation && validation.text && (
                <span className="input-component__sub-text-container-status" aria-label={ARIA_LABELS.VALIDATION_TEXT}>
                  {validation.text}
                </span>
              )}
              {showCharCount && (
                <span className="input-component__sub-text-container-counter" aria-label={ARIA_LABELS.CHAR}>
                  {(inputValue && inputValue.length) || 0}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

TextField.sizes = TEXT_FIELD_SIZE;
TextField.feedbacks = FEEDBACK_STATES;
TextField.types = TEXT_TYPES;

TextField.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete for all of the available options */
  autoComplete: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  debounceRate: PropTypes.number,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  setRef: PropTypes.func,
  iconName: PropTypes.string,
  secondaryIconName: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  /** TEXT_FIELD_SIZE is exposed on the component itself */
  size: PropTypes.oneOf([TextField.sizes.SMALL, TextField.sizes.MEDIUM, TextField.sizes.LARGE]),
  validation: PropTypes.shape({
    /** Don't provide status for plain assistant text */
    status: PropTypes.oneOf(["error", "success"]),

    text: PropTypes.string
  }),
  wrapperClassName: PropTypes.string,
  onIconClick: PropTypes.func,
  clearOnIconClick: PropTypes.bool,
  labelIconName: PropTypes.string,
  showCharCount: PropTypes.bool,
  inputAriaLabel: PropTypes.string,
  /**  Icon names labels for a11y */
  iconsNames: PropTypes.shape({
    layout: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string
  }),
  /** TEXT_TYPES is exposed on the component itself */
  type: PropTypes.oneOf([TextField.types.TEXT, TextField.types.PASSWORD, TextField.types.SEARCH]),
  maxLength: PropTypes.number,
  trim: PropTypes.bool,
  /** ARIA role for container landmark */
  role: PropTypes.string,
  /** adds required to the input element */
  required: PropTypes.bool
};

TextField.defaultProps = {
  className: "",
  placeholder: "",
  autoComplete: "off",
  value: undefined,
  onChange: NOOP,
  onBlur: NOOP,
  onFocus: NOOP,
  onKeyDown: NOOP,
  debounceRate: 0,
  autoFocus: false,
  disabled: false,
  setRef: NOOP,
  iconName: "",
  secondaryIconName: "",
  id: "input",
  title: "",
  size: "s",
  validation: null,
  wrapperClassName: "",
  onIconClick: NOOP,
  clearOnIconClick: false,
  labelIconName: "",
  showCharCount: false,
  inputAriaLabel: "",

  iconsNames: EMPTY_OBJECT,
  type: TEXT_TYPES.TEXT,
  maxLength: null,
  trim: false,
  role: "",
  required: false
};

export const ARIA_LABELS = {
  CHAR: "Input char count",
  VALIDATION_TEXT: "Additional helper text"
};

export default TextField;
