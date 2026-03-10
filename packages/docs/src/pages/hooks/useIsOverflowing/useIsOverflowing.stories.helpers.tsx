import React from "react";
import { StorybookLink, Tip } from "@ezds/storybook-blocks";

export const TipTooltip = () => (
  <Tip title={"What to do when overflow is detected?"}>
    You might want to use{" "}
    <StorybookLink size={StorybookLink.sizes.SMALL} page="Components/Tooltip">
      Tooltip
    </StorybookLink>{" "}
    to display all the content.
  </Tip>
);
