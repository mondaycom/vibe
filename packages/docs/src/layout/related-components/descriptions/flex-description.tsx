import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Flex, Box } from "@vibe/core";

export const FlexDescription = () => {
  const component = useMemo(() => {
    return (
      <Flex gap="small">
        <Box padding="large" border />
        <Box padding="large" border />
        <Box padding="large" border />
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
