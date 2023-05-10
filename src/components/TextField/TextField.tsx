import React, { forwardRef, useCallback, useEffect, useMemo, useRef } from "react";
import classNames from "classnames";
import useDebounceEvent from "../../hooks/useDebounceEvent";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";
import FieldLabel from "../FieldLabel/FieldLabel";
import {
  FEEDBACK_CLASSES,
  getActualSize,
  SIZE_MAPPER,
  TextFieldAriaLabel,
  TextFieldFeedbackState,
  TextFieldSize,
  TextFieldTextType
} from "./TextFieldConstants";
import { BASE_SIZES } from "../../constants/sizes";
import useMergeRefs from "../../hooks/useMergeRefs";
import Clickable from "../../components/Clickable/Clickable";
import { getTestId } from "../../tests/test-ids-utils";
import { NOOP } from "../../utils/function-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { VibeComponentProps, VibeComponent } from "../../types";
import "./TextField.scss";

const EMPTY_OBJECT = { primary: "", secondary: "", layout: "" };

interface TextFieldProps extends VibeComponentProps {
  placeholder?: string;
  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete for all of the available options */
  autoComplete?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (event: React.FocusEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  onWheel?: (event: React.WheelEvent) => void;
  debounceRate?: number;
  autoFocus?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  setRef?: (node: HTMLElement) => void;
  iconName?: string | React.FunctionComponent | null;
  secondaryIconName?: string | React.FunctionComponent | null;
  title?: string;
  /** SIZES is exposed on the component itself */
  size?: TextFieldSize;
  /** Don't provide status for plain assistant text */
  validation?: { status?: "error" | "success"; text?: string }; // TODO make common validation class?
  wrapperClassName?: string;
  onIconClick?: (icon: string | React.FunctionComponent | null) => void;
  clearOnIconClick?: boolean;
  labelIconName?: string | React.FunctionComponent | null;
  showCharCount?: boolean;
  inputAriaLabel?: string;
  searchResultsContainerId?: string;
  activeDescendant?: string;
  /**  Icon names labels for a11y */
  iconsNames?: {
    layout: string;
    primary: string;
    secondary: string;
  };
  /** TEXT_TYPES is exposed on the component itself */
  type?: TextFieldTextType;
  maxLength?: number;
  trim?: boolean;
  /** ARIA role for container landmark */
  role?: string;
  /** adds required to the input element */
  required?: boolean;
  /** shows loading animation */
  loading?: boolean;
  dataTestId?: string;
  secondaryDataTestId?: string;
  tabIndex?: number;
  name?: string;
}

const TextField: VibeComponent<TextFieldProps, unknown> & {
  sizes?: typeof BASE_SIZES;
  types?: TextFieldTextType;
  feedbacks?: TextFieldFeedbackState;
} = forwardRef(
  (
    {
      className = "",
      placeholder = "",
      autoComplete = "off",
      value,
      onChange = NOOP,
      onBlur = NOOP,
      onFocus = NOOP,
      onKeyDown = NOOP,
      onWheel = NOOP,
      debounceRate = 0,
      autoFocus = false,
      disabled = false,
      readonly = false,
      setRef = NOOP,
      iconName,
      secondaryIconName,
      id = "input",
      title = "",
      size = TextField.sizes.SMALL,
      validation = null,
      wrapperClassName = "",
      onIconClick = NOOP,
      clearOnIconClick = false,
      labelIconName,
      showCharCount = false,
      inputAriaLabel,
      searchResultsContainerId = "",
      activeDescendant = "",
      iconsNames = EMPTY_OBJECT,
      type = TextFieldTextType.TEXT,
      maxLength = null,
      trim = false,
      role = "",
      required = false,
      loading = false,
      dataTestId,
      secondaryDataTestId,
      tabIndex,
      name
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
      if (!validation || !validation.status) {
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
        className={classNames("input-component", wrapperClassName, {
          "input-component--disabled": disabled
        })}
        role={role}
        aria-busy={loading}
      >
        <div className="input-component__label--wrapper">
          <FieldLabel labelText={title} icon={labelIconName} iconLabel={iconsNames.layout} labelFor={id} />
          <div
            className={classNames("input-component__input-wrapper", SIZE_MAPPER[getActualSize(size)], validationClass)}
          >
            {/*Programatical input (tabIndex={-1}) is working fine with aria-activedescendant attribute despite the rule*/}
            {/*eslint-disable-next-line jsx-a11y/aria-activedescendant-has-tabindex*/}
            <input
              className={classNames(className, "input-component__input", {
                "input-component__input--has-icon": !!hasIcon
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
              name={name}
              onBlur={onBlur}
              onFocus={onFocus}
              onKeyDown={onKeyDown}
              onWheel={onWheel}
              maxLength={maxLength}
              role={searchResultsContainerId && "combobox"} // For voice reader
              aria-label={inputAriaLabel || placeholder}
              aria-invalid={validation && validation.status === "error"}
              aria-owns={searchResultsContainerId}
              aria-activedescendant={activeDescendant}
              required={required}
              data-testid={dataTestId || getTestId(ComponentDefaultTestId.TEXT_FIELD, id)}
              tabIndex={tabIndex}
            />
            {loading && (
              <div
                className={classNames("input-component__loader--container", {
                  "input-component__loader--container-has-icon": hasIcon
                })}
              >
                <div className={"input-component__loader"}>
                  <Loader svgClassName="input-component__loader-svg" />
                </div>
              </div>
            )}
            <Clickable
              className={classNames("input-component__icon--container", {
                "input-component__icon--container-has-icon": hasIcon,
                "input-component__icon--container-active": isPrimary
              })}
              onClick={onIconClickCallback}
              tabIndex={onIconClick !== NOOP && inputValue && iconName.length && isPrimary ? "0" : "-1"}
            >
              <Icon
                icon={iconName}
                className={classNames("input-component__icon")}
                clickable={false}
                id={id}
                iconLabel={iconsNames.primary}
                iconType={Icon.type.ICON_FONT}
                ignoreFocusStyle
                iconSize={size === TextField.sizes.SMALL ? "16px" : "18px"}
              />
            </Clickable>
            <Clickable
              className={classNames("input-component__icon--container", {
                "input-component__icon--container-has-icon": hasIcon,
                "input-component__icon--container-active": isSecondary
              })}
              onClick={onIconClickCallback}
              tabIndex={!shouldFocusOnSecondaryIcon ? "-1" : "0"}
              dataTestId={secondaryDataTestId || getTestId(ComponentDefaultTestId.TEXT_FIELD_SECONDARY_BUTTON, id)}
            >
              <Icon
                icon={secondaryIconName}
                className={classNames("input-component__icon")}
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
            <div className="input-component__sub-text-container">
              {validation && validation.text && (
                <span
                  className="input-component__sub-text-container-status"
                  aria-label={TextFieldAriaLabel.VALIDATION_TEXT}
                >
                  {validation.text}
                </span>
              )}
              {showCharCount && (
                <span className="input-component__sub-text-container-counter" aria-label={TextFieldAriaLabel.CHAR}>
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

Object.assign(TextField, {
  sizes: BASE_SIZES,
  feedbacks: TextFieldFeedbackState,
  types: TextFieldTextType,
  defaultTestId: ComponentDefaultTestId.TEXT_FIELD
});

export default TextField;
