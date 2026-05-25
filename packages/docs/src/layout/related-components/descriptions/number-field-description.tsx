import React, { useMemo } from "react";
import { TextBig } from "@vibe/icons";
import { RelatedComponent } from "vibe-storybook-components";
import { NumberField } from "@vibe/core";

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
