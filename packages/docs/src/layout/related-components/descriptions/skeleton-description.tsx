import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Skeleton } from "@vibe/core";

export const SkeletonDescription = () => {
  const component = useMemo(() => <Skeleton type={Skeleton.types.CIRCLE} />, []);
  return (
    <RelatedComponent
      component={component}
      title="Skeleton"
      href="/?path=/docs/components-skeleton--docs"
      description="Skeleton loading componet used to indicate content and ui loading."
    />
  );
};
