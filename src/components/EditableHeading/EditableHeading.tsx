import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import Heading from "../Heading/Heading";
import { withStaticProps } from "../../types";
import styles from "./EditableHeading.module.scss";
import { HeadingType, HeadingWeight } from "../Heading/HeadingConstants";
import cx from "classnames";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";
import HiddenInputPlaceholder from "./HiddenInputPlaceholder";
import { keyCodes } from "../../constants";
import useMergeRefs from "../../hooks/useMergeRefs";
import useClickableProps from "../../hooks/useClickableProps/useClickableProps";

export interface EditableHeadingProps extends VibeComponentProps {
  /** Value of the text */
  value: string;
  /**
   * Sets the Heading type
   * @type {HeadingType}
   * */
  type?: HeadingType;
  /** Sets the Heading weight
   * @type {HeadingWeight}
   */
  weight?: HeadingWeight;
  /** Will be called whenever the current value changes to a non-empty value */
  onChange?: (value: string) => void;
  /** Disables editing mode - component will be just a <Heading /> */
  readOnly?: boolean;
  /** Shown in edit mode when the text value is empty */
  placeholder?: string;
  /** ARIA Label */
  ariaLabel?: string;
}

const EditableHeading: React.FC<EditableHeadingProps> & {
  types?: typeof Heading.types;
  weights?: typeof Heading.weights;
} = forwardRef(
  (
    {
      id,
      className,
      "data-testid": dataTestId,
      value,
      type = Heading.types.H1,
      weight = Heading.weights.NORMAL,
      onChange,
      readOnly = false,
      ariaLabel = "",
      placeholder
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

    const inputClassNames = useMemo(() => {
      return cx(styles.input, getStyle(styles, camelCase(type + "-" + weight)));
    }, [type, weight]);

    return (
      <div
        ref={mergedRef}
        id={id}
        aria-label={ariaLabel}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.EDITABLE_HEADING, id)}
        className={cx(styles.editableHeading, className)}
      >
        {isEditing && !readOnly ? (
          <>
            <HiddenInputPlaceholder
              className={inputClassNames}
              value={inputValue || placeholder}
              onChange={setInputWidth}
            />
            <input
              ref={inputRef}
              className={inputClassNames}
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
          <Heading
            {...clickableProps}
            className={cx(styles.heading, { [styles.disabled]: readOnly })}
            type={type}
            weight={weight}
          >
            {inputValue}
          </Heading>
        )}
      </div>
    );
  }
);

export default withStaticProps(EditableHeading, {
  types: HeadingType,
  weights: HeadingWeight
});
