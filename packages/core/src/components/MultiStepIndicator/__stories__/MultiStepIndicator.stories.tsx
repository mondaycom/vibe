import React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import MultiStepIndicator from "../MultiStepIndicator";
import { StepStatus } from "../MultiStepConstants";
import { createComponentTemplate, StoryDescription } from "vibe-storybook-components";
import { Featured } from "../../Icon/Icons";
import Flex from "../../Flex/Flex";
import "./MultiStepIndicator.stories.scss";

export default {
  title: "Navigation/MultiStepIndicator",
  component: MultiStepIndicator
};

const multiStepIndicatorTemplate = createComponentTemplate(MultiStepIndicator);

export const Overview = {
  render: multiStepIndicatorTemplate.bind({}),
  name: "Overview",

  args: {
    steps: [
      {
        key: "FULFILLED",
        status: MultiStepIndicator.stepStatuses.FULFILLED,
        titleText: "Everything you can do with Monday",
        subtitleText: "Subtitle"
      },
      {
        key: "PENDING",
        status: MultiStepIndicator.stepStatuses.PENDING,
        titleText: "Everything you can do with Monday",
        subtitleText: "Subtitle"
      },
      {
        key: "PENDING-2",
        status: MultiStepIndicator.stepStatuses.PENDING,
        titleText: "Everything you can do with Monday",
        subtitleText: "Subtitle"
      }
    ]
  }
};

export const Placements = {
  render: () => {
    const steps = useMemo(
      () => [
        {
          key: "FULFILLED",
          status: MultiStepIndicator.stepStatuses.FULFILLED,
          titleText: "Fulfilled title",
          subtitleText: "Fulfilled subtitle"
        },
        {
          key: "ACTIVE",
          status: MultiStepIndicator.stepStatuses.ACTIVE,
          titleText: "Active title",
          subtitleText: "Active subtitle"
        },
        {
          key: "PENDING",
          status: MultiStepIndicator.stepStatuses.PENDING,
          titleText: "Pending title",
          subtitleText: "Pending subtitle"
        }
      ],
      []
    );

    return (
      <div className="monday-storybook-multiStepIndicator_column-wrapper">
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Vertical</span>
          <MultiStepIndicator
            className="monday-storybook-multiStepIndicator_size"
            textPlacement={MultiStepIndicator.textPlacements.VERTICAL}
            steps={steps}
          />
        </div>
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Horizontal</span>
          <MultiStepIndicator steps={steps} />
        </div>
      </div>
    );
  },

  name: "Placements"
};

export const Types = {
  render: () => {
    const steps = useMemo(
      () => [
        {
          key: "FULFILLED",
          status: MultiStepIndicator.stepStatuses.FULFILLED,
          titleText: "Fulfilled title",
          subtitleText: "Fulfilled subtitle"
        },
        {
          key: "ACTIVE",
          status: MultiStepIndicator.stepStatuses.ACTIVE,
          titleText: "Active title",
          subtitleText: "Active subtitle"
        },
        {
          key: "PENDING",
          status: MultiStepIndicator.stepStatuses.PENDING,
          titleText: "Pending title",
          subtitleText: "Pending subtitle"
        }
      ],
      []
    );

    return (
      <div className="monday-storybook-multiStepIndicator_column-wrapper">
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Primary</span>
          <MultiStepIndicator steps={steps} type={MultiStepIndicator.types.PRIMARY} />
        </div>
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Success</span>
          <MultiStepIndicator steps={steps} type={MultiStepIndicator.types.SUCCESS} />
        </div>
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Danger</span>
          <MultiStepIndicator steps={steps} type={MultiStepIndicator.types.DANGER} />
        </div>
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Dark</span>
          <MultiStepIndicator steps={steps} type={MultiStepIndicator.types.DARK} />
        </div>
      </div>
    );
  },

  name: "Types"
};

export const Sizes = {
  render: () => {
    const steps = useMemo(
      () => [
        {
          key: "FULFILLED",
          status: MultiStepIndicator.stepStatuses.FULFILLED,
          titleText: "Fulfilled title",
          subtitleText: "Fulfilled subtitle"
        },
        {
          key: "ACTIVE",
          status: MultiStepIndicator.stepStatuses.ACTIVE,
          titleText: "Active title",
          subtitleText: "Active subtitle"
        },
        {
          key: "PENDING",
          status: MultiStepIndicator.stepStatuses.PENDING,
          titleText: "Pending",
          subtitleText: "Pending subtitle"
        }
      ],
      []
    );

    return (
      <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.SMALL}>
        <StoryDescription description="Regular">
          <MultiStepIndicator steps={steps} size={MultiStepIndicator.sizes.REGULAR} />
        </StoryDescription>
        <StoryDescription description="Compact">
          <MultiStepIndicator
            className="multi_step_indicator_compact"
            steps={steps}
            size={MultiStepIndicator.sizes.COMPACT}
          />
        </StoryDescription>
      </Flex>
    );
  },

  name: "Sizes"
};

