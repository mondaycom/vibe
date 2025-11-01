import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import person1 from "./assets/person1.png";
import person2 from "./assets/person2.png";
import person3 from "./assets/person3.png";
import person4 from "./assets/person4.png";
import { AvatarGroup, Avatar } from "@vibe/core";

export const AvatarGroupDescription = () => {
  const component = useMemo(
    () => (
      <AvatarGroup size="large" max={3}>
        <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
        <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
        <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
        <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
      </AvatarGroup>
    ),
    []
  );
  return (
    <RelatedComponent
      component={component}
      title="AvatarGroup"
      href="/?path=/docs/components-avatargroup--docs"
      description="An avatar group displays a number of avatars grouped together in a stack or grid."
    />
  );
};
