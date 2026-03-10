import React from "react";
import { StorybookLink, Tip } from "@ezds/storybook-blocks";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    If you are taking users through a multistep process, use the{" "}
    <StorybookLink page="Components/MultiStepIndicator" size={StorybookLink.sizes.SMALL}>
      MultiStepIndicator
    </StorybookLink>{" "}
    component instead.
  </Tip>
);
