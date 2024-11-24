import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipLoader = () => (
  <Tip>
    Using loader after the pages are fully loaded consider using the{" "}
    <StorybookLink page="Components/Loader" size={StorybookLink.sizes.SMALL}>
      loader component.
    </StorybookLink>
  </Tip>
);
