import cx from "classnames";
import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import Clickable from "../Clickable/Clickable";
import Text from "../Text/Text";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import Tooltip from "../Tooltip/Tooltip";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./RadioButton.module.scss";

export interface RadioButtonProps extends VibeComponentProps {
  /**
   * Class name applied to the label text.
   */
  labelClassName?: string;
  /**
   * Class name applied to the radio button element.
   */
  radioButtonClassName?: string;
  /**
   * The label text displayed next to the radio button.
   */
  text?: string;
  /**
   * The value associated with the radio button.
   */
  value?: string;
  /**
   * The name of the radio button group.
   */
  name?: string;
  /**
   * If true, the radio button automatically receives focus on mount.
   */
  autoFocus?: boolean;
  /**
   * If true, the radio button is disabled.
   */
  disabled?: boolean;
  /**
   * The reason why the radio button is disabled, displayed in a tooltip.
   */
  disabledReason?: string;
  /**
   * If true, the radio button is checked by default.
   */
  defaultChecked?: boolean;
  /**
   * The child elements inside the radio button.
   */
  children?: React.ReactNode;
  /**
   * Callback fired when the radio button selection changes.
   */
  onSelect?: (event: React.ChangeEvent<HTMLInputElement | null>) => void;
  /**
   * If provided, controls the checked state of the radio button.
   */
  checked?: boolean;
  /**
   * If true, clicking on children will trigger selection.
   */
  retainChildClick?: boolean;
  /**
   * The tab index applied to the children.
   */
  childrenTabIndex?: string;
  /**
   * If true, disables the label animation.
   */
  noLabelAnimation?: boolean;
}

const RadioButton: VibeComponent<RadioButtonProps, HTMLElement> & object = forwardRef(
  (
    {
      className,
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
    }: RadioButtonProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const inputRef = useRef<HTMLInputElement | null>();
    const mergedRef = useMergeRef(ref, inputRef);

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
          className={cx(styles.radioButton, className, {
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
              type="text2"
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
