import React, { useCallback, useMemo, useRef, useState } from "react";
import classes from "./Switch.module.scss";
import cx from "classnames";
import isNil from "lodash/isNil";
import useEventListener from "../../hooks/useEventListener";
import { useSwitchChecked } from "components/Switch/useSwitchChecked";

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
  // for focus fix - comment will be remvoed soon
  /**
  const [isFocused, setIsFocused] = useState(false);
  const [isMouseTrigger, setIsMouseTrigger] = useState(false);
  const onFocus = useCallback(() => setIsFocused(true), [setIsFocused]);
  const onBlur = useCallback(() => setIsFocused(false), [setIsFocused]);
  const onMouseDown = useCallback(() => setIsMouseTrigger(true), [setIsMouseTrigger]);
  const onMouseUp = useCallback(() => setIsMouseTrigger(false), [setIsMouseTrigger]);
  useEventListener({ eventName: "focus", callback: onFocus, ref });
  useEventListener({ eventName: "blur", callback: onBlur, ref });
  useEventListener({ eventName: "mousedown", callback: onMouseDown, ref });
  useEventListener({ eventName: "mouseup", callback: onMouseUp, ref });
  **/
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
