import React from "react";
import { StorybookLink, Tip } from "@ezds/storybook-blocks";

export const MediaModalTip = () => (
  <div style={{ marginTop: 40 }}>
    <Tip>
      If your content is scrollable or wide (you need more space), consider using{" "}
      <StorybookLink page="Components/Modal [New]/Basic modal" size={StorybookLink.sizes.SMALL}>
        Basic modal
      </StorybookLink>
      .
    </Tip>
  </div>
);
