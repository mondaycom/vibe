import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Checkbox } from "@vibe/core";

export const CheckboxDescription = () => {
  const component = useMemo(() => <Checkbox label="Selected" checked />, []);
  return (
    <RelatedComponent
      component={component}
      title="Checkbox"
      href="/?path=/docs/components-checkbox--docs"
      description="Allow users to select one or more items from a set of options."
    />
  );
};
