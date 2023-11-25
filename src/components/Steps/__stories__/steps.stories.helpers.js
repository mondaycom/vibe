import { useCallback, useState } from "react";
import Steps from "../Steps";

// eslint-disable-next-line react/jsx-key
const steps6 = [<div />, <div />, <div />, <div />, <div />, <div />];

export const modifiers = [
  {
    name: "preventOverflow",
    options: {
      mainAxis: false // true by default
    }
  },
  {
    name: "flip",
    options: {
      fallbackPlacements: [] // true by default
    }
  }
];

export const NavigableStepsTemplate = args => {
  const [activeStepIndex, setActiveStepIndex] = useState(2);
  const stepPrev = useCallback(() => {
    setActiveStepIndex(prevState => prevState - 1);
  }, []);
  const stepNext = useCallback(() => {
    setActiveStepIndex(prevState => prevState + 1);
  }, []);
  const onChangeActiveStep = useCallback((_e, stepIndex) => {
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
    />
  );
};

export const StepsNumbersDoTemplate = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(2);
  const stepPrev = useCallback(() => {
    setActiveStepIndex(prevState => prevState - 1);
  }, []);
  const stepNext = useCallback(() => {
    setActiveStepIndex(prevState => prevState + 1);
  }, []);
  const onChangeActiveStep = useCallback((_e, stepIndex) => {
    setActiveStepIndex(stepIndex);
  }, []);
  return (
    <Steps
      type={Steps.types.NUMBERS}
      steps={steps6}
      activeStepIndex={activeStepIndex}
      onChangeActiveStep={onChangeActiveStep}
      backButtonProps={{
        onClick: stepPrev
      }}
      nextButtonProps={{
        onClick: stepNext
      }}
    />
  );
};

export const StepsGalleryDontTemplate = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(2);
  const stepPrev = useCallback(() => {
    setActiveStepIndex(prevState => prevState - 1);
  }, []);
  const stepNext = useCallback(() => {
    setActiveStepIndex(prevState => prevState + 1);
  }, []);
  const onChangeActiveStep = useCallback((_e, stepIndex) => {
    setActiveStepIndex(stepIndex);
  }, []);
  return (
    <Steps
      steps={steps6}
      activeStepIndex={activeStepIndex}
      onChangeActiveStep={onChangeActiveStep}
      backButtonProps={{
        onClick: stepPrev
      }}
      nextButtonProps={{
        onClick: stepNext
      }}
    />
  );
};
