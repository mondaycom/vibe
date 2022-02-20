import { useCallback, useEffect, useState } from "react";

export function useSwitchChecked({ checked, defaultChecked, onChange }) {
  const overrideCheckedInitial = checked === undefined ? (defaultChecked ? defaultChecked : false) : checked;
  const [overrideChecked, setOverrideChecked] = useState(overrideCheckedInitial);
  const overrideOnChange = useCallback(() => {
    if (checked === undefined) {
      setOverrideChecked(prevState => {
        const newValue = !prevState;
        onChange(newValue);
        return newValue;
      });
    }
  }, [onChange, overrideChecked]);

  useEffect(() => {
    checked !== undefined && setOverrideChecked(checked);
  }, [checked]);

  return { checked: overrideChecked, onChange: overrideOnChange };
}
