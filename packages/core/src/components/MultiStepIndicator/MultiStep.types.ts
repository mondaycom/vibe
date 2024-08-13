export type MultiStepType = "primary" | "success" | "danger" | "dark";

export type StepStatus = "pending" | "active" | "fulfilled";

export type TextPlacement = "horizontal" | "vertical";

export type MultiStepSize = "regular" | "compact";

export type Step = {
  titleText: string;
  subtitleText: string;
  status: StepStatus;
};
