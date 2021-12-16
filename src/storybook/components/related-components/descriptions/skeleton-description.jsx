import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import Skeleton from "../../../../components/Skeleton/Skeleton";

export const SkeletonDescription = () => {
  const component = useMemo(() => <Skeleton type={Skeleton.types.CIRCLE} />, []);
  return (
    <RelatedComponent
      component={component}
      title="Skeleton"
      description="Skeleton loading componet used to indicate content and ui loading."
    />
  );
};
