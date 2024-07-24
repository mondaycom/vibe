import cx from "classnames";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
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
import useMergeRef from "../../hooks/useMergeRef";
import Clickable from "../../components/Clickable/Clickable";
import { getTestId } from "../../tests/test-ids-utils";
import { NOOP } from "../../utils/function-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { VibeComponentProps, VibeComponent, withStaticProps } from "../../types";
import styles from "./TextField.module.scss";
import { Tooltip } from "../Tooltip";

const EMPTY_OBJECT = { primary: "", secondary: "", layout: "" };

export interface TextFieldProps extends VibeComponentProps {
  placeholder?: string;
  /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete for all of the available options */
  autoComplete?: string;
  value?: string;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement> | Pick<React.ChangeEvent<HTMLInputElement>, "target">
  ) => void;
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
  /// TODO Remove layout in next major
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
  requiredErrorText?: string;
  /** shows loading animation */
  loading?: boolean;
  /**
   * @deprecated - use "data-testid" instead
   */
  dataTestId?: string;
  requiredAsterisk?: boolean; // TODO: Deprecate in next major version.
  secondaryDataTestId?: string;
  tabIndex?: number;
  name?: string;
  underline?: boolean;
  /**
   * Apply new style for read only, use along with `readonly` prop
   */
  withReadOnlyStyle?: boolean;
  /**
   * When true, component is controlled by an external state
   */
  controlled?: boolean;
  iconTooltipContent?: string;
  secondaryTooltipContent?: string;
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
      requiredErrorText = "",
      loading = false,
      requiredAsterisk = false,
      dataTestId: backwardCompatibilityDataTestId,
      "data-testid": dataTestId,
      secondaryDataTestId,
      tabIndex,
      underline = false,
      name,
      withReadOnlyStyle,
      controlled = false,
      iconTooltipContent,
      secondaryTooltipContent
    },
    ref
  ) => {
    const [isRequiredAndEmpty, setIsRequiredAndEmpty] = useState(false);

    const overrideDataTestId = backwardCompatibilityForProperties(
      [dataTestId, backwardCompatibilityDataTestId],
      getTestId(ComponentDefaultTestId.TEXT_FIELD, id)
    );
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
      if ((!validation || !validation.status) && !isRequiredAndEmpty) {
        return "";
      }
      const status = isRequiredAndEmpty ? "error" : validation.status;
      return FEEDBACK_CLASSES[status];
    }, [validation, isRequiredAndEmpty]);

    const hasIcon = iconName || secondaryIconName;
    const shouldShowExtraText = showCharCount || (validation && validation.text) || isRequiredAndEmpty;
    const isSecondary = secondaryIconName === currentStateIconName;
    const isPrimary = iconName === currentStateIconName;
    const shouldFocusOnPrimaryIcon =
      (onIconClick !== NOOP || iconsNames.primary || iconTooltipContent) && inputValue && iconName.length && isPrimary;
    const shouldFocusOnSecondaryIcon = (secondaryIconName || secondaryTooltipContent) && isSecondary && !!inputValue;

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
          <FieldLabel labelText={title} icon={labelIconName} labelFor={id} requiredAsterisk={requiredAsterisk} />
          <div className={cx(styles.inputWrapper, SIZE_MAPPER[getActualSize(size)], validationClass)}>
            {/*Programatical input (tabIndex={-1}) is working fine with aria-activedescendant attribute despite the rule*/}
            {/*eslint-disable-next-line jsx-a11y/aria-activedescendant-has-tabindex*/}
            <input
              className={cx(className, styles.input, {
                [styles.inputHasIcon]: !!hasIcon,
                [styles.readOnly]: readonly,
                // TODO: use `readonly` prop next major instead of withReadOnlyStyle
                [styles.withReadOnlyStyle]: withReadOnlyStyle
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
              data-testid={overrideDataTestId}
              name={name}
              onBlur={onBlurCallback}
              onFocus={onFocus}
              onKeyDown={onKeyDown}
              onWheel={onWheel}
              maxLength={maxLength}
              role={searchResultsContainerId && "combobox"} // For voice reader
              aria-label={inputAriaLabel || placeholder}
              aria-invalid={(validation && validation.status === "error") || isRequiredAndEmpty}
              aria-owns={searchResultsContainerId}
              aria-activedescendant={activeDescendant}
              aria-required={required}
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
            <Tooltip
              content={isPrimary ? iconTooltipContent : undefined}
              addKeyboardHideShowTriggersByDefault
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
                  clickable={false}
                  iconType={Icon.type.ICON_FONT}
                  iconSize={size === TextField.sizes.SMALL ? "16px" : "18px"}
                />
              </Clickable>
            </Tooltip>
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
                  clickable={false}
                  iconType={Icon.type.ICON_FONT}
                  iconSize={size === TextField.sizes.SMALL ? "16px" : "18px"}
                />
              </Clickable>
            </Tooltip>
          </div>
          {shouldShowExtraText && (
            <Text type={Text.types.TEXT2} color={Text.colors.SECONDARY} className={cx(styles.subTextContainer)}>
              {validation && validation.text && (
                <span className={cx(styles.subTextContainerStatus)}>
                  {isRequiredAndEmpty ? requiredErrorText : validation.text}
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
