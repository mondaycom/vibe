import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Label from "../../../../components/Label/Label";

export const LabelDescription = () => {
  const component = useMemo(() => <Label text="New" />, []);
  return (
    <RelatedComponent
      component={component}
      href="/?path=/docs/data-display-label--docs"
      title="Label"
      description="Offers content classification."
    />
  );
};
