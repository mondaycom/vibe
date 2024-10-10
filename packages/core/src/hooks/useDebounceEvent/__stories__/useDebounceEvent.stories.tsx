import React, { useState } from "react";
import useDebounceEvent, { UseDebounceResult } from "..";
import "../../__stories__/general-hooks-stories.scss";

export default {
  title: "Hooks/useDebounceEvent"
};

export const Overview = {
  render: () => {
    const { inputValue, onEventChanged }: UseDebounceResult = useDebounceEvent({
      delay: 100,
      onChange: () => {}
    });

    return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },

  name: "Overview"
};

export const PassingAnInitialValue = {
  render: () => {
    const { inputValue, onEventChanged }: UseDebounceResult = useDebounceEvent({
      initialStateValue: "bla bla bla",
      onChange: () => {}
    });

    return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },

  name: "Passing an initial value"
};

export const PassingAnOnChangeHandler = {
  render: () => {
    const [length, setLength] = useState(0);

    const { inputValue, onEventChanged }: UseDebounceResult = useDebounceEvent({
      onChange: (value: string) => setLength(value.length)
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
    const { inputValue, onEventChanged }: UseDebounceResult = useDebounceEvent({
      trim: true,
      onChange: () => {}
    });

    return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },

  name: "With trim"
};
