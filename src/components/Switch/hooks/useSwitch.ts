import { useCallback, useEffect, useState } from "react";

enum SwitchRole {
  CHECKBOX = "checkbox",
  BUTTON = "button"
}

export function useSwitch({
  isChecked,
  defaultChecked,
  onChange,
  isDisabled
}: {
  isChecked?: boolean;
  defaultChecked?: boolean;
  onChange?: (value: boolean) => void;
  isDisabled?: boolean;
}) {
  const overrideCheckedInitial = isChecked === undefined ? (defaultChecked ? defaultChecked : false) : isChecked;
  const [overrideChecked, setOverrideChecked] = useState(overrideCheckedInitial);

  const overrideOnChange = useCallback(() => {
    if (isDisabled) {
      return;
    }
    const newChecked = !overrideChecked;
    if (isChecked === undefined) {
      setOverrideChecked(newChecked);
    }
    onChange && onChange(newChecked);
  }, [isChecked, isDisabled, onChange, overrideChecked]);

  useEffect(() => {
    isChecked !== undefined && setOverrideChecked(isChecked);
  }, [isChecked]);

  return { isChecked: overrideChecked, onChange: overrideOnChange };
}

useSwitch.switchRole = SwitchRole;
