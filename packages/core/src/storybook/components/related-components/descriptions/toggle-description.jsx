import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Toggle from "../../../../components/Toggle/Toggle";

export const ToggleDescription = () => {
  const component = useMemo(() => <Toggle />, []);
  return (
    <RelatedComponent
      component={component}
      title="Toggle"
      href="/?path=/docs/inputs-toggle--docs"
      description="Allow users to turn an individual option on or off."
    />
  );
};
