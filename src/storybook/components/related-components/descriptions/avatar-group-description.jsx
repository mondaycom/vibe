import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import { person1, person2, person3 } from "../../../../components/Avatar/__stories__/assets";
import { AvatarGroup, Avatar } from "../../../../components";

export const AvatarGroupDescription = () => {
  const component = useMemo(
    () => (
      <AvatarGroup size={Avatar.sizes.LARGE} max={3}>
        <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
        <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
        <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yonatan Lev Ari" />
        <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />
        <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />
        <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yonatan Lev Ari" />
      </AvatarGroup>
    ),
    []
  );
  return (
    <RelatedComponent
      component={component}
      title="Avatar Group"
      description="An avatar group displays a number of avatars grouped together in a stack or grid."
    />
  );
};
