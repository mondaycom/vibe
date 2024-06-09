import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Skeleton from "../../../../components/Skeleton/Skeleton";

export const SkeletonDescription = () => {
  const component = useMemo(() => <Skeleton type={Skeleton.types.CIRCLE} />, []);
  return (
    <RelatedComponent
      component={component}
      title="Skeleton"
      href="/?path=/docs/feedback-skeleton--docs"
      description="Skeleton loading componet used to indicate content and ui loading."
    />
  );
};
