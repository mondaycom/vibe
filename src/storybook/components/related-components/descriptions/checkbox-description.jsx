import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import { Checkbox } from "../../../../components/Checkbox/Checkbox";

export const CheckboxDescription = () => {
  const component = useMemo(() => <Checkbox label="Selected" checked />, []);
  return (
    <RelatedComponent
      component={component}
      title="Checkbox"
      description="Allow users to select one or more items from a set of options."
    />
  );
};
