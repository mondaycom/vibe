import React, { ChangeEvent, forwardRef, ReactElement, useMemo } from "react";
import cx from "classnames";
import useSwitch from "../../hooks/useSwitch";
import { VibeComponent, VibeComponentProps } from "../../types";
import { MockToggleProps } from "../Toggle/MockToggle";
import styles from "./Switch.module.scss";

export interface SwitchProps extends VibeComponentProps {
  /**
   * The name of the switch input.
   */
  name?: string;
  /**
   * The value associated with the switch.
   */
  value?: string;
  /**
   * The ARIA role of the switch.
   */
  role?: string;
  /**
   * If true, the switch is disabled.
   */
  disabled?: boolean;
  /**
   * The ARIA label for accessibility.
   */
  ariaLabel?: string;
  /**
   * The ID of the element labeling the switch.
   */
  ariaLabelledBy?: string;
  /**
   * If true, the switch is checked.
   */
  checked?: boolean;
  /**
   * Class name applied to the input element.
   */
  inputClassName?: string;
  /**
   * Callback fired when the switch state changes.
   */
  onChange?: (value: boolean, event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * The ID of the element controlled by the switch.
   */
  ariaControls?: string;
  /**
   * If true, the switch is checked by default.
   */
  defaultChecked?: boolean;
  /**
   * The child component rendered inside the switch.
   */
  children?: ReactElement<MockToggleProps>;
  /**
   * Class name applied to the wrapper element.
   */
  wrapperClassName?: string;
}

// TODO no story
export const Switch: VibeComponent<SwitchProps, HTMLInputElement> = forwardRef(
  (
    {
      id,
      name,
      value,
      role,
      disabled,
      ariaLabel,
      ariaLabelledBy,
      checked,
      inputClassName,
      onChange,
      ariaControls,
      defaultChecked,
      children: originalChildren,
      wrapperClassName,
      "data-testid": dataTestId
    }: SwitchProps,
    ref
  ) => {
    const { onChange: overrideOnChange, isChecked: overrideChecked } = useSwitch({
      isDisabled: disabled,
      isChecked: checked,
      defaultChecked,
      onChange
    });

    const children = useMemo(
      () =>
        React.cloneElement(originalChildren, {
          ...originalChildren?.props,
          checked: overrideChecked
        }),
      [originalChildren, overrideChecked]
    );

    return (
      <label htmlFor={id} className={wrapperClassName}>
        <input
          ref={ref}
          id={id}
          aria-controls={ariaControls}
          value={value}
          name={name}
          type="checkbox"
          className={cx(styles["hidden-switch"], inputClassName)}
          checked={overrideChecked}
          role={role ? role : "switch"}
          onChange={overrideOnChange}
          disabled={disabled}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-checked={overrideChecked}
          data-testid={dataTestId}
        />
        {children}
      </label>
    );
  }
);
