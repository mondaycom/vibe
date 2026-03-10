import React from "react";
import { StorybookLink, Tip } from "@ezds/storybook-blocks";

export const TipButton = () => (
  <Tip>
    If you need an action that does not have context with text{" "}
    <StorybookLink page="Components/Combobox" size={StorybookLink.sizes.SMALL}>
      Button
    </StorybookLink>
    .
  </Tip>
);
