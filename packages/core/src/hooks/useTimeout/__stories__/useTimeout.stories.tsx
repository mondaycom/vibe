import React, { useCallback } from "react";
import useTimeout from "..";

export default {
  title: "Hooks/useTimeout"
};

export const Overview = {
  render: () => {
    const callback = useCallback(() => {
      alert("5s passed");
    }, []);

    useTimeout({
      time: 5000,
      callback
    });

    return <div>Alert is coming!</div>;
  },

  name: "Overview"
};
