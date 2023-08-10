import cx from "classnames";
import React, { forwardRef, useCallback, useEffect, useMemo, useRef } from "react";
import useDebounceEvent from "../../hooks/useDebounceEvent";
import Icon from "../Icon/Icon";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";
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
import { VibeComponentProps, VibeComponent, withStaticProps } from "../../types";
import styles from "./TextField.module.scss";

const EMPTY_OBJECT = { primary: "", secondary: "", layout: "" };

interface TextFieldProps extends VibeComponentProps {
  placeholder?: string;
  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete for all of the available options */
  autoComplete?: string;
  value?: string;
  onChange?: (value: string, event: Pick<React.ChangeEvent, "target">) => void;
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
  underline?: boolean;
}

const TextField: VibeComponent<TextFieldProps, unknown> & {
  sizes?: typeof BASE_SIZES;
  types?: typeof TextFieldTextType;
  feedbacks?: typeof TextFieldFeedbackState;
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
      dataTestId: backwardCompatibilityDataTestId,
      "data-testid": dataTestId,
      secondaryDataTestId,
      tabIndex,
      underline = false,
      name
    },
    ref
  ) => {
    const overrideDataTestId = backwardCompatibilityForProperties(
      [dataTestId, backwardCompatibilityDataTestId],
      getTestId(ComponentDefaultTestId.TEXT_FIELD, id)
    );
    const inputRef = useRef(null);
    const { inputValue, onEventChanged, clearValue } = useDebounceEvent({
      delay: debounceRate,
      onChange: value => {
        onChange(value, { target: inputRef.current });
      },
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
        // Do it cause otherwise the value is not cleared in target object
        inputRef.current.value = "";
        clearValue();
      }
      onIconClick(currentStateIconName);
    }, [inputRef, disabled, clearOnIconClick, onIconClick, currentStateIconName, clearValue]);

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
        className={cx(styles.textField, wrapperClassName, {
          [styles.disabled]: disabled,
          [styles.onlyUnderline]: underline
        })}
        role={role}
        aria-busy={loading}
      >
        <div className={cx(styles.labelWrapper)}>
          <FieldLabel labelText={title} icon={labelIconName} iconLabel={iconsNames.layout} labelFor={id} />
          <div className={cx(styles.inputWrapper, SIZE_MAPPER[getActualSize(size)], validationClass)}>
            {/*Programatical input (tabIndex={-1}) is working fine with aria-activedescendant attribute despite the rule*/}
            {/*eslint-disable-next-line jsx-a11y/aria-activedescendant-has-tabindex*/}
            <input
              className={cx(className, styles.input, {
                [styles.inputHasIcon]: !!hasIcon
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
              data-testid={overrideDataTestId}
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
              tabIndex={tabIndex}
            />
            {loading && (
              <div
                className={cx(styles.loaderContainer, {
                  [styles.loaderContainerHasIcon]: hasIcon
                })}
              >
                <div className={cx(styles.loader)}>
                  <Loader svgClassName={cx(styles.loaderSvg)} />
                </div>
              </div>
            )}
            <Clickable
              className={cx(styles.iconContainer, {
                [styles.iconContainerHasIcon]: hasIcon,
                [styles.iconContainerActive]: isPrimary
              })}
              onClick={onIconClickCallback}
              tabIndex={onIconClick !== NOOP && inputValue && iconName.length && isPrimary ? "0" : "-1"}
            >
              <Icon
                icon={iconName}
                className={cx(styles.icon)}
                clickable={false}
                iconLabel={iconsNames.primary}
                iconType={Icon.type.ICON_FONT}
                ignoreFocusStyle
                iconSize={size === TextField.sizes.SMALL ? "16px" : "18px"}
              />
            </Clickable>
            <Clickable
              className={cx(styles.iconContainer, {
                [styles.iconContainerHasIcon]: hasIcon,
                [styles.iconContainerActive]: isSecondary
              })}
              onClick={onIconClickCallback}
              tabIndex={!shouldFocusOnSecondaryIcon ? "-1" : "0"}
              dataTestId={secondaryDataTestId || getTestId(ComponentDefaultTestId.TEXT_FIELD_SECONDARY_BUTTON, id)}
            >
              <Icon
                icon={secondaryIconName}
                className={cx(styles.icon)}
                clickable={false}
                iconLabel={iconsNames.secondary}
                iconType={Icon.type.ICON_FONT}
                ignoreFocusStyle
                iconSize={size === TextField.sizes.SMALL ? "16px" : "18px"}
              />
            </Clickable>
          </div>
          {shouldShowExtraText && (
            <Text type={Text.types.TEXT2} color={Text.colors.SECONDARY} className={cx(styles.subTextContainer)}>
              {validation && validation.text && (
                <span className={cx(styles.subTextContainerStatus)} aria-label={TextFieldAriaLabel.VALIDATION_TEXT}>
                  {validation.text}
                </span>
              )}
              {showCharCount && (
                <span className={cx(styles.counter)} aria-label={TextFieldAriaLabel.CHAR}>
                  {(inputValue && inputValue.length) || 0}
                </span>
              )}
            </Text>
          )}
        </div>
      </div>
    );
  }
);

export default withStaticProps(TextField, {
  sizes: BASE_SIZES,
  feedbacks: TextFieldFeedbackState,
  types: TextFieldTextType
});
