import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    Need to count or indicate numbers? Use the{" "}
    <StorybookLink page="Feedback/Counter" size={StorybookLink.sizes.SMALL}>
      Counter
    </StorybookLink>{" "}
    component instead.
  </Tip>
);
