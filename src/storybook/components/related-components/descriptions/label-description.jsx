import { useMemo } from "react";
import { RelatedComponent } from "monday-ui-storybook-blocks";
import Label from "../../../../components/Label/Label";

export const LabelDescription = () => {
  const component = useMemo(() => <Label text="New" />, []);
  return (
    <RelatedComponent
      component={component}
      href="/?path=/docs/data-display-label--overview"
      title="Label"
      description="Offers content classification."
    />
  );
};
