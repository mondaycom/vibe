import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const SideBySideModalTip = () => (
  <Tip>
    If your content is scrollable consider using{" "}
    <StorybookLink page="Feedback/Modal [New]/Basic modal" size={StorybookLink.sizes.SMALL}>
      Basic modal
    </StorybookLink>
    .
  </Tip>
);
