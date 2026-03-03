import { useMemo, useCallback, type ChangeEvent } from "react";
import { debounce } from "es-toolkit";
import { noop } from "es-toolkit";

export type UseDebounceResult = {
  onEventChanged: (event: ChangeEvent<Partial<HTMLInputElement> | Partial<HTMLTextAreaElement>>) => void;
  clearValue: () => void;
};

export default function useDebounceEvent({
  delay = 0,
  onChange,
  trim
}: {
  onChange: (value: string) => void;
  delay?: number;
  trim?: boolean;
}) {
  const debounceCallback = useMemo(() => {
    if (!delay) {
      return onChange;
    }

    if (!onChange) {
      return noop;
    }

    return debounce(onChange, delay);
  }, [onChange, delay]);

  const onEventChanged = useCallback(
    (event: ChangeEvent<Partial<HTMLInputElement> | Partial<HTMLTextAreaElement>>) => {
      const { value } = event.target;
      const finalValue = trim ? value.trim() : value;
      debounceCallback(finalValue);
    },
    [debounceCallback, trim]
  );

  const clearValue = useCallback(() => {
    if (onChange) {
      onChange("");
    }
  }, [onChange]);

  return { onEventChanged, clearValue };
}
