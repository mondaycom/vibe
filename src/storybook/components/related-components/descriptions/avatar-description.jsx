import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import { person3 } from "../../../../components/Avatar/__stories__/assets";
import Avatar from "../../../../components/Avatar/Avatar";

export const AvatarDescription = () => {
  const component = useMemo(() => <Avatar src={person3} type={Avatar.types.IMG} />, []);
  return (
    <RelatedComponent
      component={component}
      title="Avatar"
      description="Shows information related to a compontent when a user hovers over it."
    />
  );
};
