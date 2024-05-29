import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Button from "../../../../components/Button/Button";

export const ButtonDescription = () => {
  const component = useMemo(() => <Button size={Button.sizes.LARGE}>Get started</Button>, []);
  return (
    <RelatedComponent
      component={component}
      title="Button"
      href="/?path=/docs/buttons-button--docs"
      description="Allow users take actions with a single click."
    />
  );
};
