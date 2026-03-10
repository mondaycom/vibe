import React from "react";
import { StorybookLink, Tip } from "@ezds/storybook-blocks";

export const TipDropdown = () => (
  <Tip>
    When there’s limited space or no default selection, consider using a select{" "}
    <StorybookLink page="Components/Dropdown" size={StorybookLink.sizes.SMALL}>
      Dropdown
    </StorybookLink>{" "}
    instead.
  </Tip>
);
