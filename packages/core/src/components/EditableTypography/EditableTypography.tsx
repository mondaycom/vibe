import React, { ElementType, forwardRef, useEffect, useRef, useState, useLayoutEffect } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import styles from "./EditableTypography.module.scss";
import { keyCodes } from "../../constants";
import { useKeyboardButtonPressedFunc } from "../../hooks/useKeyboardButtonPressedFunc";
import { TooltipProps } from "../Tooltip/Tooltip";
import usePrevious from "../../hooks/usePrevious";
import { TextType, TextWeight } from "../Text/Text.types";
import { HeadingType, HeadingWeight } from "../Heading/Heading.types";

export interface EditableTypographyImplementationProps {
  /** Value of the text */
  value: string;
  /** Will be called whenever the current value changes to a non-empty value */
  onChange?: (value: string) => void;
  /** Will be called whenever the component gets clicked */
  onClick?: (event: React.KeyboardEvent | React.MouseEvent) => void;
  /** Disables editing mode - component will be just a typography element */
  readOnly?: boolean;
  /** Shown in edit mode when the text value is empty */
  placeholder?: string;
  /** ARIA Label */
  ariaLabel?: string;
  /** Controls the mode of the component (i.e. view/edit mode) */
  isEditMode?: boolean;
  /** If true, automatically select all text when entering edit mode */
  autoSelectTextOnEditMode?: boolean;
  /** Will be called when the mode of the component changes */
  onEditModeChange?: (isEditMode: boolean) => void;
  /** Override Tooltip props when needed */
  tooltipProps?: Partial<TooltipProps>;
}

export interface EditableTypographyProps extends VibeComponentProps, EditableTypographyImplementationProps {
  /** A typography component that is being rendered in view mode */
  component: ElementType;
  /** Controls the style of the typography component in view mode */
  typographyClassName: string;
  /** Shows placeholder when empty, if provided */
  clearable?: boolean;
  /** Sets the Text/Heading type */
  type?: TextType | HeadingType;
  /** Sets the Text/Heading weight */
  weight?: TextWeight | HeadingWeight;
  /** Controls whether a textarea or a simple input would be rendered, allowing multi-lines */
  multiline?: boolean;
}

const EditableTypography: VibeComponent<EditableTypographyProps, HTMLElement> = forwardRef(
  (
    {
      id,
      className,
      "data-testid": dataTestId,
      value,
      onChange,
      onClick,
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
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const [isEditing, setIsEditing] = useState(isEditMode || false);
    const [inputValue, setInputValue] = useState(value);
    const textareaBorderBoxSizing = useRef(0);
    const textareaLineHeight = useRef(0);

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
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      setInputValue(event.target.value);

      if (multiline) {
        resizeTextarea();
      }
    }

    const toggleKeyboardEditMode = useKeyboardButtonPressedFunc(toggleEditMode);

    function focus() {
      inputRef.current?.focus?.();

      if (inputRef.current) {
        const inputElement = inputRef.current as HTMLInputElement | HTMLTextAreaElement;
        const textLength = inputElement.value.length;
        inputElement.setSelectionRange(textLength, textLength);
      }

      if (multiline) {
        calculateTextareaHeightAttrs();
      }
    }

    /* Dynamically resizes the textarea to fit its content */
    function resizeTextarea() {
      if (inputRef.current) {
        // Temporarily set the height to "auto" to accurately measure the scroll height of the content inside the textarea.
        inputRef.current?.style.setProperty("--input-height", "auto");

        requestAnimationFrame(() => {
          const textarea = inputRef.current as HTMLTextAreaElement;

          if (!textarea) {
            return;
          }

          // Ensure we at least have 1 line
          const height = Math.max(
            textarea.scrollHeight + textareaBorderBoxSizing.current,
            textareaLineHeight.current + textareaBorderBoxSizing.current
          );
          inputRef.current?.style.setProperty("--input-height", `${height}px`);
        });
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

    useLayoutEffect(() => {
      if (!typographyRef.current) {
        return;
      }

      const { width } = typographyRef.current.getBoundingClientRect();
      inputRef?.current?.style.setProperty("--input-width", `${width}px`);
    }, [inputValue, isEditing]);

    /* Calculate the minimual textarea height, taking its applied styles (padding, border width) into consideration 
       This is done only on focus, so that we don't need to get the computed style every time.
    */
    function calculateTextareaHeightAttrs() {
      if (multiline && inputRef.current) {
        const textarea = inputRef.current as HTMLTextAreaElement;

        if (!textarea) {
          return;
        }

        const computedStyle = window.getComputedStyle(textarea);

        // Calculate the appropriate height by taking into account the scrollable content inside the textarea,
        // as well as the styles applied to it, such as padding and border widths.
        const lineHeight = parseFloat(computedStyle.lineHeight) || 16;
        const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
        const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0;
        const borderTopWidth = parseFloat(computedStyle.borderTopWidth) || 0;
        const borderBottomWidth = parseFloat(computedStyle.borderBottomWidth) || 0;

        textareaLineHeight.current = lineHeight;
        textareaBorderBoxSizing.current = paddingTop + paddingBottom + borderTopWidth + borderBottomWidth;
        resizeTextarea();
      }
    }

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
