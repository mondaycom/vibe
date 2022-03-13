import React, { useCallback, useMemo, useState } from "react";
import classes from "./Switch.module.scss";
import cx from "classnames";
import isNil from "lodash/isNil";

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
  let overrideDefaultChecked = defaultChecked;

  // If component did not receive default checked and checked props, choose default checked as
  // default behavior (handle isChecked logic inside input) and set default value
  if (isNil(overrideDefaultChecked) && isNil(checked)) {
    overrideDefaultChecked = false;
  }

  const [overrideChecked, setOverrideChecked] = useState(overrideDefaultChecked || checked);
  const overrideOnChange = useCallback(
    e => {
      setOverrideChecked(!overrideChecked);
      onChange(e);
    },
    [onChange, overrideChecked]
  );

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
        id={id}
        defaultChecked={defaultChecked}
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
