import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { Heading } from "@ezds/core";

export const HeadingDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <Heading type="h2">Hello world</Heading>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Heading"
      href="/?path=/docs/text-heading--docs"
      description="Heading components are used to title any page sections or sub-sections in top-level page sections."
    />
  );
};
