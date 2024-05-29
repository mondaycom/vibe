import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipOtherComponents = () => (
  <Tip>
    When there are fewer than five items, consider using{" "}
    <StorybookLink page="Inputs/RadioButton" size={StorybookLink.sizes.SMALL}>
      Radio buttons
    </StorybookLink>{" "}
    (if only one item can be selected) or{" "}
    <StorybookLink page="Inputs/Checkbox" size={StorybookLink.sizes.SMALL}>
      Checkboxes
    </StorybookLink>{" "}
    (if multiple items can be selected).
  </Tip>
);
