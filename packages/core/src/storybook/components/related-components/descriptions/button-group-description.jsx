import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import ButtonGroup from "../../../../components/ButtonGroup/ButtonGroup";

export const ButtonGroupDescription = () => {
  const component = useMemo(
    () => (
      <ButtonGroup
        groupAriaLabel="button group aria label"
        value={1}
        options={[
          { value: 1, text: "Alpha" },
          { value: 2, text: "Beta" },
          { value: 3, text: "Delta" }
        ]}
      />
    ),
    []
  );
  return (
    <RelatedComponent
      component={component}
      title="ButtonGroup"
      href="/?path=/docs/buttons-buttongroup--docs"
      description="Used to group related options."
    />
  );
};
