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
