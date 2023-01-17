import cx from "classnames";
import React, { FC, useCallback, useMemo } from "react";
import { range } from "lodash-es";
import { StepsDot } from "./StepsDot";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./StepsGalleryHeader.module.scss";

const CSS_BASE_CLASS = "monday-style-steps-header_gallery";

export interface StepsGalleryHeaderProps extends VibeComponentProps {
  activeStepIndex: number;
  stepsCount: number;
  onChangeActiveStep: (e: React.MouseEvent, stepIndex: number) => void;
  stepDescriptionFunc: (stepIndex: number) => string;
}

export const StepsGalleryHeader: FC<StepsGalleryHeaderProps> = ({
  activeStepIndex,
  stepsCount,
  onChangeActiveStep,
  stepDescriptionFunc,
  id,
  "data-testid": dataTestId
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
          />
        ),
        []
      ),
    [activeStepIndex, onClickFunctions, overrideStepDescriptionFunc, stepsPlaceholders]
  );

  return (
    <div
      role="group"
      className={cx(styles.headerGallery, CSS_BASE_CLASS)}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.STEPS_GALLERY_HEADER, id)}
    >
      {galleryDots || null}
    </div>
  );
};
