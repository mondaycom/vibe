import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { Toggle } from "@ezds/core";

export const ToggleDescription = () => {
  const component = useMemo(() => <Toggle />, []);
  return (
    <RelatedComponent
      component={component}
      title="Toggle"
      href="/?path=/docs/components-toggle--docs"
      description="Allow users to turn an individual option on or off."
    />
  );
};
