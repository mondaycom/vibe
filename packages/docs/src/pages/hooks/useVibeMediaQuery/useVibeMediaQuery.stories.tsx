import React from "react";
import { useEZDSMediaQuery, Box } from "@ezds/core";

export default {
  title: "Hooks/useEZDSMediaQuery"
};

export const Overview = {
  render: () => {
    const currentSize = useEZDSMediaQuery();
    return (
      <Box border rounded="small" padding="medium">
        {currentSize}
      </Box>
    );
  },

  name: "Overview"
};
