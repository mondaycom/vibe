import { useCallback, useEffect, useMemo, useRef, useState } from "@storybook/addons";
import { ChangeEvent } from "react";
import { debounce, noop } from "lodash-es";
import "../../__stories__/general-hooks-stories.scss";

// TODO storybook 7 migration: temp solution for the hooks issue - replace with the import in the future
// import useDebounceEvent from "..";
function useDebounceEvent({
  delay = 0,
  onChange,
  initialStateValue = "",
  trim
}: {
  onChange?: (value: string) => void;
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

export default {
  title: "Hooks/useDebounceEvent"
};

export const Overview = {
  render: () => {
    const { inputValue, onEventChanged } = useDebounceEvent({
      delay: 100
    });

    return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },

  name: "Overview"
};

export const PassingAnInitialValue = {
  render: () => {
    const { inputValue, onEventChanged } = useDebounceEvent({
      initialStateValue: "bla bla bla"
    });

    return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },

  name: "Passing an initial value"
};

export const PassingAnOnChangeHandler = {
  render: () => {
    const [length, setLength] = useState(0);

    const { inputValue, onEventChanged } = useDebounceEvent({
      onChange: value => setLength(value.length)
    });

    return (
      <>
        <input type="text" value={inputValue} onChange={onEventChanged} />
        {<span>Input has {length} characters</span>}
      </>
    );
  },

  name: "Passing an `onChange` handler"
};

export const WithTrim = {
  render: () => {
    const { inputValue, onEventChanged } = useDebounceEvent({
      trim: true
    });

    return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },

  name: "With trim"
};
