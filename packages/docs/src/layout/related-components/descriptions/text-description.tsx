import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { Text } from "@ezds/core";

export const TextDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <Text>lorem ipsum dolor sit amet</Text>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Text"
      href="/?path=/docs/text-text--docs"
      description="The text component serves as a wrapper for applying typography styles to the text it contains."
    />
  );
};
