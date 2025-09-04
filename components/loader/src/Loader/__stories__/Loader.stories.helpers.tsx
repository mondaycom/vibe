import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipSkeleton = () => (
  <Tip>
    While loading content consider using{" "}
    <StorybookLink page="Components/Skeleton" size={StorybookLink.sizes.SMALL}>
      Skeleton loading
    </StorybookLink>
  </Tip>
);
