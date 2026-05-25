import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Chips } from "@vibe/core";

export const ChipsDescription = () => {
  const component = useMemo(() => <Chips label="This is a chip" readOnly />, []);
  return (
    <RelatedComponent
      component={component}
      title="Chip"
      href="/?path=/docs/components-chips--docs"
      description="Compact elements that represent an input, attribute, or action."
    />
  );
};
