import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import { person1 } from "../../../../components/Avatar/__stories__/assets";
import Avatar from "../../../../components/Avatar/Avatar";

export const AvatarDescription = () => {
  const component = useMemo(() => <Avatar src={person1} type={Avatar.types.IMG} ariaLabel="Hadas Fahri" />, []);
  return (
    <RelatedComponent
      component={component}
      title="Avatar"
      description="An avatar is a visual representation of a user or entity."
    />
  );
};
