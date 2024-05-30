import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipCombobox = () => (
  <Tip title="Not what you were looking for?">
    If you need to filter results from a long list, consider using the{" "}
    <StorybookLink page="Inputs/Combobox" size={StorybookLink.sizes.SMALL}>
      Combobox
    </StorybookLink>{" "}
    component.
  </Tip>
);
