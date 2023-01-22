import React, { useCallback, useRef } from "react";
import classes from "./Switch.module.scss";
import { isNil } from "lodash-es";

// TODO should be migrated to TS? Not used rn
export function useHiddenSwitch({
  id,
  name,
  value,
  role,
  disabled,
  ariaLabel,
  ariaLabelledBy,
  checked,
  onChange,
  ariaControls,
  defaultChecked
}) {
  const inputRef = useRef(null);
  const onSwitchClick = useCallback(() => {
    const manualClickEvent = new MouseEvent("click", {
      shiftKey: true,
      // After dispatch this event we will want it to be captured by all the relevant event listeners which registered to this checkbox input.
      bubbles: true,
      cancelable: true
    });
    inputRef.current.dispatchEvent(manualClickEvent);
  }, []);
  let overrideDefaultChecked = defaultChecked;

  // If component did not receive default checked and checked props, choose default checked as
  // default behavior (handle isChecked logic inside input) and set default value
  if (isNil(overrideDefaultChecked) && isNil(checked)) {
    overrideDefaultChecked = false;
  }

  return {
    onSwitchClick,
    isChecked: overrideDefaultChecked || checked,
    HiddenSwitch: (
      <input
        ref={inputRef}
        id={id}
        aria-controls={ariaControls}
        className={classes["hidden-switch"]}
        value={value}
        name={name}
        type="checkbox"
        role={role ? role : "switch"}
        onChange={onChange}
        defaultChecked={overrideDefaultChecked}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        checked={checked}
        aria-checked={checked}
      />
    )
  };
}
