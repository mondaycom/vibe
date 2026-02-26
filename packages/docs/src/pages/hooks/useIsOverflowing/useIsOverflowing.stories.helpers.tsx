import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipTooltip = () => (
  <Tip title={"What to do when overflow is detected?"}>
    You might want to use{" "}
    <StorybookLink size={"small"} page="Components/Tooltip">
      Tooltip
    </StorybookLink>{" "}
    to display all the content.
  </Tip>
);
