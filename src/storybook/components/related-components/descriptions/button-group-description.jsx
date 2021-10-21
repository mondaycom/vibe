import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";

export const ButtonGroupDescription = () => {
  const component = useMemo(
    () => (
      <ButtonGroup
        groupAriaLabel="button group aria label"
        options={[
          { value: 1, text: "Option 1" },
          { value: 2, text: "Option 2" },
          { value: 3, text: "Option 3" }
        ]}
      />
    ),
    []
  );
  return <RelatedComponent component={component} title="Button group" description="tbd" />;
};
