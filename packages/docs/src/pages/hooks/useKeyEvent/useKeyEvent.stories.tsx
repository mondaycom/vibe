import React from "react";
import { useState } from "react";
import { useKeyEvent } from "@vibe/core";

export default {
  title: "Hooks/useKeyEvent"
};

export const Overview = {
  render: () => {
    const [keyName, setKeyName] = useState("-");

    useKeyEvent({
      keys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      // @ts-ignore
      callback: e => setKeyName(e.key)
    });

    return <div>Last pressed digit: {keyName}</div>;
  },

  name: "Overview"
};