export const FulfilledIcons = {
  render: () => {
    const steps = useMemo(
      () => [
        {
          key: "FULFILLED",
          status: MultiStepIndicator.stepStatuses.FULFILLED,
          titleText: "Fulfilled title",
          subtitleText: "Fulfilled subtitle"
        },
        {
          key: "ACTIVE",
          status: MultiStepIndicator.stepStatuses.ACTIVE,
          titleText: "Active title",
          subtitleText: "Active subtitle"
        },
        {
          key: "PENDING",
          status: MultiStepIndicator.stepStatuses.PENDING,
          titleText: "Pending title",
          subtitleText: "Pending subtitle"
        }
      ],
      []
    );

    return (
      <div className="monday-storybook-multiStepIndicator_column-wrapper">
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Default (check)</span>
          <MultiStepIndicator steps={steps} />
        </div>
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Number instead of icon</span>
          <MultiStepIndicator steps={steps} isFulfilledStepDisplayNumber={true} />
        </div>
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Custom (featured)</span>
          <MultiStepIndicator steps={steps} fulfilledStepIcon={Featured} />
        </div>
      </div>
    );
  },

  name: "Fulfilled Icons"
};

export const TransitionAnimation = {
  render: () => {
    const exampleSteps = useMemo(
      () => ({
        firstStep: {
          key: "PENDING",
          status: MultiStepIndicator.stepStatuses.PENDING,
          titleText: "First step title",
          subtitleText: "First subtitle"
        },

        secondStep: {
          key: "PENDING-2",
          status: MultiStepIndicator.stepStatuses.PENDING,
          titleText: "Second step title",
          subtitleText: "Second subtitle"
        },

        thirdStep: {
          key: "PENDING-3",
          status: MultiStepIndicator.stepStatuses.PENDING,
          titleText: "Third step title",
          subtitleText: "Third subtitle"
        }
      }),
      []
    );

    const [steps, setSteps] = useState([
      {
        ...exampleSteps.firstStep
      },
      {
        ...exampleSteps.secondStep
      },
      {
        ...exampleSteps.thirdStep
      }
    ]);

    const clearSteps = useCallback(() => {
      setSteps([
        {
          ...exampleSteps.firstStep
        },
        {
          ...exampleSteps.secondStep
        },
        {
          ...exampleSteps.thirdStep
        }
      ]);
    }, [exampleSteps.firstStep, exampleSteps.secondStep, exampleSteps.thirdStep]);

    const [numActions, setNumActions] = useState(0);

    const getStepKeyForTransition = useCallback(() => {
      if (numActions < 2) return "firstStep";
      else if (numActions < 4) return "secondStep";
      else return "thirdStep";
    }, [numActions]);

    const STEP_TRANSITIONS = useMemo(
      () => ({
        [StepStatus.PENDING]: StepStatus.ACTIVE,
        [StepStatus.ACTIVE]: StepStatus.FULFILLED,
        [StepStatus.FULFILLED]: StepStatus.PENDING
      }),
      []
    );

    const performIndicatorStateTransition = useCallback(() => {
      if (numActions === steps.length * 2) {
        clearSteps();
        setNumActions(0);
        return;
      }

      const stepKey = getStepKeyForTransition();

      const copySteps = {
        firstStep: {
          ...steps[0]
        },

        secondStep: {
          ...steps[1]
        },

        thirdStep: {
          ...steps[2]
        }
      };

      copySteps[stepKey].status = STEP_TRANSITIONS[copySteps[stepKey].status];

      setSteps([
        {
          ...copySteps.firstStep
        },
        {
          ...copySteps.secondStep
        },
        {
          ...copySteps.thirdStep
        }
      ]);

      setNumActions(numActions + 1);
    }, [numActions, steps, getStepKeyForTransition, STEP_TRANSITIONS, clearSteps]);

    useEffect(() => {
      const interval = setInterval(performIndicatorStateTransition, 2000);

      return () => {
        clearInterval(interval);
      };
    }, [performIndicatorStateTransition]);

    return <MultiStepIndicator steps={steps} />;
  },

  name: "Transition Animation"
};

export const MultiStepWizard = {
  render: () => {
    const steps = useMemo(
      () => [
        {
          key: "FULFILLED",
          status: MultiStepIndicator.stepStatuses.FULFILLED,
          titleText: "Step 1",
          subtitleText: "Learn how to use monday CRM"
        },
        {
          key: "PENDING",
          status: MultiStepIndicator.stepStatuses.PENDING,
          titleText: "Step 2",
          subtitleText: "Integrate your email"
        },
        {
          key: "PENDING-3",
          status: MultiStepIndicator.stepStatuses.PENDING,
          titleText: "Step 3",
          subtitleText: "Import your data"
        }
      ],
      []
    );

    return (
      <MultiStepIndicator
        className="monday-storybook-multiStepIndicator_big-size"
        steps={steps}
        textPlacement={MultiStepIndicator.textPlacements.VERTICAL}
      />
    );
  },

  name: "Multi step wizard"
};
