import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipCombineMultiple = () => (
  <Tip title="Want to combine multiple ExpandCollapse?">
    Use our{" "}
    <StorybookLink size={"small"} page="Components/Accordion">
      Accordion
    </StorybookLink>{" "}
    component
  </Tip>
);
