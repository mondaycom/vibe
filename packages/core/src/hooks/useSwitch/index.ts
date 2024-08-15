import { ChangeEvent, useCallback, useEffect, useState } from "react";

enum SwitchRole {
  CHECKBOX = "checkbox",
  BUTTON = "button"
}

export interface UseSwitchProps {
  isChecked?: boolean;
  defaultChecked?: boolean;
  onChange?: (value: boolean, event?: ChangeEvent<HTMLInputElement> | unknown) => void;
  isDisabled?: boolean;
}

export default function useSwitch({ isChecked, defaultChecked, onChange, isDisabled }: UseSwitchProps = {}) {
  // if isChecked is empty, set defaultChecked value (default false value)
  const overrideCheckedInitial = isChecked ?? !!defaultChecked;
  const [overrideChecked, setOverrideChecked] = useState(overrideCheckedInitial);

  const overrideOnChange = useCallback(
    (event?: ChangeEvent<HTMLInputElement> | unknown) => {
      if (isDisabled) {
        return;
      }
      const newChecked = !overrideChecked;
      if (isChecked === undefined) {
        setOverrideChecked(newChecked);
      }
      if (event && typeof event === "object" && "target" in event) {
        onChange?.(newChecked, event);
      } else {
        onChange?.(newChecked);
      }
    },
    [isChecked, isDisabled, onChange, overrideChecked]
  );

  useEffect(() => {
    if (isChecked !== undefined) {
      setOverrideChecked(isChecked);
    }
  }, [isChecked]);

  return { isChecked: overrideChecked, onChange: overrideOnChange };
}

useSwitch.switchRole = SwitchRole;
