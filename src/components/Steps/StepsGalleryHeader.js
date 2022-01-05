import React, { useCallback, useMemo } from "react";
import range from "lodash/range";
import { StepsDot } from "./StepsDot";
import { STEPS_CSS_BASE_CLASS } from "./StepsConstants";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header_gallery`;

export const StepsGalleryHeader = ({ activeStepIndex, stepsCount, onChangeActiveStep, stepDescriptionFunc }) => {
  const stepsPlaceholders = useMemo(() => range(stepsCount), [stepsCount]);
  const defaultStepDescriptionFunc = useCallback(stepIndex => `Step number ${stepIndex}`, []);
  const overrideStepDescriptionFunc = stepDescriptionFunc || defaultStepDescriptionFunc;
  const onClickFunctions = useMemo(
    () => stepsPlaceholders.map(stepIndex => e => onChangeActiveStep(e, stepIndex)),
    [onChangeActiveStep, stepsPlaceholders]
  );

  const galleryDots = useMemo(
    () =>
      stepsPlaceholders.map(
        stepIndex => (
          <StepsDot
            isActive={activeStepIndex === stepIndex}
            key={`monday-style-step-dot-${stepIndex + 1}`}
            stepIndex={stepIndex}
            ariaLabel={overrideStepDescriptionFunc(stepIndex)}
            onClick={onClickFunctions[stepIndex]}
          />
        ),
        []
      ),
    [activeStepIndex, onClickFunctions, overrideStepDescriptionFunc, stepsPlaceholders]
  );

  return (
    <div role="group" className={CSS_BASE_CLASS}>
      {galleryDots || null}
    </div>
  );
};
