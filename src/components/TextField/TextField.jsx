import cx from "classnames";
/* eslint-disable */
import React, { forwardRef, useCallback, useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import useDebounceEvent from "../../hooks/useDebounceEvent";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";
import { FEEDBACK_CLASSES, FEEDBACK_STATES, sizeMapper } from "./TextFieldHelpers";
import FieldLabel from "../FieldLabel/FieldLabel";
import { getActualSize, TEXT_TYPES } from "./TextFieldConstants";
import { SIZES } from "../../constants/sizes";
import useMergeRefs from "../../hooks/useMergeRefs";
import Clickable from "../../components/Clickable/Clickable";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./TextField.module.scss";

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
      readonly,
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
      searchResultsContainerId,
      activeDescendant,
      iconsNames,
      type,
      maxLength,
      trim,
      role,
      required,
      loading,
      dataTestId,
      secondaryDataTestId
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
    const shouldFocusOnSecondaryIcon = secondaryIconName && isSecondary && !!inputValue;

    const mergedRef = useMergeRefs({ refs: [ref, inputRef, setRef] });
    useEffect(() => {
      if (inputRef.current && autoFocus) {
        const animationFrame = requestAnimationFrame(() => inputRef.current.focus());
        return () => cancelAnimationFrame(animationFrame);
      }
    }, [inputRef, autoFocus]);

    return (
      <div
        className={cx(styles.inputComponent, "input-component", wrapperClassName, {
          [styles.disabled]: disabled,
          ["input-component--disabled"]: disabled
        })}
        role={role}
        aria-busy={loading}
      >
        <div className={cx(styles.labelWrapper, "input-component__label--wrapper")}>
          <FieldLabel labelText={title} icon={labelIconName} iconLabel={iconsNames.layout} labelFor={id} />
          <div
            className={cx(
              styles.wrapper,
              "input-component__input-wrapper",
              sizeMapper[getActualSize(size)],
              validationClass
            )}
          >
            <input
              className={cx(className, styles.input, "input-component__input", {
                [styles.inputHasIcon]: !!hasIcon,
                ["input-component__input--has-icon"]: !!hasIcon
              })}
              placeholder={placeholder}
              autoComplete={autoComplete}
              value={inputValue}
              onChange={onEventChanged}
              disabled={disabled}
              readOnly={readonly}
              ref={mergedRef}
              type={type}
              id={id}
              onBlur={onBlur}
              onFocus={onFocus}
              onKeyDown={onKeyDown}
              maxLength={maxLength}
              role={searchResultsContainerId && "combobox"} // For voice reader
              aria-label={inputAriaLabel || placeholder}
              aria-invalid={validation && validation.status === "error"}
              aria-owns={searchResultsContainerId}
              aria-activedescendant={activeDescendant}
              required={required}
              data-testid={dataTestId || getTestId(ELEMENT_TYPES.TEXT_FIELD, id)}
            />
            {loading && (
              <div
                className={cx(styles.loaderContainer, "input-component__loader--container", {
                  [styles.loaderContainerHasIcon]: hasIcon,
                  ["input-component__loader--container-has-icon"]: hasIcon
                })}
              >
                <div className={cx(styles.loader, "input-component__loader")}>
                  <Loader svgClassName={cx(styles.loaderSvg, "input-component__loader-svg")} />
                </div>
              </div>
            )}
            <Clickable
              className={cx(styles.iconContainer, "input-component__icon--container", {
                [styles.iconContainerHasIcon]: hasIcon,
                ["input-component__icon--container-has-icon"]: hasIcon,
                [styles.iconContainerActive]: isPrimary,
                ["input-component__icon--container-active"]: isPrimary
              })}
              onClick={onIconClickCallback}
              tabIndex={onIconClick !== NOOP && inputValue && iconName.length && isPrimary ? "0" : "-1"}
            >
              <Icon
                icon={iconName}
                className={cx(styles.icon, "input-component__icon")}
                clickable={false}
                id={id}
                iconLabel={iconsNames.primary}
                iconType={Icon.type.ICON_FONT}
                ignoreFocusStyle
                iconSize={size === TextField.sizes.SMALL ? "16px" : "18px"}
              />
            </Clickable>
            <Clickable
              className={cx(styles.iconContainer, "input-component__icon--container", {
                [styles.iconContainer]: hasIcon,
                ["input-component__icon--container-has-icon"]: hasIcon,
                [styles.iconContainerHasIcon]: isSecondary,
                ["input-component__icon--container-active"]: isSecondary
              })}
              onClick={onIconClickCallback}
              tabIndex={!shouldFocusOnSecondaryIcon ? "-1" : "0"}
              dataTestId={secondaryDataTestId || getTestId(ELEMENT_TYPES.TEXT_FIELD_SECONDARY_BUTTON, id)}
            >
              <Icon
                icon={secondaryIconName}
                className={cx(styles.icon, "input-component__icon")}
                clickable={false}
                id={id}
                iconLabel={iconsNames.secondary}
                iconType={Icon.type.ICON_FONT}
                ignoreFocusStyle
                iconSize={size === TextField.sizes.SMALL ? "16px" : "18px"}
              />
            </Clickable>
          </div>
          {shouldShowExtraText && (
            <div className={cx(styles.subTextContainer, "input-component__sub-text-container")}>
              {validation && validation.text && (
                <span
                  className={cx(styles.subTextContainerStatus, "input-component__sub-text-container-status")}
                  aria-label={ARIA_LABELS.VALIDATION_TEXT}
                >
                  {validation.text}
                </span>
              )}
              {showCharCount && (
                <span
                  className={cx(styles.subTextContainerCounter, "input-component__sub-text-container-counter")}
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
  }
);

TextField.sizes = SIZES;
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
  readonly: PropTypes.bool,
  setRef: PropTypes.func,
  iconName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  secondaryIconName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  id: PropTypes.string,
  title: PropTypes.string,
  /** SIZES is exposed on the component itself */
  size: PropTypes.oneOf([TextField.sizes.SMALL, TextField.sizes.MEDIUM, TextField.sizes.LARGE]),
  validation: PropTypes.oneOfType([
    PropTypes.shape({
      /** Don't provide status for plain assistant text */
      status: PropTypes.oneOf(["error", "success"]),

      text: PropTypes.string
    }),
    PropTypes.shape({
      text: PropTypes.string
    })
  ]),
  wrapperClassName: PropTypes.string,
  onIconClick: PropTypes.func,
  clearOnIconClick: PropTypes.bool,
  labelIconName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  showCharCount: PropTypes.bool,
  inputAriaLabel: PropTypes.string,
  searchResultsContainerId: PropTypes.string,
  activeDescendant: PropTypes.string,
  /**  Icon names labels for a11y */
  iconsNames: PropTypes.shape({
    layout: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string
  }),
  /** TEXT_TYPES is exposed on the component itself */
  type: PropTypes.oneOf([
    TextField.types.TEXT,
    TextField.types.PASSWORD,
    TextField.types.SEARCH,
    TextField.types.DATE,
    TextField.types.DATE_TIME
  ]),
  maxLength: PropTypes.number,
  trim: PropTypes.bool,
  /** ARIA role for container landmark */
  role: PropTypes.string,
  /** adds required to the input element */
  required: PropTypes.bool,
  /** shows loading animation */
  loading: PropTypes.bool
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
  readonly: false,
  setRef: NOOP,
  iconName: "",
  secondaryIconName: "",
  id: "input",
  title: "",
  size: TextField.sizes.SMALL,
  validation: null,
  wrapperClassName: "",
  onIconClick: NOOP,
  clearOnIconClick: false,
  labelIconName: "",
  showCharCount: false,
  inputAriaLabel: undefined,
  searchResultsContainerId: "",
  activeDescendant: "",
  iconsNames: EMPTY_OBJECT,
  type: TEXT_TYPES.TEXT,
  maxLength: null,
  trim: false,
  role: "",
  required: false,
  loading: false
};

export const ARIA_LABELS = {
  CHAR: "Input char count",
  VALIDATION_TEXT: "Additional helper text"
};

export default TextField;
