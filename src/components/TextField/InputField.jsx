/* eslint-disable jsx-a11y/no-autofocus */
import React, { useRef, useEffect, useMemo, useCallback } from "react";
import classNames from "classnames";
import useDebounceEvent from "../../hooks/useDebounceEvent";
import "./InputField.scss";
import Icon from "../Icon/Icon";
import {
  FEEDBACK_CLASSES,
  FEEDBACK_STATES,
  sizeMapper
} from "./TextFieldHelpers";
import FieldLabel from "../FieldLabel/FieldLabel";
import { TEXT_FIELD_SIZE, TEXT_TYPES } from "./TextFieldConstants";

const NOOP = () => {};

const EMPTY_OBJECT = { primary: "", secondary: "", label: "" };
const InputField = ({
  className = "",
  placeholder = "",
  autoComplete = "off",
  value = undefined,
  onChange = NOOP,
  onBLur = NOOP,
  onFocus = NOOP,
  onKeyDown = NOOP,
  debounceRate = 0,
  autoFocus = false,
  disabled = false,
  setRef = NOOP,
  iconName = "",
  secondaryIconName = "",
  id = "input",
  title = "",
  size = "s",
  validation = null,
  wrapperClassName = "",
  onIconClick = NOOP,
  clearOnIconClick = false,
  labelIconName = "",
  showCharCount = false,
  inputAriaLabel = "",
  iconsNames = EMPTY_OBJECT,
  type = TEXT_TYPES.TEXT,
  maxLength,
  trim = false
}) => {
  const inputRef = useRef(null);
  const { inputValue, onEventChanged, clearValue } = useDebounceEvent({
    delay: debounceRate,
    onChange,
    initialStateValue: value,
    trim
  });

  useEffect(() => {
    if (!inputRef.current) {
      return () => {};
    }
    setRef(inputRef.current);
  }, [inputRef, setRef]);

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
  }, [
    clearValue,
    currentStateIconName,
    inputRef,
    clearOnIconClick,
    disabled,
    onIconClick
  ]);

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
  return (
    <div
      className={classNames("input-component", wrapperClassName, {
        "input-component--disabled": disabled
      })}
    >
      <div className="input-component__label--wrapper">
        <FieldLabel
          labelText={title}
          iconName={labelIconName}
          iconLabel={iconsNames.layout}
          labelFor={id}
        />
        <div
          className={classNames(
            "input-component__input-wrapper",
            sizeMapper[size],
            validationClass
          )}
        >
          <input
            className={classNames(className, "input-component__input", {
              "input-component__input--has-icon": !!hasIcon
            })}
            placeholder={placeholder}
            autoComplete={autoComplete}
            value={inputValue}
            onChange={onEventChanged}
            disabled={disabled}
            ref={inputRef}
            autoFocus={autoFocus}
            type={type}
            id={id}
            onBlur={onBLur}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            aria-label={inputAriaLabel || placeholder}
            maxLength={maxLength}
          />
          <div
            className={classNames("input-component__icon--container", {
              "input-component__icon--container-has-icon": hasIcon,
              "input-component__icon--container-active": isPrimary
            })}
          >
            <Icon
              iconName={iconName}
              onClick={onIconClickCallback}
              className={classNames("input-component__icon")}
              clickable={isPrimary && iconClickable}
              id={id}
              iconLabel={iconsNames.primary}
            />
          </div>
          <div
            className={classNames("input-component__icon--container", {
              "input-component__icon--container-has-icon": hasIcon,
              "input-component__icon--container-active": isSecondary
            })}
          >
            <Icon
              iconName={secondaryIconName}
              onClick={onIconClickCallback}
              className={classNames("input-component__icon")}
              clickable={isSecondary && iconClickable}
              id={id}
              iconLabel={iconsNames.secondary}
            />
          </div>
        </div>
        {shouldShowExtraText && (
          <div className="input-component__sub-text-container">
            {validation && validation.text && (
              <span
                className="input-component__sub-text-container-status"
                aria-label={ARIA_LABELS.VALIDATION_TEXT}
              >
                {validation.text}
              </span>
            )}
            {showCharCount && (
              <span
                className="input-component__sub-text-container-counter"
                aria-label={ARIA_LABELS.CHAR}
              >
                {(inputValue && inputValue.length) || 0}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export const ARIA_LABELS = {
  CHAR: "Input char count",
  VALIDATION_TEXT: "Additional helper text"
};
InputField.sizes = TEXT_FIELD_SIZE;
InputField.feedbacks = FEEDBACK_STATES;
InputField.types = TEXT_TYPES;
export default InputField;
