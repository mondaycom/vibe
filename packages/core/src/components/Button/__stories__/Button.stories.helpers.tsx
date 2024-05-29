import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipIconButton = () => (
  <Tip>
    If you need to use icon as button with no text, check out{" "}
    <StorybookLink page="Buttons/IconButton" size={StorybookLink.sizes.SMALL}>
      IconButton
    </StorybookLink>{" "}
    component
  </Tip>
);
