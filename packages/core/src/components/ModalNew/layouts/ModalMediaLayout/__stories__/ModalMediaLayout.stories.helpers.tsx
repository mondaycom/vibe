import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const MediaModalTip = () => (
  <Tip>
    If your content is scrollable or wide (you need more space), consider using{" "}
    <StorybookLink page="Feedback/Modal [New]/Basic modal" size={StorybookLink.sizes.SMALL}>
      Basic modal
    </StorybookLink>
    .
  </Tip>
);
