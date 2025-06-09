import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Flex, Box } from "../../../../components";

export const FlexDescription = () => {
  const component = useMemo(() => {
    return (
      <Flex gap="small">
        <Box style={{ width: "50px", height: "50px" }} border />
        <Box style={{ width: "50px", height: "50px" }} border />
        <Box style={{ width: "50px", height: "50px" }} border />
      </Flex>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Flex"
      href="/?path=/docs/layout-flex--docs"
      description="Position group of sub-elements in one dimension, horizontal or vertical"
    />
  );
};
