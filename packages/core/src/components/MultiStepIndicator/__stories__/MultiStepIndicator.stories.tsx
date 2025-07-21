import React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import MultiStepIndicator from "../MultiStepIndicator";
import { createComponentTemplate } from "vibe-storybook-components";
import { Upgrade } from "@vibe/icons";
import { Step } from "../MultiStep.types";

export default {
  title: "Components/MultiStepIndicator",
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
        status: "fulfilled",
        titleText: "Everything you can do with Monday",
        subtitleText: "Subtitle"
      },
      {
        key: "PENDING",
        status: "pending",
        titleText: "Everything you can do with Monday",
        subtitleText: "Subtitle"
      },
      {
        key: "PENDING-2",
        status: "pending",
        titleText: "Everything you can do with Monday",
        subtitleText: "Subtitle"
      }
    ]
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Placements = {
  render: () => {
    const steps: Step[] = useMemo(
      () => [
        {
          key: "FULFILLED",
          status: "fulfilled",
          titleText: "Fulfilled title",
          subtitleText: "Fulfilled subtitle"
        },
        {
          key: "ACTIVE",
          status: "active",
          titleText: "Active title",
          subtitleText: "Active subtitle"
        },
        {
          key: "PENDING",
          status: "pending",
          titleText: "Pending title",
          subtitleText: "Pending subtitle"
        }
      ],
      []
    );

    return (
      <div>
        Vertical
        <MultiStepIndicator textPlacement="vertical" steps={steps} />
        Horizontal
        <MultiStepIndicator steps={steps} />
      </div>
    );
  }
};

export const Types = {
  render: () => {
    const steps: Step[] = useMemo(
      () => [
        {
          key: "FULFILLED",
          status: "fulfilled",
          titleText: "Fulfilled title",
          subtitleText: "Fulfilled subtitle"
        },
        {
          key: "ACTIVE",
          status: "active",
          titleText: "Active title",
          subtitleText: "Active subtitle"
        },
        {
          key: "PENDING",
          status: "pending",
          titleText: "Pending title",
          subtitleText: "Pending subtitle"
        }
      ],
      []
    );

    return (
      <div>
        Primary
        <MultiStepIndicator steps={steps} type="primary" />
        Success
        <MultiStepIndicator steps={steps} type="success" />
        Danger
        <MultiStepIndicator steps={steps} type="danger" />
        Dark
        <MultiStepIndicator steps={steps} type="dark" />
      </div>
    );
  }
};

export const Sizes = {
  render: () => {
    const steps: Step[] = useMemo(
      () => [
        {
          key: "FULFILLED",
          status: "fulfilled",
          titleText: "Fulfilled title",
          subtitleText: "Fulfilled subtitle"
        },
        {
          key: "ACTIVE",
          status: "active",
          titleText: "Active title",
          subtitleText: "Active subtitle"
        },
        {
          key: "PENDING",
          status: "pending",
          titleText: "Pending",
          subtitleText: "Pending subtitle"
        }
      ],
      []
    );

    return (
      <div>
        Regular
        <MultiStepIndicator steps={steps} size="regular" />
        Compact
        <MultiStepIndicator steps={steps} size="compact" />
      </div>
    );
  }
};

export const FulfilledIcons = {
  render: () => {
    const steps: Step[] = useMemo(
      () => [
        {
          key: "FULFILLED",
          status: "fulfilled",
          titleText: "Fulfilled title",
          subtitleText: "Fulfilled subtitle"
        },
        {
          key: "ACTIVE",
          status: "active",
          titleText: "Active title",
          subtitleText: "Active subtitle"
        },
        {
          key: "PENDING",
          status: "pending",
          titleText: "Pending title",
          subtitleText: "Pending subtitle"
        }
      ],
      []
    );

    return (
      <div>
        Default (check)
        <MultiStepIndicator steps={steps} />
        Number instead of icon
        <MultiStepIndicator steps={steps} isFulfilledStepDisplayNumber={true} />
        Custom
        <MultiStepIndicator steps={steps} fulfilledStepIcon={Upgrade} />
      </div>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { Upgrade }
      }
    }
  }
};

export const TransitionAnimation = {
  render: () => {
    const exampleSteps = useMemo<Record<string, Step>>(
      () => ({
        firstStep: {
          key: "PENDING",
          status: "pending",
          titleText: "First step title",
          subtitleText: "First subtitle"
        },

        secondStep: {
          key: "PENDING-2",
          status: "pending",
          titleText: "Second step title",
          subtitleText: "Second subtitle"
        },

        thirdStep: {
          key: "PENDING-3",
          status: "pending",
          titleText: "Third step title",
          subtitleText: "Third subtitle"
        }
      }),
      []
    );

    const [steps, setSteps] = useState<Step[]>([
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

      copySteps[stepKey].status = copySteps[stepKey].status === "pending" ? "active" : "fulfilled";

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
    }, [numActions, steps, getStepKeyForTransition, clearSteps]);

    useEffect(() => {
      const interval = setInterval(performIndicatorStateTransition, 2000);

      return () => {
        clearInterval(interval);
      };
    }, [performIndicatorStateTransition]);

    return <MultiStepIndicator steps={steps} />;
  }
};

export const MultiStepWizard = {
  render: () => {
    const steps: Step[] = useMemo(
      () => [
        {
          key: "FULFILLED",
          status: "fulfilled",
          titleText: "Step 1",
          subtitleText: "Learn how to use monday CRM"
        },
        {
          key: "PENDING",
          status: "pending",
          titleText: "Step 2",
          subtitleText: "Integrate your email"
        },
        {
          key: "PENDING-3",
          status: "pending",
          titleText: "Step 3",
          subtitleText: "Import your data"
        }
      ],
      []
    );

    return <MultiStepIndicator steps={steps} textPlacement="vertical" />;
  }
};
