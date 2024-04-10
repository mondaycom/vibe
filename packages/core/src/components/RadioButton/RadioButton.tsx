import cx from "classnames";
import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import Clickable from "../Clickable/Clickable";
import Text from "../Text/Text";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import Tooltip from "../Tooltip/Tooltip";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./RadioButton.module.scss";

export interface RadioButtonProps extends VibeComponentProps {
  /**  class to be added to wrapping component */
  className?: string;
  /**
   * @deprecated - use className instead
   */
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
  /** is autoFocus */
  autoFocus?: boolean;
  /** is disabled */
  disabled?: boolean;
  /** why the input is disabled */
  disabledReason?: string;
  /** default checked value*/
  defaultChecked?: boolean;
  children?: React.ReactNode;
  /** callback function when value changed */
  onSelect?: (event: React.ChangeEvent<HTMLInputElement | null>) => void;
  /** controlled the radio button state */
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
      autoFocus,
      disabledReason,
      defaultChecked = false,
      children,
      onSelect,
      checked,
      retainChildClick = true,
      childrenTabIndex = "0",
      noLabelAnimation = false,
      id,
      "data-testid": dataTestId
    },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const inputRef = useRef<HTMLInputElement | null>();
    const mergedRef = useMergeRef(ref, inputRef);
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
        <label
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.RADIO_BUTTON, id)}
          className={cx(styles.radioButton, overrideClassName, {
            [styles.disabled]: disabled,
            disabled: disabled
          })}
        >
          <span className={cx(styles.inputContainer)}>
            <input
              className={cx(styles.input)}
              type="radio"
              value={value}
              name={name}
              autoFocus={autoFocus}
              disabled={disabled}
              {...checkedProps}
              onChange={onSelect}
              ref={mergedRef}
            />
            <span
              data-testid={getTestId(ComponentDefaultTestId.RADIO_BUTTON_CONTROL, id)}
              className={cx(styles.control, radioButtonClassName, {
                [styles.labelAnimation]: !noLabelAnimation
              })}
            />
          </span>
          {text && (
            <Text
              element="span"
              type={Text.types.TEXT2}
              className={labelClassName}
              data-testid={getTestId(ComponentDefaultTestId.RADIO_BUTTON_LABEL, id)}
            >
              {text}
            </Text>
          )}
          {children && (
            <Clickable onClick={onChildClick} tabIndex={childrenTabIndex}>
              {children}
            </Clickable>
          )}
        </label>
      </Tooltip>
    );
  }
);

export default RadioButton;
