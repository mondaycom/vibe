import React from "react";
import { StorybookLink, Tip } from "@ezds/storybook-blocks";

export const TipHeading = () => (
  <Tip>
    Check out our{" "}
    <StorybookLink page="Text/Heading" size={StorybookLink.sizes.SMALL}>
      Heading
    </StorybookLink>{" "}
    component for text headlines.
  </Tip>
);

export const TipLink = () => (
  <Tip>
    If you need to place a link outside of the textual flow, please use our{" "}
    <StorybookLink page="Components/Link" size={StorybookLink.sizes.SMALL}>
      Link
    </StorybookLink>{" "}
    component.
  </Tip>
);
