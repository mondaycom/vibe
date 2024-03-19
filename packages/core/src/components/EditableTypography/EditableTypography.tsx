import React, { ElementType, forwardRef, useEffect, useRef, useState } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import styles from "./EditableTypography.module.scss";
import { keyCodes } from "../../constants";
import { useKeyboardButtonPressedFunc } from "../../hooks/useKeyboardButtonPressedFunc";
import { TooltipProps } from "../Tooltip/Tooltip";
import usePrevious from "../../hooks/usePrevious";
import { TextType, TextWeight } from "../Text/TextConstants";
import { HeadingType, HeadingWeight } from "../Heading/HeadingConstants";

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
      onEditModeChange,
      tooltipProps,
      type,
      weight
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const [isEditing, setIsEditing] = useState(isEditMode || false);
    const [inputValue, setInputValue] = useState(value);
    const [inputWidth, setInputWidth] = useState(0);

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

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
      if (event.key === keyCodes.ENTER) {
        handleInputValueChange();
      }
      if (event.key === keyCodes.ESCAPE) {
        handleEditModeChange(false);
        setInputValue(value);
      }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      setInputValue(event.target.value);
    }

    const toggleKeyboardEditMode = useKeyboardButtonPressedFunc(toggleEditMode);

    function focus() {
      if (inputRef.current) {
        inputRef.current?.focus();
      }
    }

    useEffect(() => {
      if (isEditing) {
        focus();
      }
    }, [isEditing]);

    useEffect(() => {
      if (!typographyRef.current) {
        return;
      }
      const { width } = typographyRef.current.getBoundingClientRect();
      setInputWidth(width);
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
        {isEditing && (
          <input
            ref={inputRef}
            className={cx(styles.input, typographyClassName)}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            aria-label={ariaLabel}
            placeholder={placeholder}
            style={{ width: inputWidth }}
            role="input"
          />
        )}
        <TypographyComponent
          ref={typographyRef}
          aria-hidden={isEditing}
          className={cx(styles.typography, typographyClassName, {
            [styles.hidden]: isEditing,
            [styles.disabled]: readOnly,
            [styles.placeholder]: !inputValue && placeholder
          })}
          tabIndex={0}
          tooltipProps={tooltipProps}
          weight={weight}
          type={type}
        >
          {inputValue || placeholder}
        </TypographyComponent>
      </div>
    );
  }
);

export default EditableTypography;
