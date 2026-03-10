import React from "react";
import { StorybookLink, Tip } from "@ezds/storybook-blocks";

export const TipAmIUsingTheRightComponent = () => (
  <Tip title="Am I using the right component?">
    For settings that are immediately applied, consider using a{" "}
    <StorybookLink page="Components/Toggle" size={StorybookLink.sizes.SMALL}>
      toggle switch
    </StorybookLink>{" "}
    instead.
  </Tip>
);
