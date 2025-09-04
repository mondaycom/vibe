import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Button } from "@vibe/button";

export const ButtonDescription = () => {
  const component = useMemo(() => <Button size="large">Get started</Button>, []);
  return (
    <RelatedComponent
      component={component}
      title="Button"
      href="/?path=/docs/components-button--docs"
      description="Allow users take actions with a single click."
    />
  );
};
