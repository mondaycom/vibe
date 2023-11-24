import React from "react";
import { Link, Tip } from "vibe-storybook-components";
import MultiStepIndicator, { type Step } from "../MultiStepIndicator";

export const firstSteps: Step[] = [
  {
    status: MultiStepIndicator.stepStatuses.FULFILLED,
    titleText: "Plan options",
    subtitleText: "Choose plan"
  },
  {
    status: MultiStepIndicator.stepStatuses.PENDING,
    titleText: "Seats",
    subtitleText: "Number of users"
  },
  {
    status: MultiStepIndicator.stepStatuses.PENDING,
    titleText: "Paying method",
    subtitleText: "How to pay"
  }
];

export const secondSteps: Step[] = [
  {
    status: MultiStepIndicator.stepStatuses.FULFILLED,
    titleText: "Plan options",
    subtitleText: ""
  },
  {
    status: MultiStepIndicator.stepStatuses.PENDING,
    titleText: "Seats",
    subtitleText: "Number of users"
  },
  {
    status: MultiStepIndicator.stepStatuses.PENDING,
    titleText: "Paying method",
    subtitleText: "How to pay"
  }
];

export const thirdSteps: Step[] = [
  {
    status: MultiStepIndicator.stepStatuses.FULFILLED,
    titleText: "Plan",
    subtitleText: ""
  },
  {
    status: MultiStepIndicator.stepStatuses.PENDING,
    titleText: "Seats",
    subtitleText: ""
  },
  {
    status: MultiStepIndicator.stepStatuses.PENDING,
    titleText: "Method",
    subtitleText: ""
  }
];

export const TipNotWhatYouAreLookingFor = () => (
  <Tip title="Not what you were looking for?">
    In order to navigate between content without a linear progress, use the
    <Link href="/?path=/docs/navigation-tabs-tabs--overview" size={Link.sizes.SMALL}>
      Tabs
    </Link>
    or
    <Link href="/?path=/docs/buttons-buttongroup--overview" size={Link.sizes.SMALL}>
      Button group
    </Link>
    component.
  </Tip>
);
