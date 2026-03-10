import React, { useMemo } from "react";
import { TextBig } from "@ezds/icons";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { NumberField } from "@ezds/core";

export const NumberFieldDescription = () => {
  const component = useMemo(() => {
    return (
      <div style={{ width: "80%" }}>
        <NumberField leftIcon={TextBig} size="large" value={42} onChange={() => {}} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="NumberField"
      href="/?path=/docs/components-numberfield--docs"
      description="Allows users to input numeric values with controls for increment and decrement."
    />
  );
};
