import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import Chips from "../../../../components/Chips/Chips";

export const ChipsDescription = () => {
  const component = useMemo(() => <Chips label="This is a chip" readOnly />, []);
  return (
    <RelatedComponent
      component={component}
      title="Chip"
      description="Compact elements that represent an input, attribute, or action."
    />
  );
};
