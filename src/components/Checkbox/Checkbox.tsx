import React, { forwardRef, useCallback, useEffect, useMemo, useRef } from "react";
import { isNil, noop as NOOP } from "lodash-es";
import cx from "classnames";
import Icon from "../Icon/Icon";
import Check from "../Icon/Icons/components/Check";
import Remove from "../Icon/Icons/components/Remove";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { useSupportFirefoxLabelClick } from "./hooks/useSupportFirefoxLabelClick";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./Checkbox.scss";
import { VibeComponentProps } from "../../types";

export interface CheckBoxProps extends VibeComponentProps {
  /** A classname to be added to the wrapping element */
  className?: string;
  // Backward compatibility for props naming
  /** deprecated */
  componentClassName?: string;
  /** A classname to be added to the cehckbox element label */
  checkboxClassName?: string;
  /** A classname to be added to the label element */
  labelClassName?: string;
  /** A11y prop to describe the content for screen readers */
  ariaLabel?: string;
  /** The content to be rendered within the option */
  label?: React.ReactNode | Array<React.ReactNode>;
  /** A11y prop - An Id of an element which describes this option  */
  ariaLabelledBy?: string;
  /** callback function when the value changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Use this when you want to control the component, this will set the state of the component  */
  checked?: boolean;
  /** An in between state to display a non selected */
  indeterminate?: boolean;
  /** Set the option to be disabled */
  disabled?: boolean;
  /** the default value which the checkbox will start from  */
  defaultChecked?: boolean;
  /** The input control's value. When specified in the HTML, this is the initial value, and from then on it can be altered or retrieved at any time using JavaScript to access the respective HTMLInputElement object's value property. The value attribute is always optional, though should be considered mandatory for checkbox, radio, and hidden.l */
  value?: string;
  /** A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted. */
  name?: string;
  /** An id to be added the input element */
  id?: string;
}

const BASE_CLASS_NAME = "monday-style-checkbox";

const Checkbox: React.FC<CheckBoxProps> = forwardRef(
  (
    {
      className,
      // Backward compatibility for props naming
      componentClassName,
      checkboxClassName,
      labelClassName,
      ariaLabel,
      label,
      ariaLabelledBy,
      onChange = NOOP,
      checked,
      indeterminate = false,
      disabled = false,
      defaultChecked,
      value = "",
      name = "",
      id
    },
    ref
  ) => {
    const iconContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedInputRef = useMergeRefs({ refs: [ref, inputRef] });
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
    const onMouseUpCallback = useCallback(() => {
      const input = inputRef.current;
      if (!input) return;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          input.blur();
        });
      });
    }, [inputRef]);

    const checkboxClassNames = [
      `${BASE_CLASS_NAME}__checkbox`,
      `${BASE_CLASS_NAME}__prevent-animation`,
      checkboxClassName
    ];
    let overrideDefaultChecked = defaultChecked;

    // If component did not receive default checked and checked props, choose default checked as
    // default behavior (handle isChecked logic inside input) and set default value
    if (isNil(overrideDefaultChecked) && isNil(checked)) {
      overrideDefaultChecked = false;
    }

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [inputRef, indeterminate]);

    const { onClickCapture: onClickCaptureLabel } = useSupportFirefoxLabelClick({ inputRef });

    const finalAriaLabel = useMemo(() => {
      if (ariaLabel) return ariaLabel;
      if (typeof label === "string") return label;
      return "";
    }, [ariaLabel, label]);

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <label
        className={cx(BASE_CLASS_NAME, overrideClassName, { [`${BASE_CLASS_NAME}__disabled`]: disabled })}
        onMouseUp={onMouseUpCallback}
        htmlFor={id}
        onClickCapture={onClickCaptureLabel}
      >
        <input
          ref={mergedInputRef}
          id={id}
          className={`${BASE_CLASS_NAME}__input`}
          value={value}
          name={name}
          type="checkbox"
          onChange={onChange}
          defaultChecked={overrideDefaultChecked}
          disabled={disabled}
          aria-label={finalAriaLabel}
          aria-labelledby={ariaLabelledBy}
          checked={checked}
        />
        <div className={cx(...checkboxClassNames)} ref={iconContainerRef}>
          <Icon
            className={`${BASE_CLASS_NAME}__icon`}
            iconType={Icon.type.SVG}
            icon={indeterminate ? Remove : Check}
            ignoreFocusStyle
            clickable={false}
            ariaHidden={true}
            iconSize="16"
          />
        </div>
        {label === false ? null : <span className={cx(`${BASE_CLASS_NAME}__label`, labelClassName)}>{label}</span>}
      </label>
    );
  }
);

export default Checkbox;
