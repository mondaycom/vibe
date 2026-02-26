import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Dropdown } from "@vibe/core";

export const DropdownDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "60%"
    };
    const options = [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" }
    ];
    return (
      <div style={style}>
        <Dropdown placeholder="Placeholder text here" size="medium" options={options} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      href="/?path=/docs/components-dropdown--docs"
      title="Dropdown"
      description="Dropdown present a list of options from which a user can select one or several."
    />
  );
};
