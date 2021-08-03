import React, { useMemo } from "react";
import { StepsDot } from "./StepsDot";
import { STEPS_CSS_BASE_CLASS } from "./StepsConstants";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header_gallery`;

export const StepsGalleryHeader = ({ activeStepIndex, stepsCount, onChangeActiveStep }) => {
  debugger;
  const galleryDots = useMemo(() => {
    const dots = [];
    for (let stepIndex = 0; stepIndex < stepsCount; stepIndex++) {
      dots.push(
        <StepsDot
          key={`monday-style-step-dot-${stepIndex}`}
          stepIndex={stepIndex}
          onChangeActiveStep={onChangeActiveStep}
          stepsCount={stepsCount}
          activeStepIndex={activeStepIndex}
        />
      );
    }
    return dots;
  }, [activeStepIndex, onChangeActiveStep, stepsCount]);

  return <div className={CSS_BASE_CLASS}>{galleryDots || null}</div>;
};
