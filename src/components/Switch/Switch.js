import React, { useMemo, useRef } from "react";
import cx from "classnames";
import { useSwitchChecked } from "../../components/Switch/hooks/useSwitchChecked";
import classes from "./Switch.module.scss";

export const Switch = ({
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
  const { onChange: overrideOnChange, checked: overrideChecked } = useSwitchChecked({
    checked,
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
