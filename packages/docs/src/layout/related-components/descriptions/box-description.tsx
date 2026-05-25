import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Box, Text } from "@vibe/core";

export const BoxDescription = () => {
  const component = useMemo(
    () => (
      <div
        style={{
          width: "80%"
        }}
      >
        <Box border rounded="medium">
          <Text align="center">Box</Text>
        </Box>
      </div>
    ),
    []
  );
  return (
    <RelatedComponent
      component={component}
      title="Box"
      href="/?path=/docs/layout-box--docs"
      description="Box component serves as a wrapper component."
    />
  );
};
