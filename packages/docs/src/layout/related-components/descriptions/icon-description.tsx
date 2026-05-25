import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Bolt } from "@vibe/icons";
import { Icon } from "@vibe/core";

export const IconDescription = () => {
  const component = useMemo(() => {
    return <Icon icon={Bolt} size={36} />;
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
