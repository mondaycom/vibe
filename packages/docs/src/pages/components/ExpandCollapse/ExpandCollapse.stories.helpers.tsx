import React from "react";
import { StorybookLink, Tip } from "@ezds/storybook-blocks";

export const TipCombineMultiple = () => (
  <Tip title="Want to combine multiple ExpandCollapse?">
    Use our{" "}
    <StorybookLink size={StorybookLink.sizes.SMALL} page="Components/Accordion">
      Accordion
    </StorybookLink>{" "}
    component
  </Tip>
);
