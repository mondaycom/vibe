import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import IconButton from "../../../../components/IconButton/IconButton";
import Bolt from "../../../../components/Icon/Icons/components/Bolt";

export const IconButtonDescription = () => {
  const component = useMemo(() => <IconButton icon={Bolt} />, []);
  return (
    <RelatedComponent
      component={component}
      title="IconButton"
      href="/?path=/docs/buttons-iconbutton--docs"
      description="When you want to have a button with just an Icon"
    />
  );
};
