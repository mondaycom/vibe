import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const BasicModalTip = () => (
  <Tip>
    If your content is not scrollable and you need to add media as supporting element, consider using{" "}
    <StorybookLink page="Feedback/Modal [New]/Side by side modal" size={StorybookLink.sizes.SMALL}>
      Side-by-side modal
    </StorybookLink>{" "}
    or{" "}
    <StorybookLink page="Feedback/Modal [New]/Media modal" size={StorybookLink.sizes.SMALL}>
      Media modal
    </StorybookLink>{" "}
    depends on your use case.
  </Tip>
);
