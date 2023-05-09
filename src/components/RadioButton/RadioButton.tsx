import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Clickable from "../Clickable/Clickable";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { baseClassName } from "./RadioButtonConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import Tooltip from "../Tooltip/Tooltip";
import "./RadioButton.scss";

interface RadioButtonProps extends VibeComponentProps {
  /**  class to be added to wrapping component */
  className?: string;
  /** deprecated */
  componentClassName?: string;
  /** class to add to the  text/label */
  labelClassName?: string;
  /** class to be added to the radiobutton */
  radioButtonClassName?: string;
  /** text value */
  text?: string;
  /** The input control's value. When specified in the HTML, this is the initial value, and from then on it can be altered or retrieved at any time using JavaScript to access the respective HTMLInputElement object's value property. The value attribute is always optional, though should be considered mandatory for checkbox, radio, and hidden.l */
  value?: string;
  /** A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted. */
  name?: string;
  /** is disabled */
  disabled?: boolean;
  /** why the input is disabled */
  disabledReason?: string;
  /** default checked value*/
  defaultChecked?: boolean;
  children?: React.ReactNode;
  /** callback function when value changed */
  onSelect?: (event: React.ChangeEvent<HTMLInputElement | null>) => void;
  /** controlled parameter */
  checked?: boolean;
  /** react to click on children */
  retainChildClick?: boolean;
  /** add tab index to the children */
  childrenTabIndex?: string;
  /** disabled animation */
  noLabelAnimation?: boolean;
}

const RadioButton: VibeComponent<RadioButtonProps, HTMLElement> & object = forwardRef(
  (
    {
      className,
      // Backward compatibility for props naming
      componentClassName,
      text = "",
      value = "",
      name = "",
      /**
       * Radio button label class name
       */
      labelClassName,
      /**
       * Radio button marker class name
       */
      radioButtonClassName,
      disabled = false,
      disabledReason,
      defaultChecked = false,
      children,
      onSelect,
      checked,
      retainChildClick = true,
      childrenTabIndex = "0",
      noLabelAnimation = false
    },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const inputRef = useRef<HTMLInputElement | null>();
    const mergedRef = useMergeRefs({ refs: [ref, inputRef] });
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
    const onChildClick = useCallback(() => {
      if (disabled || !retainChildClick) return;
      if (inputRef.current) {
        inputRef.current.checked = true;
      }
      if (onSelect) {
        onSelect(null);
      }
    }, [onSelect, inputRef, disabled, retainChildClick]);

    const checkedProps = useMemo(() => {
      if (checked !== undefined) {
        return { checked };
      }
      return { defaultChecked };
    }, [checked, defaultChecked]);

    const tooltipContent = disabled ? disabledReason : null;

    return (
      <Tooltip content={tooltipContent}>
        <label className={cx(baseClassName, overrideClassName, { disabled })}>
          <span className={`${baseClassName}__radio-input-container`}>
            <input
              className={`${baseClassName}__radio-input-container__radio-input`}
              type="radio"
              value={value}
              name={name}
              disabled={disabled}
              {...checkedProps}
              onChange={onSelect}
              ref={mergedRef}
            />
            <span
              className={cx(`${baseClassName}__radio-input-container__radio-control`, radioButtonClassName, {
                [`${baseClassName}__radio-input-container__radio-control--label-animation`]: !noLabelAnimation
              })}
            />
          </span>
          {text && <span className={cx(`${baseClassName}__radio-label`, labelClassName)}>{text}</span>}
          {children && (
            <Clickable className="radio-children-wrapper" onClick={onChildClick} tabIndex={childrenTabIndex}>
              {children}
            </Clickable>
          )}
        </label>
      </Tooltip>
    );
  }
);

export default RadioButton;
