import React from "react";
import { useCallback, useRef, useState } from "react";
import useClickOutside from "..";
import "../../__stories__/general-hooks-stories.scss";

export default {
  title: "Hooks/useClickOutside"
};

export const Overview = {
  render: () => {
    const [counter, setCounter] = useState(0);
    const ref = useRef(null);

    const onClick = useCallback(() => {
      setCounter(currentCounter => {
        return currentCounter + 1;
      });
    }, [setCounter]);

    useClickOutside({
      ref,
      callback: onClick
    });

    return (
      <div className="hooks-reference-element" ref={ref}>
        Click outside {counter}
      </div>
    );
  },

  name: "Overview"
};
