import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
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
