import React, { useCallback, useMemo } from "react";
import { StepsDot } from "./StepsDot";
import { STEPS_CSS_BASE_CLASS } from "./StepsConstants";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header_gallery`;

export const StepsGalleryHeader = ({ activeStepIndex, stepsCount, onChangeActiveStep, stepDescriptionFunc }) => {
  const defaultStepDescriptionFunc = useCallback(stepIndex => `Step number ${stepIndex}`, []);
  const galleryDots = useMemo(() => {
    const dots = [];
    for (let stepIndex = 0; stepIndex < stepsCount; stepIndex++) {
      dots.push(
        <StepsDot
          key={`monday-style-step-dot-${stepIndex + 1}`}
          stepIndex={stepIndex}
          onChangeActiveStep={onChangeActiveStep}
          stepsCount={stepsCount}
          stepDescriptionFunc={stepDescriptionFunc || defaultStepDescriptionFunc}
          activeStepIndex={activeStepIndex}
        />
      );
    }
    return dots;
  }, [activeStepIndex, defaultStepDescriptionFunc, onChangeActiveStep, stepDescriptionFunc, stepsCount]);

  return (
    <div role="group" className={CSS_BASE_CLASS}>
      {galleryDots || null}
    </div>
  );
};
