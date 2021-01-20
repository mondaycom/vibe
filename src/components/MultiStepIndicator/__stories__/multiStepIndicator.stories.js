import React from "react";
import { select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import MultiStepIndicator from "../MultiStepIndicator";
import { StoryStateRow, ComponentStateDescription } from "../../storybook-helpers";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import StepIndicator from "../components/StepIndicator/StepIndicator";

export const DefaultStory = () => {
  const steps = [
    {
      status: StepIndicator.statuses.FULFILLED,
      titleText: "Fulfilled step title",
      subtitleText: "Fulfilled subtitle"
    },
    {
      status: StepIndicator.statuses.ACTIVE,
      titleText: "Active step title",
      subtitleText: "Active subtitle"
    },
    {
      status: StepIndicator.statuses.PENDING,
      titleText: "Pending step title",
      subtitleText: "Pending subtitle"
    }
  ];
  return (
    <div>
      <MultiStepIndicator type={MultiStepIndicator.types.PRIMARY} steps={steps} />
    </div>
  );
};

const exampleSteps = [
  {
    status: StepIndicator.statuses.FULFILLED,
    titleText: "Fulfilled title",
    subtitleText: "Fulfilled subtitle"
  },
  {
    status: StepIndicator.statuses.ACTIVE,
    titleText: "Active title",
    subtitleText: "Active subtitle"
  },
  {
    status: StepIndicator.statuses.PENDING,
    titleText: "Pending title",
    subtitleText: "Pending subtitle"
  }
];

export const Sandbox = () => {
  return (
    <div>
      <MultiStepIndicator
        id="multi-step-indicator"
        type={select("type", {
          Primary: MultiStepIndicator.types.PRIMARY,
          Success: MultiStepIndicator.types.SUCCESS,
          Danger: MultiStepIndicator.types.DANGER,
          Dark: MultiStepIndicator.types.DARK
        })}
        steps={exampleSteps}
      />
    </div>
  );
};

export const Types = () => {
  return (
    <StoryWrapper>
      <StoryStateRow>
        <ComponentStateDescription title="primary" />
        <MultiStepIndicator steps={exampleSteps} type={MultiStepIndicator.types.PRIMARY} />
      </StoryStateRow>
      <StoryStateRow>
        <ComponentStateDescription title="success" />
        <MultiStepIndicator steps={exampleSteps} type={MultiStepIndicator.types.SUCCESS} />
      </StoryStateRow>
      <StoryStateRow>
        <ComponentStateDescription title="danger" />
        <MultiStepIndicator steps={exampleSteps} type={MultiStepIndicator.types.DANGER} />
      </StoryStateRow>
      <StoryStateRow>
        <ComponentStateDescription title="dark" />
        <MultiStepIndicator steps={exampleSteps} type={MultiStepIndicator.types.DARK} />
      </StoryStateRow>
    </StoryWrapper>
  );
};

export default {
  title: "Components/MultiStepIndicator",
  component: MultiStepIndicator,
  decorators: [withPerformance]
};
