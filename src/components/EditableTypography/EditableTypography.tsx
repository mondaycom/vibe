import React, { ReactNode, forwardRef, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { useMergeRefs } from "../../hooks";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import styles from "./EditableTypography.module.scss";
import HiddenInputPlaceholder from "./HiddenInputPlaceholder";
import { keyCodes } from "../../constants";
import useClickableProps from "../../hooks/useClickableProps/useClickableProps";

export interface EditableTypographyImplementationProps {
  /** Value of the text */
  value: string;
  /** Will be called whenever the current value changes to a non-empty value */
  onChange?: (value: string) => void;
  /** Disables editing mode - component will be just a <Heading /> */
  readOnly?: boolean;
  /** Shown in edit mode when the text value is empty */
  placeholder?: string;
  /** ARIA Label */
  ariaLabel?: string;
}

interface EditableTypographyProps extends VibeComponentProps, EditableTypographyImplementationProps {
  /** A typography component that is being rendered in view mode */
  renderTypography: ({ value, className }: { value: string; className: string }) => ReactNode;
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
      readOnly = false,
      ariaLabel = "",
      placeholder,
      typographyClassName,
      renderTypography
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [inputWidth, setInputWidth] = useState(0);

    const inputRef = useRef(null);

    function toggleEditMode() {
      if (readOnly || isEditing) {
        return;
      }

      setIsEditing(true);
    }

    function handleInputValueChange() {
      setIsEditing(false);
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

    const clickableProps = useClickableProps(
      {
        onClick: toggleEditMode,
        id,
        role: "button"
      },
      mergedRef
    );

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

    return (
      <div
        ref={mergedRef}
        id={id}
        aria-label={ariaLabel}
        data-testid={dataTestId}
        className={cx(styles.editableTypography, className)}
      >
        {isEditing && !readOnly ? (
          <>
            <HiddenInputPlaceholder
              className={cx(styles.input, typographyClassName)}
              value={inputValue || placeholder}
              onChange={setInputWidth}
            />
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
          </>
        ) : (
          renderTypography({ value: inputValue, className: styles.typograpy, ...clickableProps })
        )}
      </div>
    );
  }
);

export default EditableTypography;
