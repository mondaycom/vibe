import React, { FC, ReactElement, useMemo, useRef } from "react";
import cx from "classnames";
import useSwitch from "../../hooks/useSwitch";
import VibeComponentProps from "../../types/VibeComponentProps";
import { MockToggleProps } from "../Toggle/MockToggle";
import classes from "./Switch.module.scss";

interface SwitchProps extends VibeComponentProps {
  name?: string;
  value?: string;
  role?: string;
  disabled?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  checked?: boolean;
  inputClassName?: string;
  onChange?: (value: boolean) => void;
  ariaControls?: string;
  defaultChecked?: boolean;
  children?: ReactElement<MockToggleProps>;
  wrapperClassName?: string;
}

export const Switch: FC<SwitchProps> = ({
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
  wrapperClassName
}) => {
  const ref = useRef();
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
        className={cx(classes["hidden-switch"], inputClassName)}
        checked={overrideChecked}
        role={role ? role : "switch"}
        onChange={overrideOnChange}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-checked={overrideChecked}
      />
      {children}
    </label>
  );
};
