import React from "react";
import { StorybookLink, Tip } from "@ezds/storybook-blocks";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    Need to count or indicate numbers? Use the{" "}
    <StorybookLink page="Components/Counter" size={StorybookLink.sizes.SMALL}>
      Counter
    </StorybookLink>{" "}
    component instead.
  </Tip>
);
