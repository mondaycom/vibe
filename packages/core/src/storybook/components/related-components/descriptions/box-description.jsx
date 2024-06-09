import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Box from "../../../../components/Box/Box";

export const BoxDescription = () => {
  const component = useMemo(
    () => (
      <div
        style={{
          width: "80%",
          textAlign: "center"
        }}
      >
        <Box border={Box.borders.DEFAULT} rounded={Box.roundeds.MEDIUM}>
          Box
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
