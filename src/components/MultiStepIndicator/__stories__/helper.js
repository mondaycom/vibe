import MultiStepIndicator from "../MultiStepIndicator";

export const firstSteps = [
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

export const secondSteps = [
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

export const thirdSteps = [
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
