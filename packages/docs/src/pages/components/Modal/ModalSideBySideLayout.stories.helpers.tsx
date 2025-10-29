import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const SideBySideModalTip = () => (
  <div style={{ marginTop: 40 }}>
    <Tip>
      If your content is scrollable, consider using{" "}
      <StorybookLink page="Components/Modal [New]/Basic modal" size={StorybookLink.sizes.SMALL}>
        Basic modal
      </StorybookLink>
      .
    </Tip>
  </div>
);
