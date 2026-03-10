import React from "react";
import { StorybookLink, Tip } from "@ezds/storybook-blocks";

export const TipLabel = () => (
  <Tip>
    Chips will always show up in context of a field. If you just need to add information, use{" "}
    <StorybookLink page="Components/Label" size={StorybookLink.sizes.SMALL}>
      Label.
    </StorybookLink>
  </Tip>
);
