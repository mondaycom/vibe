import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    For implementing a menu inside a dialog, please use our{" "}
    <StorybookLink page="Navigation/Menu" size={StorybookLink.sizes.SMALL}>
      Menu
    </StorybookLink>{" "}
    component
  </Tip>
);
