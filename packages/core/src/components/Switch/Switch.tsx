import React, { ChangeEvent, forwardRef, ReactElement, useMemo } from "react";
import cx from "classnames";
import useSwitch from "../../hooks/useSwitch";
import { VibeComponent, VibeComponentProps } from "../../types";
import { MockToggleProps } from "../Toggle/MockToggle";
import styles from "./Switch.module.scss";

export interface SwitchProps extends VibeComponentProps {
  name?: string;
  value?: string;
  role?: string;
  disabled?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  checked?: boolean;
  inputClassName?: string;
  onChange?: (value: boolean, event: ChangeEvent<HTMLInputElement>) => void;
  ariaControls?: string;
  defaultChecked?: boolean;
  children?: ReactElement<MockToggleProps>;
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
    },
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
