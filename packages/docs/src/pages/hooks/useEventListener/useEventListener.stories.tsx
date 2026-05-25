import React from "react";
import { useCallback, useRef, useState } from "react";
import { useEventListener, Box } from "@vibe/core";

export default {
  title: "Hooks/useEventListener"
};

export const Overview = {
  render: () => {
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);

    const callback = useCallback(() => {
      setHovered(true);
    }, [setHovered]);

    useEventListener({
      ref,
      callback,
      eventName: "mouseenter"
    });

    return (
      <Box ref={ref} border rounded="small" padding="medium">
        {hovered ? "Boom!" : "Hover me"}
      </Box>
    );
  },

  name: "Overview"
};
