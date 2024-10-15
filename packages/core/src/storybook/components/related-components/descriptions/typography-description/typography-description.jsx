import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Flex, Heading } from "../../../../../components";

export const TypographyDescription = () => {
  const component = useMemo(() => {
    return (
      <Flex gap="small">
        <Heading type="h1" ellipsis={false} size="small">
          H1
        </Heading>
        <Heading type="h2" ellipsis={false}>
          H2
        </Heading>
        <Heading type="h3" ellipsis={false}>
          H3
        </Heading>
      </Flex>
    );
  }, []);

  return (
    <RelatedComponent
      component={component}
      title="Typography"
      href="/?path=/docs/foundations-typography--docs"
      description="Typography expresses hierarchy and brand presence."
    />
  );
};
