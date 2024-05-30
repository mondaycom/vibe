import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipMultiStepIndicator = () => (
  <Tip title="Not what you were looking for?">
    If you need to visualize progress use{" "}
    <StorybookLink page="Navigation/MultiStepIndicator" size={StorybookLink.sizes.SMALL}>
      MultiStepIndicator
    </StorybookLink>{" "}
    component instead
  </Tip>
);
