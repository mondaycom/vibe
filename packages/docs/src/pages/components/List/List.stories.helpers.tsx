import React from "react";
import { StorybookLink, Tip } from "@ezds/storybook-blocks";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    For implementing a menu inside a dialog, please use our{" "}
    <StorybookLink page="Components/Menu" size={StorybookLink.sizes.SMALL}>
      Menu
    </StorybookLink>{" "}
    component
  </Tip>
);
