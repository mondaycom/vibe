import React, { FC, useCallback, useMemo } from "react";
import { range } from "lodash-es";
import { StepsDot } from "./StepsDot";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./StepsGalleryHeader.module.scss";

export interface StepsGalleryHeaderProps extends VibeComponentProps {
  activeStepIndex: number;
  stepsCount: number;
  onChangeActiveStep: (e: React.MouseEvent, stepIndex: number) => void;
  stepDescriptionFunc: (stepIndex: number) => string;
  isOnPrimary?: boolean;
}

export const StepsGalleryHeader: FC<StepsGalleryHeaderProps> = ({
  activeStepIndex,
  stepsCount,
  onChangeActiveStep,
  stepDescriptionFunc,
  isOnPrimary
}) => {
  const stepsPlaceholders = useMemo(() => range(stepsCount), [stepsCount]);
  const defaultStepDescriptionFunc = useCallback((stepIndex: number) => `Step number ${stepIndex}`, []);
  const overrideStepDescriptionFunc = stepDescriptionFunc || defaultStepDescriptionFunc;
  const onClickFunctions = useMemo(
    () => stepsPlaceholders.map(stepIndex => (e: React.MouseEvent) => onChangeActiveStep(e, stepIndex)),
    [onChangeActiveStep, stepsPlaceholders]
  );

  const galleryDots = useMemo(
    () =>
      stepsPlaceholders.map(
        stepIndex => (
          <StepsDot
            isActive={activeStepIndex === stepIndex}
            key={`monday-style-step-dot-${stepIndex + 1}`}
            ariaLabel={overrideStepDescriptionFunc(stepIndex)}
            onClick={onClickFunctions[stepIndex]}
            isOnPrimary={isOnPrimary}
            className={styles.galleryHeaderDot}
          />
        ),
        []
      ),
    [activeStepIndex, isOnPrimary, onClickFunctions, overrideStepDescriptionFunc, stepsPlaceholders]
  );

  return (
    <div role="group" className={styles.galleryHeader}>
      {galleryDots || null}
    </div>
  );
};
