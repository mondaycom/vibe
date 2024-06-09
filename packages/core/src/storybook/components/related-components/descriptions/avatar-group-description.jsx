import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { person1, person2, person3, person4 } from "../../../../components/Avatar/__stories__/assets";
import { AvatarGroup, Avatar } from "../../../../components";

export const AvatarGroupDescription = () => {
  const component = useMemo(
    () => (
      <AvatarGroup size={Avatar.sizes.LARGE} max={3}>
        <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
        <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
        <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
        <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
        <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
        <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
      </AvatarGroup>
    ),
    []
  );
  return (
    <RelatedComponent
      component={component}
      title="AvatarGroup"
      href="/?path=/docs/media-avatar-avatargroup--docs"
      description="An avatar group displays a number of avatars grouped together in a stack or grid."
    />
  );
};
