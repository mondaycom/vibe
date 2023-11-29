import { useMemo, useCallback, useState, useRef, useEffect, ChangeEvent, Dispatch, SetStateAction } from "react";
import { noop, debounce } from "lodash-es";

export type UseDebounceResult = {
  inputValue: string;
  onEventChanged: (event: ChangeEvent<Partial<HTMLInputElement> | Partial<HTMLTextAreaElement>>) => void;
  clearValue: () => void;
  updateValue: Dispatch<SetStateAction<string>>;
};

export default function useDebounceEvent({
  delay = 0,
  onChange,
  initialStateValue = "",
  trim
}: {
  onChange: (value: string) => void;
  initialStateValue?: string;
  delay?: number;
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

    if (!onChange) {
      return noop;
    }

    return debounce(onChange, delay);
  }, [onChange, delay]);

  const onEventChanged = useCallback(
    (event: ChangeEvent<Partial<HTMLInputElement> | Partial<HTMLTextAreaElement>>) => {
      const { value } = event.target;
      const finalValue = trim ? value.trim() : value;
      setValue(finalValue);
      debounceCallback(finalValue);
    },
    [debounceCallback, setValue, trim]
  );

  const clearValue = useCallback(() => {
    setValue("");
    if (onChange) {
      onChange("");
    }
  }, [setValue, onChange]);

  if (initialStateValue !== previousValue.current && initialStateValue !== inputValue) {
    setValue(initialStateValue);
  }

  return { inputValue, onEventChanged, clearValue, updateValue: setValue };
}
