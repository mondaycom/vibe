import React, { useState } from "react";
import { useDebounceEvent, type UseDebounceResult } from "@vibe/core";

export default {
  title: "Hooks/useDebounceEvent"
};

export const Overview = {
  render: () => {
    const [inputValue, setInputValue] = useState("");

    const { onEventChanged }: UseDebounceResult = useDebounceEvent({
      delay: 100,
      onChange: (value: string) => setInputValue(value)
    });

    return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },

  name: "Overview"
};

export const PassingAnInitialValue = {
  render: () => {
    const [inputValue, setInputValue] = useState("bla bla bla");

    const { onEventChanged }: UseDebounceResult = useDebounceEvent({
      onChange: (value: string) => setInputValue(value)
    });

    return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },

  name: "Passing an initial value"
};

export const PassingAnOnChangeHandler = {
  render: () => {
    const [inputValue, setInputValue] = useState("");
    const [length, setLength] = useState(0);

    const { onEventChanged }: UseDebounceResult = useDebounceEvent({
      onChange: (value: string) => {
        setInputValue(value);
        setLength(value.length);
      }
    });

    return (
      <>
        <input type="text" value={inputValue} onChange={onEventChanged} />
        <span>Input has {length} characters</span>
      </>
    );
  },

  name: "Passing an `onChange` handler"
};

export const WithTrim = {
  render: () => {
    const [inputValue, setInputValue] = useState("");

    const { onEventChanged }: UseDebounceResult = useDebounceEvent({
      trim: true,
      onChange: (value: string) => setInputValue(value)
    });

    return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },

  name: "With trim"
};
