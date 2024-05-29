import React, { useState } from "react";
import useDebounceEvent from "..";
import "../../__stories__/general-hooks-stories.scss";

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
