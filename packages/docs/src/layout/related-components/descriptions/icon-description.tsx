import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { Bolt } from "@ezds/icons";
import { Icon } from "@ezds/core";

export const IconDescription = () => {
  const component = useMemo(() => {
    return <Icon icon={Bolt} iconSize={36} />;
  }, []);

  return (
    <RelatedComponent
      component={component}
      title="Icon"
      href="/?path=/docs/components-icon--docs"
      description="When you want to display an icon."
    />
  );
};
