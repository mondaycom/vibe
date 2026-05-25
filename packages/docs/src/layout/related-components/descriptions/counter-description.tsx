import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Counter } from "@vibe/core";

export const CounterDescription = () => {
  const component = useMemo(() => <Counter count={5} />, []);
  return (
    <RelatedComponent
      component={component}
      title="Counter"
      href="/?path=/docs/components-counter--docs"
      description="Show the count of some adjacent data. "
    />
  );
};
