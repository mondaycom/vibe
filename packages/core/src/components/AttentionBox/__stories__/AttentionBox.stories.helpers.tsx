import React from "react";
import { Tip, StorybookLink } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    If the information about a component isn’t critical for the user, use a{" "}
    <StorybookLink page="Popover/Tooltip" size={StorybookLink.sizes.SMALL}>
      Tooltip
    </StorybookLink>{" "}
    instead.
  </Tip>
);
