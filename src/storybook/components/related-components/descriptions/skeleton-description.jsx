import { useMemo } from "react";
import { RelatedComponent } from "monday-ui-storybook-blocks";
import Skeleton from "../../../../components/Skeleton/Skeleton";

export const SkeletonDescription = () => {
  const component = useMemo(() => <Skeleton type={Skeleton.types.CIRCLE} />, []);
  return (
    <RelatedComponent
      component={component}
      title="Skeleton"
      href="/?path=/docs/feedback-skeleton--overview"
      description="Skeleton loading componet used to indicate content and ui loading."
    />
  );
};
