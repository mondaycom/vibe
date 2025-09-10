import cx from "classnames";
import React, {
  ChangeEvent,
  type ChangeEventHandler,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import useDebounceEvent from "../../hooks/useDebounceEvent";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";
import FieldLabel from "../FieldLabel/FieldLabel";
import {
  FEEDBACK_CLASSES,
  SIZE_MAPPER,
  TextFieldAriaLabel,
  TextFieldFeedbackState as TextFieldFeedbackStateEnum,
  TextFieldTextType as TextFieldTextTypeEnum
} from "./TextFieldConstants";
import { type TextFieldType, type TextFieldSize } from "./TextField.types";
import { BASE_SIZES } from "../../constants/sizes";
import useMergeRef from "../../hooks/useMergeRef";
import Clickable from "../../components/Clickable/Clickable";
import { getTestId } from "../../tests/test-ids-utils";
import { NOOP } from "../../utils/function-utils";
import { ComponentDefaultTestId, ComponentVibeId } from "../../tests/constants";
import { withStaticProps } from "../../types";
import { type VibeComponentProps } from "@vibe/shared";
import styles from "./TextField.module.scss";
import { Tooltip } from "../Tooltip";
import { HiddenText } from "../HiddenText";

const EMPTY_OBJECT = { primary: "", secondary: "" };

export interface TextFieldProps extends VibeComponentProps {
  /**
   * The placeholder text displayed when the input is empty.
   */
  placeholder?: string;
  /**
   * Configures the browser's autocomplete behavior.
   */
  autoComplete?: string;
  /**
   * The current value of the text field.
   */
  value?: string;
  /**
   * Callback fired when the text field value changes.
   */
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement> | Pick<React.ChangeEvent<HTMLInputElement>, "target">
  ) => void;
  /**
   * Callback fired when the text field loses focus.
   */
  onBlur?: (event: React.FocusEvent) => void;
  /**
   * Callback fired when the text field gains focus.
   */
  onFocus?: (event: React.FocusEvent) => void;
  /**
   * Callback fired when a key is pressed inside the text field.
   */
  onKeyDown?: (event: React.KeyboardEvent) => void;
  /**
   * Callback fired when the mouse wheel is used inside the text field.
   */
  onWheel?: (event: React.WheelEvent) => void;
  /**
   * The debounce rate for input value changes.
   */
  debounceRate?: number;
  /**
   * If true, the input is automatically focused on mount.
   */
  autoFocus?: boolean;
  /**
   * If true, disables the text field.
   */
  disabled?: boolean;
  /**
   * If true, makes the text field read-only.
   */
  readonly?: boolean;
  /**
   * A function to set a reference to the input element.
   */
  setRef?: (node: HTMLElement) => void;
  /**
   * The primary icon displayed inside the text field.
   */
  iconName?: string | React.FunctionComponent | null;
  /**
   * The secondary icon displayed inside the text field.
   */
  secondaryIconName?: string | React.FunctionComponent | null;
  /**
   * The label displayed above the text field.
   */
  title?: string;
  /**
   * The size of the text field.
   */
  size?: TextFieldSize;
  /**
   * Validation state for the text field.
   */
  validation?: { status?: "error" | "success"; text?: string | React.ReactNode };
  /**
   * Class name applied to the text field wrapper.
   */
  wrapperClassName?: string;
  /**
   * Callback fired when the icon inside the text field is clicked.
   */
  onIconClick?: (icon: string | React.FunctionComponent | null) => void;
  /**
   * If true, clears the input when the icon is clicked.
   */
  clearOnIconClick?: boolean;
  /**
   * The icon displayed inside the label.
   */
  labelIconName?: string | React.FunctionComponent | null;
  /**
   * If true, displays the character count.
   */
  showCharCount?: boolean;
  /**
   * The ARIA label for the input field.
   */
  inputAriaLabel?: string;
  /**
   * The ID of the container where search results are displayed.
   */
  searchResultsContainerId?: string;
  /**
   * The ID of the currently active search result.
   */
  activeDescendant?: string;
  /**
   * Icon labels for accessibility.
   */
  iconsNames?: {
    primary: string;
    secondary: string;
  };
  /**
   * The type of the text field.
   */
  type?: TextFieldType;
  /**
   * The maximum number of characters allowed.
   */
  maxLength?: number;
  /**
   * If true, allows the user to exceed the character limit set by `maxLength`.
   */
  allowExceedingMaxLength?: boolean;
  /**
   * If true, trims whitespace from the input value.
   */
  trim?: boolean;
  /**
   * The ARIA role of the text field.
   */
  role?: string;
  /**
   * If true, marks the input as required.
   */
  required?: boolean;
  /**
   * The error message displayed when a required field is left empty.
   */
  requiredErrorText?: string;
  /**
   * If true, displays a loading indicator inside the text field.
   */
  loading?: boolean;
  /**
   * Test ID for the secondary icon.
   */
  secondaryDataTestId?: string;
  /**
   * The tab order of the input field.
   */
  tabIndex?: number;
  /**
   * The name attribute for the input field.
   */
  name?: string;
  /**
   * If true, renders only an underline style for the text field.
   */
  underline?: boolean;
  /**
   * If true, the component is controlled by an external state.
   */
  controlled?: boolean;
  /**
   * Tooltip content for the primary icon.
   */
  iconTooltipContent?: string;
  /**
   * Tooltip content for the secondary icon.
   */
  secondaryTooltipContent?: string;
  /**
   * The text direction of the input.
   */
  dir?: "ltr" | "rtl" | "auto";
}

