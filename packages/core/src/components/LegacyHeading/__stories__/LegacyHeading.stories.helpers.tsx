import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipEditableHeading = () => (
  <Tip title="Not what you were looking for?">
    Please check out our{" "}
    <StorybookLink page="Inputs/EditableHeading" size={StorybookLink.sizes.SMALL}>
      EditableHeading
    </StorybookLink>{" "}
    component if you would like to allow users to edit the title text.
  </Tip>
);
