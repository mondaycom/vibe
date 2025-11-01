import React from "react";
import { useVibeMediaQuery, Box } from "@vibe/core";

export default {
  title: "Hooks/useVibeMediaQuery"
};

export const Overview = {
  render: () => {
    const currentSize = useVibeMediaQuery();
    return (
      <Box border rounded="small" padding="medium">
        {currentSize}
      </Box>
    );
  },

  name: "Overview"
};
