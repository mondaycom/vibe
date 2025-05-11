import React, { useCallback, useState } from "react";
import Steps, { StepsProps } from "../Steps";
import Tipseen from "../../Tipseen/Tipseen";
import Flex from "../../Flex/Flex";
import TipseenWizard from "../../Tipseen/TipseenWizard";
import { modifiers } from "./Steps.stories.helpers";
import createStoryMetaSettingsDecorator from "../../../storybook/functions/createStoryMetaSettingsDecorator";
import "./Steps.stories.scss";

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
      <Steps type="numbers" steps={steps5} activeStepIndex={2} />
      <Steps steps={steps5} activeStepIndex={2} />
      <Steps steps={steps5} activeStepIndex={2} areNavigationButtonsHidden className="monday-storybook-steps_padding" />
    </Flex>
  )
};

export const OnPrimary = {
  render: () => (
    <Flex direction="column" gap="medium" className="monday-storybook-steps_color">
      <Steps steps={steps5} activeStepIndex={2} color="on-primary-color" type="numbers" />
      <Steps steps={steps5} activeStepIndex={2} color="on-primary-color" />
      <Steps
        steps={steps5}
        activeStepIndex={2}
        color="on-primary-color"
        areNavigationButtonsHidden
        className="monday-storybook-steps_padding"
      />
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
      <div className="monday-storybook-steps_block">
        <Tipseen
          position="left"
          modifiers={modifiers}
          animationType="opacity-and-slide"
          content={
            <TipseenWizard
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
          <div className="monday-storybook-steps_container" />
        </Tipseen>
      </div>
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
