import React, { useCallback, useState } from "react";
import { Steps, type StepsProps, Tipseen, TipseenWizard, Flex } from "@vibe/core";
import { modifiers } from "./Steps.stories.helpers";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Steps,
  actionPropsArray: ["onChangeActiveStep"]
});

const steps5 = [<div />, <div />, <div />, <div />, <div />];

export default {
  title: "Components/Steps",
  component: Steps,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      liveEdit: {
        scope: { steps5 }
      }
    }
  }
};

const NavigableStepsTemplate = (args: StepsProps) => {
  const [activeStepIndex, setActiveStepIndex] = useState(2);
  const stepPrev = useCallback(() => {
    setActiveStepIndex(prevState => prevState - 1);
  }, []);
  const stepNext = useCallback(() => {
    setActiveStepIndex(prevState => prevState + 1);
  }, []);
  const onChangeActiveStep = useCallback((_e: any, stepIndex: React.SetStateAction<number>) => {
    setActiveStepIndex(stepIndex);
  }, []);

  return (
    <Steps
      id="overview-steps"
      activeStepIndex={activeStepIndex}
      backButtonProps={{
        onClick: stepPrev
      }}
      nextButtonProps={{
        onClick: stepNext
      }}
      {...args}
      onChangeActiveStep={onChangeActiveStep}
      onFinish={() => {}}
    />
  );
};

export const Overview = {
  render: NavigableStepsTemplate.bind({}),
  name: "Overview",
  args: {
    steps: steps5
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Types = {
  render: () => (
    <Flex direction="column" gap="medium">
      <Steps id="types-numbers" type="numbers" steps={steps5} activeStepIndex={2} />
      <Steps id="types-default" steps={steps5} activeStepIndex={2} />
      <div style={{ padding: "15px 103px 20px" }}>
        <Steps id="types-no-nav" steps={steps5} activeStepIndex={2} areNavigationButtonsHidden />
      </div>
    </Flex>
  )
};

export const OnPrimary = {
  render: () => (
    <Flex
      direction="column"
      gap="medium"
      style={{ padding: "var(--sb-spacing-small)", backgroundColor: "var(--sb-primary-color)" }}
    >
      <Steps id="primary-numbers" steps={steps5} activeStepIndex={2} color="on-primary-color" type="numbers" />
      <Steps id="primary-default" steps={steps5} activeStepIndex={2} color="on-primary-color" />
      <div style={{ padding: "15px 103px 20px" }}>
        <Steps
          id="primary-no-nav"
          steps={steps5}
          activeStepIndex={2}
          color="on-primary-color"
          areNavigationButtonsHidden
        />
      </div>
    </Flex>
  )
};

export const NavigableSteps = {
  render: () => {
    const [activeStepIndex, setActiveStepIndex] = useState(2);

    const stepPrev = useCallback(() => {
      setActiveStepIndex(prevState => prevState - 1);
    }, []);

    const stepNext = useCallback(() => {
      setActiveStepIndex(prevState => prevState + 1);
    }, []);

    const onChangeActiveStep = useCallback((_e: any, stepIndex: React.SetStateAction<number>) => {
      setActiveStepIndex(stepIndex);
    }, []);

    return (
      <div>
        <Steps
          id="navigable-steps"
          steps={steps5}
          isContentOnTop
          activeStepIndex={activeStepIndex}
          onChangeActiveStep={onChangeActiveStep}
          backButtonProps={{
            onClick: stepPrev
          }}
          nextButtonProps={{
            onClick: stepNext
          }}
          onFinish={() => {}}
        />
      </div>
    );
  }
};

export const StepsInsideATipseen = {
  render: () => {
    const steps = [
      <div>Message number 1</div>,
      <div>Message number 2</div>,
      <div>Message number 3</div>,
      <div>Message number 4</div>,
      <div>Message number 5</div>
    ];

    const [activeStepIndex, setActiveStepIndex] = useState(2);

    const stepPrev = useCallback(() => {
      setActiveStepIndex(prevState => prevState - 1);
    }, []);

    const stepNext = useCallback(() => {
      setActiveStepIndex(prevState => prevState + 1);
    }, []);

    const onChangeActiveStep = useCallback((_e: any, stepIndex: React.SetStateAction<number>) => {
      setActiveStepIndex(stepIndex);
    }, []);

    return (
      <Tipseen
        id="tipseen-with-steps"
        position="right"
        modifiers={modifiers}
        animationType="opacity-and-slide"
        content={
          <TipseenWizard
            id="tipseen-wizard"
            title="This is a title"
            steps={steps}
            onChangeActiveStep={onChangeActiveStep}
            activeStepIndex={activeStepIndex}
            backButtonProps={{
              size: "small",
              onClick: stepPrev
            }}
            nextButtonProps={{
              kind: "primary",
              size: "small",
              onClick: stepNext
            }}
            onFinish={() => {}}
          />
        }
      >
        <div style={{ width: "10px", height: "150px" }} />
      </Tipseen>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { modifiers }
      }
    }
  }
};
