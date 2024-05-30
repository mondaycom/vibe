import React, { useCallback, useState } from "react";
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
      // @ts-ignore
      fallbackPlacements: [] // true by default
    }
  }
];

export const StepsNumbersDoTemplate = () => {
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
      onFinish={() => {}}
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
  const onChangeActiveStep = useCallback((_e: any, stepIndex: React.SetStateAction<number>) => {
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
      onFinish={() => {}}
    />
  );
};
