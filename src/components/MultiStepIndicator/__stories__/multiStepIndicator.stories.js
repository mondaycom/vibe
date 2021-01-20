import React, { useState, useEffect, useCallback } from "react";
import { select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import MultiStepIndicator from "../MultiStepIndicator";
import { StoryStateRow, ComponentStateDescription, StoryStateColumn } from "../../storybook-helpers";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import { STEP_STATUSES } from "../MultiStepConstants";

export const DefaultStory = () => {
  const steps = [
    {
      status: MultiStepIndicator.stepStatuses.FULFILLED,
      titleText: "Fulfilled step title",
      subtitleText: "Fulfilled subtitle"
    },
    {
      status: MultiStepIndicator.stepStatuses.ACTIVE,
      titleText: "Active step title",
      subtitleText: "Active subtitle"
    },
    {
      status: MultiStepIndicator.stepStatuses.PENDING,
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
    status: MultiStepIndicator.stepStatuses.FULFILLED,
    titleText: "Fulfilled title",
    subtitleText: "Fulfilled subtitle"
  },
  {
    status: MultiStepIndicator.stepStatuses.ACTIVE,
    titleText: "Active title",
    subtitleText: "Active subtitle"
  },
  {
    status: MultiStepIndicator.stepStatuses.PENDING,
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

const MultiStepIndicatorWithTransitioningState = () => {
  const exampleSteps = {
    firstStep: {
      status: MultiStepIndicator.stepStatuses.PENDING,
      titleText: "First step title",
      subtitleText: "First subtitle"
    },
    secondStep: {
      status: MultiStepIndicator.stepStatuses.PENDING,
      titleText: "Second step title",
      subtitleText: "Second subtitle"
    },
    thirdStep: {
      status: MultiStepIndicator.stepStatuses.PENDING,
      titleText: "Third step title",
      subtitleText: "Third subtitle"
    }
  };

  const [steps, setSteps] = useState([
    { ...exampleSteps.firstStep },
    { ...exampleSteps.secondStep },
    { ...exampleSteps.thirdStep }
  ]);

  const clearSteps = useCallback(() => {
    setSteps([{ ...exampleSteps.firstStep }, { ...exampleSteps.secondStep }, { ...exampleSteps.thirdStep }]);
  }, [setSteps]);

  const getStepKeyForTransition = () => {
    if (numActions < 2) return "firstStep";
    else if (numActions < 4) return "secondStep";
    else return "thirdStep";
  };

  const STEP_TRANSITIONS = {
    [STEP_STATUSES.PENDING]: STEP_STATUSES.ACTIVE,
    [STEP_STATUSES.ACTIVE]: STEP_STATUSES.FULFILLED,
    [STEP_STATUSES.FULFILLED]: STEP_STATUSES.PENDING
  };

  const [numActions, setNumActions] = useState(0);
  const performIndicatorStateTransition = useCallback(() => {
    if (numActions === steps.length * 2) {
      // went through all transitions
      clearSteps();
      setNumActions(0);
      return;
    }
    const stepKey = getStepKeyForTransition();
    const copySteps = { firstStep: { ...steps[0] }, secondStep: { ...steps[1] }, thirdStep: { ...steps[2] } };
    copySteps[stepKey].status = STEP_TRANSITIONS[copySteps[stepKey].status];
    setSteps([{ ...copySteps.firstStep }, { ...copySteps.secondStep }, { ...copySteps.thirdStep }]);
    setNumActions(numActions + 1);
  }, [steps, setSteps, numActions, setNumActions]);

  useEffect(() => {
    const interval = setInterval(performIndicatorStateTransition, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [performIndicatorStateTransition]);

  return <MultiStepIndicator steps={steps} />;
};

export const MultiStepIndicatorStateTransitionAnimation = () => {
  return (
    <section>
      <StoryStateRow>
        <StoryStateColumn title="State transition example">
          <MultiStepIndicatorWithTransitioningState />
        </StoryStateColumn>
      </StoryStateRow>
    </section>
  );
};

export default {
  title: "Components/MultiStepIndicator",
  component: MultiStepIndicator,
  decorators: [withPerformance]
};
