import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Dropdown from "../../../../components/Dropdown/Dropdown";

export const DropdownDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "60%"
    };
    return (
      <div style={style}>
        <Dropdown placeholder="Placeholder text here" size={Dropdown.sizes.MEDIUM} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      href="/?path=/docs/inputs-dropdown--docs"
      title="Dropdown"
      description="Dropdown present a list of options from which a user can select one or several."
    />
  );
};
