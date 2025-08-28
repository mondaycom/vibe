import React, { type FC, useCallback, useMemo } from "react";
import { range } from "es-toolkit/compat";
import cx from "classnames";
import { StepsDot } from "./StepsDot";
import type VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./StepsGalleryHeader.module.scss";
import { type StepsColor } from "./Steps.types";

export interface StepsGalleryHeaderProps extends VibeComponentProps {
  /**
   * The index of the currently active step.
   */
  activeStepIndex: number;
  /**
   * The total number of steps.
   */
  stepsCount: number;
  /**
   * Callback fired when the active step changes.
   */
  onChangeActiveStep: (e: React.MouseEvent, stepIndex: number) => void;
  /**
   * A function to generate step descriptions for accessibility.
   */
  stepDescriptionFunc?: (stepIndex: number) => string;
  /**
   * The color theme of the gallery header.
   */
  color?: StepsColor;
}

export const StepsGalleryHeader: FC<StepsGalleryHeaderProps> = ({
  activeStepIndex,
  stepsCount,
  onChangeActiveStep,
  stepDescriptionFunc,
  color,
  className
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
            color={color}
            className={styles.galleryHeaderDot}
          />
        ),
        []
      ),
    [activeStepIndex, color, onClickFunctions, overrideStepDescriptionFunc, stepsPlaceholders]
  );

  return (
    <div role="group" className={cx(styles.galleryHeader, className)}>
      {galleryDots || null}
    </div>
  );
};
