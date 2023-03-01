import { useCallback, useEffect, useState } from "react";

enum SwitchRole {
  CHECKBOX = "checkbox",
  BUTTON = "button"
}

export default function useSwitch({
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
  // if isChecked is empty, set defaultChecked value (default false value)
  const overrideCheckedInitial = isChecked ?? !!defaultChecked;
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
    if (isChecked !== undefined) {
      setOverrideChecked(isChecked);
    }
  }, [isChecked]);

  return { isChecked: overrideChecked, onChange: overrideOnChange };
}

useSwitch.switchRole = SwitchRole;
