import React from "react";
import { useCallback, useRef, useState } from "react";
import useEventListener from "..";
import "../../__stories__/general-hooks-stories.scss";

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
      <div ref={ref} className="hooks-reference-element">
        {hovered ? "Boom!" : "Hover me"}
      </div>
    );
  },

  name: "Overview"
};
