import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import person1 from "./assets/person1.png";
import { Avatar } from "@vibe/core";

export const AvatarDescription = () => {
  const component = useMemo(() => <Avatar src={person1} type="img" ariaLabel="Julia Martinez" />, []);
  return (
    <RelatedComponent
      component={component}
      title="Avatar"
      href="/?path=/docs/components-avatar--docs"
      description="An avatar is a visual representation of a user or entity."
    />
  );
};
