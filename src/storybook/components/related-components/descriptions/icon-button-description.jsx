import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import IconButton from "../../../../components/IconButton/IconButton";
import Bolt from "../../../../components/Icon/Icons/components/Bolt";

export const IconButtonDescription = () => {
  const component = useMemo(() => <IconButton icon={Bolt} />, []);
  return (
    <RelatedComponent
      component={component}
      title="Icon Button"
      description="When you want to have a button with just an Icon"
    />
  );
};
