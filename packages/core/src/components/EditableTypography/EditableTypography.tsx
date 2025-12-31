import React, { type ElementType, forwardRef, useEffect, useRef, useState } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import { type VibeComponentProps } from "../../types";
import styles from "./EditableTypography.module.scss";
import { keyCodes } from "../../constants";
import { useKeyboardButtonPressedFunc } from "@vibe/shared";
import { type TooltipProps } from "@vibe/tooltip";
import usePrevious from "../../hooks/usePrevious";
import { type TextType, type TextWeight } from "@vibe/typography";
import { type HeadingType, type HeadingWeight } from "../Heading";
import useIsomorphicLayoutEffect from "../../hooks/ssr/useIsomorphicLayoutEffect";

export interface EditableTypographyImplementationProps {
  /**
   * The current value of the text.
   */
  value: string;
  /**
   * Callback fired when the value changes.
   */
  onChange?: (value: string) => void;
  /**
   * Callback fired when the component is clicked.
   */
  onClick?: (event: React.KeyboardEvent | React.MouseEvent) => void;
  /**
   * Callback fired when a key is pressed inside the input/textarea element.
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /**
   * If true, the text is read-only and cannot be edited.
   */
  readOnly?: boolean;
  /**
   * Placeholder text displayed when the value is empty.
   */
  placeholder?: string;
  /**
   * The label of the component for accessibility.
   */
  ariaLabel?: string;
  /**
   * Controls whether the component is in edit mode.
   */
  isEditMode?: boolean;
  /**
   * If true, automatically selects all text when entering edit mode.
   */
  autoSelectTextOnEditMode?: boolean;
  /**
   * Callback fired when the edit mode changes.
   */
  onEditModeChange?: (isEditMode: boolean) => void;
  /**
   * Props to customize the tooltip.
   */
  tooltipProps?: Partial<TooltipProps>;
}

export interface EditableTypographyProps extends VibeComponentProps, EditableTypographyImplementationProps {
  /**
   * The typography component used in view mode.
   */
  component: ElementType;
  /**
   * Class name applied to the typography component.
   */
  typographyClassName: string;
  /**
   * If true, shows the placeholder when empty.
   */
  clearable?: boolean;
  /**
   * The text or heading type.
   */
  type?: TextType | HeadingType;
  /**
   * The text or heading weight.
   */
  weight?: TextWeight | HeadingWeight;
  /**
   * If true, enables multi-line editing.
   */
  multiline?: boolean;
}

const PADDING_OFFSET = 2;

const EditableTypography = forwardRef(
  (
    {
      id,
      className,
      "data-testid": dataTestId,
      value,
      onChange,
      onClick,
      onKeyDown,
      readOnly = false,
      ariaLabel = "",
      placeholder,
      clearable,
      typographyClassName,
      component: TypographyComponent,
      isEditMode,
      autoSelectTextOnEditMode,
      onEditModeChange,
      tooltipProps,
      type,
      weight,
      multiline = false
    }: EditableTypographyProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const [isEditing, setIsEditing] = useState(isEditMode || false);
    const [inputValue, setInputValue] = useState(value);

    const prevValue = usePrevious(value);

    const inputRef = useRef(null);
    const typographyRef = useRef(null);

    useEffect(() => {
      if (!isEditing && value !== prevValue && value !== inputValue) {
        setInputValue(value);
      }
    }, [prevValue, isEditing, value, inputValue]);

    useEffect(() => {
      setIsEditing(isEditMode);
    }, [isEditMode]);

    function onTypographyClick(event: React.KeyboardEvent | React.MouseEvent) {
      onClick?.(event);
      toggleEditMode(event);
    }

    function toggleEditMode(event: React.KeyboardEvent | React.MouseEvent) {
      if (readOnly || isEditing) {
        return;
      }
      event.preventDefault();
      handleEditModeChange(true);
    }

    function handleEditModeChange(value: boolean) {
      onEditModeChange?.(value);
      setIsEditing(value);
    }

    function handleInputValueChange() {
      handleEditModeChange(false);

      if (value === inputValue) {
        return;
      }

      const shouldShowPlaceholderWhenEmpty = clearable && placeholder;
      if (!inputValue && !shouldShowPlaceholderWhenEmpty) {
        setInputValue(value);
        return;
      }
      setInputValue(inputValue);
      onChange?.(inputValue);
    }

    function handleBlur() {
      handleInputValueChange();
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
      if (event.nativeEvent.isComposing) {
        return;
      }

      if (event.key === keyCodes.ENTER) {
        if (multiline && event.shiftKey) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        handleInputValueChange();
      }
      if (event.key === keyCodes.ESCAPE) {
        event.preventDefault();
        event.stopPropagation();
        handleEditModeChange(false);
        setInputValue(value);
      }

      onKeyDown?.(event);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      setInputValue(event.target.value);
    }

    const toggleKeyboardEditMode = useKeyboardButtonPressedFunc(toggleEditMode);

    function focus() {
      inputRef.current?.focus?.();

      if (inputRef.current) {
        const inputElement = inputRef.current as HTMLInputElement | HTMLTextAreaElement;
        const textLength = inputElement.value.length;
        inputElement.setSelectionRange(textLength, textLength);
      }
    }

    function selectAllInputText() {
      inputRef.current?.select?.();
    }

    useEffect(() => {
      if (!isEditing) return;
      focus();
      if (autoSelectTextOnEditMode) {
        selectAllInputText();
      }
    }, [autoSelectTextOnEditMode, isEditing]);

    useIsomorphicLayoutEffect(() => {
      if (!typographyRef.current) {
        return;
      }

      const { width } = typographyRef.current.getBoundingClientRect();
      inputRef?.current?.style.setProperty("--input-width", `${width}px`);

      if (multiline) {
        const textareaElement = inputRef?.current as HTMLTextAreaElement;
        textareaElement?.style.setProperty("--input-height", "auto");
        textareaElement?.style.setProperty("--input-height", `${textareaElement.scrollHeight + PADDING_OFFSET}px`);
      }
    }, [inputValue, isEditing]);

    return (
      <div
        ref={mergedRef}
        id={id}
        aria-label={ariaLabel}
        data-testid={dataTestId}
        className={cx(styles.editableTypography, className)}
        role={isEditing ? null : "button"}
        onClick={onTypographyClick}
        onKeyDown={toggleKeyboardEditMode}
      >
        {isEditing &&
          (multiline ? (
            <textarea
              ref={inputRef}
              className={cx(styles.textarea, typographyClassName)}
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              aria-label={ariaLabel}
              placeholder={placeholder}
              role="textbox"
              rows={1}
            />
          ) : (
            <input
              ref={inputRef}
              className={cx(styles.input, typographyClassName)}
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              aria-label={ariaLabel}
              placeholder={placeholder}
              role="input"
            />
          ))}
        <TypographyComponent
          ref={typographyRef}
          aria-hidden={isEditing}
          className={cx(styles.typography, typographyClassName, {
            [styles.hidden]: isEditing,
            [styles.disabled]: readOnly,
            [styles.placeholder]: !inputValue && placeholder,
            [styles.multiline]: !isEditing && multiline
          })}
          tabIndex={0}
          tooltipProps={tooltipProps}
          weight={weight}
          type={type}
          ellipsis={!multiline}
        >
          {inputValue || placeholder}
        </TypographyComponent>
      </div>
    );
  }
);

export default EditableTypography;
