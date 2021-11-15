import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import RadioButton from "../../../../components/RadioButton/RadioButton";

export const RadioButtonDescription = () => {
  const component = useMemo(() => <RadioButton text="Selection" checked />, []);
  return (
    <RelatedComponent
      component={component}
      title="Radio button"
      description="Allow for a single option to be selected from a visible list."
    />
  );
};
