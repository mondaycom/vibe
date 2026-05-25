import React from "react";
import { useWizard, Button, Flex, Heading, Steps } from "@vibe/core";
import { type Decorator } from "@storybook/react";
import styles from "./useWizard.stories.module.scss";

const withUseWizardDecorator: Decorator = Story => (
  <Flex direction="column" gap="medium">
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
        <Heading weight="medium" type="h3">
          Active Step: {activeStep}
        </Heading>
        <Flex gap="small">
          <Button kind="tertiary" onClick={back} disabled={isFirstStep}>
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
        <Heading weight="medium" type="h3">
          Active Step: {activeStep}
        </Heading>
        <Flex gap="small">
          <Button kind="tertiary" onClick={back} disabled={isFirstStep}>
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
        <Flex gap="small">
          <Button kind="tertiary" onClick={back} disabled={isFirstStep}>
            Back
          </Button>
          <Button onClick={next}>Next</Button>
        </Flex>
      </>
    );
  }
};
