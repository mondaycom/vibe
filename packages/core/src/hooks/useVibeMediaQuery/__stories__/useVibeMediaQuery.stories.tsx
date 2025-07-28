import React from "react";
import useVibeMediaQuery from "..";
import Box from "../../../components/Box/Box";

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
