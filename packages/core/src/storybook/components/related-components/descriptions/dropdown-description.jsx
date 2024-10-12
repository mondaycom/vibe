import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Dropdown from "../../../../components/Dropdown/Dropdown";

export const DropdownDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "60%"
    };
    const options = [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" },
      { id: "3", label: "Option 3" }
    ];
    return (
      <div style={style}>
        <Dropdown placeholder="Placeholder text here" size={Dropdown.sizes.MEDIUM} options={options} />
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
