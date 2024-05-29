import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipButton = () => (
  <Tip>
    If you need an action that does not have context with text{" "}
    <StorybookLink page="Inputs/Combobox" size={StorybookLink.sizes.SMALL}>
      Button
    </StorybookLink>
    .
  </Tip>
);
