import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { person1 } from "../../../../components/Avatar/__stories__/assets";
import Avatar from "../../../../components/Avatar/Avatar";

export const AvatarDescription = () => {
  const component = useMemo(() => <Avatar src={person1} type="img" ariaLabel="Hadas Fahri" />, []);
  return (
    <RelatedComponent
      component={component}
      title="Avatar"
      href="/?path=/docs/components-avatar--docs"
      description="An avatar is a visual representation of a user or entity."
    />
  );
};
