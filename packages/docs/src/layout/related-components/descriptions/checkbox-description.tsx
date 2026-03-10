import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { Checkbox } from "@ezds/core";

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