const TextField = forwardRef(
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
      size = "small",
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
      type = "text",
      maxLength = null,
      allowExceedingMaxLength = false,
      trim = false,
      role = "",
      required = false,
      requiredErrorText = "",
      loading = false,
      "data-testid": dataTestId,
      secondaryDataTestId,
      tabIndex,
      underline = false,
      name,
      controlled = false,
      iconTooltipContent,
      secondaryTooltipContent,
      dir
    }: TextFieldProps,
    ref: React.ForwardedRef<unknown>
  ) => {
    const [isRequiredAndEmpty, setIsRequiredAndEmpty] = useState(false);

    const inputRef = useRef(null);
    const mergedRef = useMergeRef(ref, inputRef, setRef);

    const onBlurCallback = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (required && !e.target.value) {
          setIsRequiredAndEmpty(true);
        }
        onBlur(e);
      },
      [onBlur, required]
    );

    const onChangeCallback = useCallback(
      (value: string, e?: React.ChangeEvent<HTMLInputElement>) => {
        if (isRequiredAndEmpty && value) {
          setIsRequiredAndEmpty(false);
        }
        const event = e || { target: inputRef.current };
        onChange(value, event);
      },
      [onChange, isRequiredAndEmpty]
    );

    const {
      inputValue: uncontrolledInput,
      onEventChanged,
      clearValue
    } = useDebounceEvent({
      delay: debounceRate,
      onChange: onChangeCallback,
      initialStateValue: value,
      trim
    });

    const inputValue = useMemo(() => {
      return controlled ? value : uncontrolledInput;
    }, [controlled, value, uncontrolledInput]);

    const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
      event => {
        controlled ? onChangeCallback(event.target.value, event) : onEventChanged(event);
      },
      [controlled, onChangeCallback, onEventChanged]
    );

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
        controlled ? onChangeCallback("") : clearValue();
      }
      onIconClick(currentStateIconName);
    }, [disabled, clearOnIconClick, onIconClick, currentStateIconName, controlled, onChangeCallback, clearValue]);

    const validationClass = useMemo(() => {
      if (typeof maxLength === "number" && inputValue && inputValue.length > maxLength) {
        return FEEDBACK_CLASSES.error;
      }

      if ((!validation || !validation.status) && !isRequiredAndEmpty) {
        return "";
      }
      const status = isRequiredAndEmpty ? "error" : validation.status;
      return FEEDBACK_CLASSES[status];
    }, [maxLength, validation, isRequiredAndEmpty, inputValue]);

    const hasIcon = iconName || secondaryIconName;
    const shouldShowExtraText =
      showCharCount || (validation && validation.text) || (isRequiredAndEmpty && requiredErrorText);
    const isSecondary = secondaryIconName === currentStateIconName;
    const isPrimary = iconName === currentStateIconName;
    const shouldFocusOnPrimaryIcon =
      (onIconClick !== NOOP || iconsNames.primary || iconTooltipContent) && inputValue && iconName.length && isPrimary;
    const shouldFocusOnSecondaryIcon = (secondaryIconName || secondaryTooltipContent) && isSecondary && !!inputValue;
    const allowExceedingMaxLengthTextId = allowExceedingMaxLength ? `${id}-allow-exceeding-max-length-text` : undefined;

    useEffect(() => {
      if (!inputRef?.current || !autoFocus) {
        return;
      }

      const animationFrame = requestAnimationFrame(() => inputRef.current.focus());
      return () => cancelAnimationFrame(animationFrame);
    }, [inputRef, autoFocus]);

    const isIconContainerClickable = onIconClick !== NOOP || clearOnIconClick;

    const primaryIconLabel = iconsNames.primary || iconTooltipContent;
    const secondaryIconLabel = iconsNames.secondary || secondaryTooltipContent;

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
          <FieldLabel labelText={title} icon={labelIconName} labelFor={id} required={required} />
          <div className={cx(styles.inputWrapper, SIZE_MAPPER[size], validationClass)}>
            {/*Programatical input (tabIndex={-1}) is working fine with aria-activedescendant attribute despite the rule*/}
            {/*eslint-disable-next-line jsx-a11y/aria-activedescendant-has-tabindex*/}
            <input
              className={cx(className, styles.input, {
                [styles.inputHasIcon]: !!hasIcon,
                [styles.readOnly]: readonly
              })}
              placeholder={placeholder}
              autoComplete={autoComplete}
              value={inputValue}
              onChange={handleChange}
              disabled={disabled}
              readOnly={readonly}
              ref={mergedRef}
              type={type}
              id={id}
              data-testid={dataTestId || getTestId(ComponentDefaultTestId.TEXT_FIELD, id)}
              data-vibe={ComponentVibeId.TEXT_FIELD}
              name={name}
              onBlur={onBlurCallback}
              onFocus={onFocus}
              onKeyDown={onKeyDown}
              onWheel={onWheel}
              maxLength={typeof maxLength === "number" && !allowExceedingMaxLength ? maxLength : undefined}
              role={searchResultsContainerId && "combobox"} // For voice reader
              aria-label={inputAriaLabel || placeholder}
              aria-invalid={(validation && validation.status === "error") || isRequiredAndEmpty}
              aria-owns={searchResultsContainerId}
              aria-activedescendant={activeDescendant}
              aria-required={required}
              aria-describedby={allowExceedingMaxLengthTextId}
              required={required}
              tabIndex={tabIndex}
              dir={dir}
            />
            {loading && (
              <div
                className={cx(styles.loaderContainer, {
                  [styles.loaderContainerHasIcon]: hasIcon
                })}
              >
                <div className={cx(styles.loader)}>
                  <Loader className={cx(styles.loaderSvg)} />
                </div>
              </div>
            )}
            {iconName && (
              <Tooltip
                content={isPrimary ? iconTooltipContent : undefined}
                referenceWrapperClassName={styles.tooltipContainer}
              >
                <Clickable
                  className={cx(styles.iconContainer, {
                    [styles.iconContainerHasIcon]: hasIcon,
                    [styles.iconContainerActive]: isPrimary,
                    [styles.iconContainerClickable]: isIconContainerClickable
                  })}
                  onClick={onIconClickCallback}
                  tabIndex={shouldFocusOnPrimaryIcon ? "0" : "-1"}
                  ariaLabel={primaryIconLabel}
                >
                  <Icon
                    icon={iconName}
                    className={cx(styles.icon)}
                    iconType="font"
                    iconSize={size === "small" ? "16px" : "18px"}
                  />
                </Clickable>
              </Tooltip>
            )}
            {secondaryIconName && (
              <Tooltip
                content={isSecondary ? secondaryTooltipContent : undefined}
                addKeyboardHideShowTriggersByDefault
                referenceWrapperClassName={styles.tooltipContainer}
              >
                <Clickable
                  className={cx(styles.iconContainer, {
                    [styles.iconContainerHasIcon]: hasIcon,
                    [styles.iconContainerActive]: isSecondary,
                    [styles.iconContainerClickable]: isIconContainerClickable
                  })}
                  onClick={onIconClickCallback}
                  tabIndex={shouldFocusOnSecondaryIcon ? "0" : "-1"}
                  data-testid={secondaryDataTestId || getTestId(ComponentDefaultTestId.TEXT_FIELD_SECONDARY_BUTTON, id)}
                  ariaLabel={secondaryIconLabel}
                >
                  <Icon
                    icon={secondaryIconName}
                    className={cx(styles.icon)}
                    iconType="font"
                    iconSize={size === "small" ? "16px" : "18px"}
                  />
                </Clickable>
              </Tooltip>
            )}
          </div>
          {shouldShowExtraText && (
            <Text type="text2" color="secondary" className={cx(styles.subTextContainer)}>
              {((validation && validation.text) || (isRequiredAndEmpty && requiredErrorText)) && (
                <span className={cx(styles.subTextContainerStatus)}>
                  {isRequiredAndEmpty ? requiredErrorText : validation.text}
                </span>
              )}
              {showCharCount && (
                <span className={cx(styles.counter)} aria-label={TextFieldAriaLabel.CHAR}>
                  {(inputValue && inputValue.length) || 0}
                  {typeof maxLength === "number" && `/${maxLength}`}
                  <HiddenText id={allowExceedingMaxLengthTextId} text={`Maximum of ${maxLength} characters`} />
                </span>
              )}
            </Text>
          )}
        </div>
      </div>
    );
  }
);

interface TextFieldStaticProps {
  sizes: typeof BASE_SIZES;
  types: typeof TextFieldTextTypeEnum;
  feedbacks: typeof TextFieldFeedbackStateEnum;
}

export default withStaticProps<TextFieldProps, TextFieldStaticProps, unknown>(TextField, {
  sizes: BASE_SIZES,
  feedbacks: TextFieldFeedbackStateEnum,
  types: TextFieldTextTypeEnum
});
