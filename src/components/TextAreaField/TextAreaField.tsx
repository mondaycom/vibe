import React, {forwardRef, useCallback, useEffect, useMemo, useRef} from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import {getTestId} from "../../tests/test-ids-utils";
import {ComponentDefaultTestId} from "../../tests/constants";
import styles from "./TextAreaField.module.scss";
import {NOOP} from "../../utils/function-utils";
import {
    FEEDBACK_CLASSES,
    TextAreaFieldAriaLabel
} from "./TextAreaFieldConstants";
import {backwardCompatibilityForProperties} from "../../helpers/backwardCompatibilityForProperties";
import useDebounceEvent from "../../hooks/useDebounceEvent";
import FieldLabel from "../FieldLabel/FieldLabel";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";

const EMPTY_OBJECT = {primary: "", secondary: "", layout: ""};

export interface TextAreaProps extends VibeComponentProps {
    placeholder?: string;
    /** See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete for all of the available options */
    autoComplete?: string;
    value?: string;
    rows?: number;
    cols?: number;
    minLength?: number;
    maxLength?: number;
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
    title?: string;
    validation?: { status?: "error" | "success"; text?: string };
    wrapperClassName?: string;
    /**  Icon names labels for a11y */
    labelIconName?: string | React.FunctionComponent | null;
    showCharCount?: boolean;
    inputAriaLabel?: string;
    activeDescendant?: string;
    iconsNames?: {
        layout: string;
        primary: string;
        secondary: string;
    };
    trim?: boolean;
    /** ARIA role for container landmark */
    role?: string;
    /** adds required to the input element */
    required?: boolean;
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
}

const TextAreaField: VibeComponent<TextAreaProps, HTMLElement> = forwardRef(
    ({
         className = "",
         placeholder = "",
         autoComplete = "off",
         value,
         rows = 0,
         cols = 0,
         minLength = 0,
         maxLength = 0,
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
         id = "input",
         title = "",
         validation = null,
         wrapperClassName = "",
         labelIconName = null,
         showCharCount = false,
         inputAriaLabel,
         activeDescendant = "",
         iconsNames = EMPTY_OBJECT,
         trim = false,
         role = "",
         required = false,
         loading = false,
         requiredAsterisk = false,
         "data-testid": dataTestId,
         secondaryDataTestId,
         tabIndex,
         name
     }, ref) => {
        const componentRef = useRef(null);
        const mergedRef = useMergeRef(ref, componentRef);

        const onChangeCallback = useCallback(
            (value: string) => {
                onChange(value, {target: componentRef.current});
            },
            [onChange]
        );

        const {inputValue, onEventChanged, clearValue} = useDebounceEvent({
            delay: debounceRate,
            onChange: onChangeCallback,
            initialStateValue: value,
            trim
        });

        const validationClass = useMemo(() => {
            if (!validation || !validation.status) {
                return "";
            }
            return FEEDBACK_CLASSES[validation.status];
        }, [validation]);

        console.log(validationClass)

        const shouldShowExtraText = showCharCount || (validation && validation.text);

        useEffect(() => {
            if (componentRef.current && autoFocus) {
                const animationFrame = requestAnimationFrame(() => componentRef.current.focus());
                return () => cancelAnimationFrame(animationFrame);
            }
        }, [componentRef, autoFocus]);

        const componentDataTestId = dataTestId || getTestId(ComponentDefaultTestId.TEXT_AREA, id);

        return (
            <div
                ref={mergedRef}
                className={cx(styles.textAreaField, wrapperClassName, {
                    [styles.disabled]: disabled,
                })}
                id={id}
                data-testid={componentDataTestId + "-wrapper"}
                role={role}
                aria-busy={loading}
            >
                <div className={cx(styles.labelWrapper)}>
                    <FieldLabel
                        labelText={title}
                        icon={labelIconName}
                        iconLabel={iconsNames.layout}
                        labelFor={id}
                        requiredAsterisk={requiredAsterisk}
                    />

                    <div className={cx(styles.textAreaInputWrapper, validationClass)}>
                        <textarea
                            className={cx(className, styles.textAreaInput)}
                            placeholder={placeholder}
                            autoComplete={autoComplete}
                            value={inputValue}
                            rows={rows}
                            cols={cols}
                            wrap="hard"
                            minLength={minLength}
                            maxLength={maxLength}
                            onChange={onEventChanged}
                            disabled={disabled}
                            readOnly={readonly}
                            ref={mergedRef}
                            id={id}
                            data-testid={componentDataTestId}
                            name={name}
                            onBlur={onBlur}
                            onFocus={onFocus}
                            onKeyDown={onKeyDown}
                            onWheel={onWheel}
                            aria-label={inputAriaLabel || placeholder}
                            aria-invalid={validation && validation.status === "error"}
                            aria-activedescendant={activeDescendant}
                            required={required}
                            tabIndex={tabIndex}

                        />
                        {loading && (
                            <div className={cx(styles.loaderContainer)}>
                                <div className={cx(styles.loader)}>
                                    <Loader className={cx(styles.loaderSvg)}/>
                                </div>
                            </div>
                        )}
                    </div>
                    {shouldShowExtraText && (
                        <Text type={Text.types.TEXT2} color={Text.colors.SECONDARY}
                              className={cx(styles.subTextContainer)}>
                            {validation && validation.text && (
                                <span className={cx(styles.subTextContainerStatus)}>{validation.text}</span>
                            )}
                            {showCharCount && (
                                <span className={cx(styles.counter)} aria-label={TextAreaFieldAriaLabel.CHAR}>
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

export default TextAreaField;
