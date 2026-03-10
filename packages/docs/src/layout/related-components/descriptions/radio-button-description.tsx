import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { RadioButton } from "@ezds/core";

export const RadioButtonDescription = () => {
  const component = useMemo(() => <RadioButton text="Selection" checked />, []);
  return (
    <RelatedComponent
      component={component}
      title="RadioButton"
      href="/?path=/docs/components-radiobutton--docs"
      description="Allow for a single option to be selected from a visible list."
    />
  );
};
