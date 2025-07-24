import React from "react";
import useHover from "../useHover";
import Box from "../../../components/Box/Box";

export default {
  title: "Hooks/useHover"
};

export const Overview = {
  render: () => {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    return (
      <Box
        border
        rounded="small"
        padding="medium"
        ref={hoverRef}
        backgroundColor={isHovered ? "greyBackgroundColor" : "primaryBackgroundColor"}
      >
        {isHovered ? "Boom!" : "Hover me"}
      </Box>
    );
  },

  name: "Overview"
};
