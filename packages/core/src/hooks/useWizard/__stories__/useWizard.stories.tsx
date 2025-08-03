import React from "react";
import useWizard from "../useWizard";
import { Button, Flex } from "../../../components";
import Steps from "../../../components/Steps/Steps";
import Heading from "../../../components/Heading/Heading";
import { type Decorator } from "@storybook/react";
import styles from "./useWizard.stories.module.scss";

const withUseWizardDecorator: Decorator = Story => (
  <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM}>
    <Story />
  </Flex>
);

export default {
  title: "Hooks/useWizard",
  decorators: [withUseWizardDecorator]
};

export const Overview = {
  render: () => {
    const { activeStep, next, back, isFirstStep } = useWizard({
      stepCount: 5,
      onFinish: () => alert("Wizard Completed!")
    });

    return (
      <>
        <Heading weight={Heading.weights.MEDIUM} type={Heading.types.H3}>
          Active Step: {activeStep}
        </Heading>
        <Flex gap={Flex.gaps.SMALL}>
          <Button kind={Button.kinds.TERTIARY} onClick={back} disabled={isFirstStep}>
            Back
          </Button>
          <Button onClick={next}>Next</Button>
        </Flex>
      </>
    );
  }
};

export const WithInitialStep = {
  render: () => {
    const { activeStep, next, back, isFirstStep } = useWizard({
      initialStep: 2,
      stepCount: 5
    });

    return (
      <>
        <Heading weight={Heading.weights.MEDIUM} type={Heading.types.H3}>
          Active Step: {activeStep}
        </Heading>
        <Flex gap={Flex.gaps.SMALL}>
          <Button kind={Button.kinds.TERTIARY} onClick={back} disabled={isFirstStep}>
            Back
          </Button>
          <Button onClick={next}>Next</Button>
        </Flex>
      </>
    );
  }
};

export const WithStepsComponent = {
  render: () => {
    const { activeStep, next, back, goToStep, isFirstStep } = useWizard({
      stepCount: 5
    });

    const stepsContent = [
      <div>Step 1</div>,
      <div>Step 2</div>,
      <div>Step 3</div>,
      <div>Step 4</div>,
      <div>Step 5</div>
    ];

    return (
      <>
        <Steps
          className={styles.stepper}
          areNavigationButtonsHidden
          isContentOnTop
          steps={stepsContent}
          activeStepIndex={activeStep}
          onChangeActiveStep={(_e, stepIndex) => goToStep(stepIndex)}
        />
        <Flex gap={Flex.gaps.SMALL}>
          <Button kind={Button.kinds.TERTIARY} onClick={back} disabled={isFirstStep}>
            Back
          </Button>
          <Button onClick={next}>Next</Button>
        </Flex>
      </>
    );
  }
};
