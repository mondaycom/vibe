import React, { ComponentType, forwardRef, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import styles from "./EditableTypography.module.scss";
import { keyCodes } from "../../constants";
import { useKeyboardButtonPressedFunc } from "../../hooks/useKeyboardButtonPressedFunc";
import { useIsOverflowing } from "../../hooks";
import { m as motion, LazyMotion, domAnimation } from "framer-motion";
import { HeadingProps } from "../Heading/Heading";
import { TextProps } from "../Text/Text";

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
  /** Controles the state of the component (i.e. view/edit mode) */
  isEditMode?: boolean;
}

interface EditableTypographyProps extends VibeComponentProps, EditableTypographyImplementationProps {
  /** A typography component that is being rendered in view mode */
  component: ComponentType<HeadingProps | TextProps>;
  /** Controls the style of the typography component in view mode */
  typographyClassName: string;
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
      typographyClassName,
      component: TypographyComponent,
      isEditMode
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const [isEditing, setIsEditing] = useState(isEditMode || false);
    const [inputValue, setInputValue] = useState(value);
    const [inputWidth, setInputWidth] = useState(0);

    const inputRef = useRef(null);
    const typographyRef = useRef(null);

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
      setIsEditing(true);
    }

    function handleInputValueChange() {
      if (!isEditMode) {
        setIsEditing(false);
      }

      if (!inputValue || value === inputValue) {
        setInputValue(value);
        return;
      }
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
        setIsEditing(false);
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

    const AnimatedTypography = motion(TypographyComponent);
    const isOverflowing = useIsOverflowing({ ref: typographyRef, ignoreHeightOverflow: true });
    const shouldAnimate = useMemo(() => isOverflowing && !isEditing, [isEditing, isOverflowing]);

    useLayoutEffect(() => {
      if (!typographyRef.current) {
        return;
      }
      const { width } = typographyRef.current.getBoundingClientRect();
      setInputWidth(width);
    }, [inputValue, isEditing]);

    return (
      <LazyMotion features={domAnimation}>
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
            <motion.input
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
          <AnimatedTypography
            ref={typographyRef}
            aria-hidden={isEditing}
            className={cx(styles.typography, typographyClassName, {
              [styles.hidden]: isEditing,
              [styles.disabled]: readOnly
            })}
            initial={shouldAnimate && { x: "-50%" }}
            animate={shouldAnimate && { x: 0 }}
            transition={{ duration: 0.1 }}
            tabIndex={0}
          >
            {inputValue || placeholder}
          </AnimatedTypography>
        </div>
      </LazyMotion>
    );
  }
);

export default EditableTypography;
