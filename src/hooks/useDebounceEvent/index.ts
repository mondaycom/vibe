import { useMemo, useCallback, useState, useRef, useEffect, ChangeEvent } from "react";
import { noop, debounce } from "lodash";

export default function useDebounceEvent({
  delay = 0,
  onChange = noop,
  initialStateValue = "",
  trim
}: {
  delay?: number;
  onChange: (value: string) => void;
  initialStateValue?: string;
  trim?: boolean;
}) {
  const [inputValue, setValue] = useState<string>(initialStateValue);
  const previousValue = useRef<string>(null);

  useEffect(() => {
    previousValue.current = initialStateValue;
  });

  const debounceCallback = useMemo(() => {
    if (!delay) {
      return onChange;
    }
    return debounce(onChange, delay);
  }, [onChange, delay]);

  const onEventChanged = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      if (trim) {
        setValue(value.trim());
        debounceCallback(value.trim());
        return;
      }
      setValue(value);
      debounceCallback(value);
    },
    [debounceCallback, setValue, trim]
  );

  const clearValue = useCallback(() => {
    setValue("");
    onChange("");
  }, [setValue, onChange]);

  if (initialStateValue !== previousValue.current && initialStateValue !== inputValue) {
    setValue(initialStateValue);
  }

  return { inputValue, onEventChanged, clearValue, updateValue: setValue };
}
