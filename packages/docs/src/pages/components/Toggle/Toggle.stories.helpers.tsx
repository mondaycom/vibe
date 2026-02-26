import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipOtherComponents = () => (
  <Tip>
    If the user needs to choose an item from a set of options, use{" "}
    <StorybookLink page="Components/RadioButton" size={"small"}>
      Radio button
    </StorybookLink>{" "}
    or{" "}
    <StorybookLink page="Components/Checkbox" size={"small"}>
      Checkboxes
    </StorybookLink>{" "}
    instead.
  </Tip>
);
