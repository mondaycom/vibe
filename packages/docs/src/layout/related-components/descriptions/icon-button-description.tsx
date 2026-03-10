import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { IconButton } from "@ezds/core";
import { Bolt } from "@ezds/icons";

export const IconButtonDescription = () => {
  const component = useMemo(() => <IconButton icon={Bolt} />, []);
  return (
    <RelatedComponent
      component={component}
      title="IconButton"
      href="/?path=/docs/components-iconbutton--docs"
      description="When you want to have a button with just an Icon"
    />
  );
};
