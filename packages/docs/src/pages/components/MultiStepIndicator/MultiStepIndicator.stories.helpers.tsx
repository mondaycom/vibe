import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";
import { type Step } from "../MultiStep.types";

export const firstSteps: Step[] = [
  {
    status: "fulfilled",
    titleText: "Plan options",
    subtitleText: "Choose plan"
  },
  {
    status: "pending",
    titleText: "Seats",
    subtitleText: "Number of users"
  },
  {
    status: "pending",
    titleText: "Paying method",
    subtitleText: "How to pay"
  }
];

export const secondSteps: Step[] = [
  {
    status: "fulfilled",
    titleText: "Plan options",
    subtitleText: ""
  },
  {
    status: "pending",
    titleText: "Seats",
    subtitleText: "Number of users"
  },
  {
    status: "pending",
    titleText: "Paying method",
    subtitleText: "How to pay"
  }
];

export const thirdSteps: Step[] = [
  {
    status: "fulfilled",
    titleText: "Plan",
    subtitleText: ""
  },
  {
    status: "pending",
    titleText: "Seats",
    subtitleText: ""
  },
  {
    status: "pending",
    titleText: "Method",
    subtitleText: ""
  }
];

export const TipNotWhatYouAreLookingFor = () => (
  <Tip title="Not what you were looking for?">
    In order to navigate between content without a linear progress, use the{" "}
    <StorybookLink page="Components/Tabs" size={StorybookLink.sizes.SMALL}>
      Tabs
    </StorybookLink>{" "}
    or{" "}
    <StorybookLink page="Components/ButtonGroup" size={StorybookLink.sizes.SMALL}>
      Button group
    </StorybookLink>{" "}
    component.
  </Tip>
);
