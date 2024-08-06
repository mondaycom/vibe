import { ChangeEvent, useCallback, useEffect, useState } from "react";

enum SwitchRole {
  CHECKBOX = "checkbox",
  BUTTON = "button"
}

export interface UseSwitchProps {
  isChecked?: boolean;
  defaultChecked?: boolean;
  onChange?: (value: boolean, event?: ChangeEvent<HTMLInputElement> | any) => void;
  isDisabled?: boolean;
}

export default function useSwitch({ isChecked, defaultChecked, onChange, isDisabled }: UseSwitchProps = {}) {
  // if isChecked is empty, set defaultChecked value (default false value)
  const overrideCheckedInitial = isChecked ?? !!defaultChecked;
  const [overrideChecked, setOverrideChecked] = useState(overrideCheckedInitial);

  const overrideOnChange = useCallback(
    // TODO fix in next major. We need to remove any type
    (event?: ChangeEvent<HTMLInputElement> | any) => {
      if (isDisabled) {
        return;
      }
      const newChecked = !overrideChecked;
      if (isChecked === undefined) {
        setOverrideChecked(newChecked);
      }
      // TODO fix in next major. We should always pass the event
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
