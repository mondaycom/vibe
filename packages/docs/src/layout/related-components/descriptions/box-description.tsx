import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { Box, Text } from "@ezds/core";

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
