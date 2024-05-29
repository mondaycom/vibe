import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Bolt from "../../../../components/Icon/Icons/components/Bolt";
import Icon from "../../../../components/Icon/Icon";

export const IconDescription = () => {
  const component = useMemo(() => {
    return <Icon icon={Bolt} iconSize={36} />;
  }, []);

  return (
    <RelatedComponent
      component={component}
      title="Icon"
      href="/?path=/docs/media-icon--docs"
      description="When you want to display an icon."
    />
  );
};
