import React from "react";
import { useCallback, useRef, useState } from "react";
import { useClickOutside, Box } from "@vibe/core";

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
      <Box ref={ref} border rounded="small" padding="medium">
        Click outside {counter}
      </Box>
    );
  },

  name: "Overview"
};
