import { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { person1, person2, person3 } from "../../../../components/Avatar/__stories__/assets";
import { AvatarGroup, Avatar } from "../../../../components";

export const AvatarGroupDescription = () => {
  const component = useMemo(
    () => (
      <AvatarGroup size={Avatar.sizes.LARGE} max={3}>
        <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
        <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
        <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
        <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
        <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
        <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />
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
