import React from "react";
import cx from "classnames";
import { StepsCommand } from "./StepsCommand";
import { StepsGalleryHeader } from "./StepsGalleryHeader";
import { StepsNumbersHeader } from "./StepsNumbersHeader";
import { STEPS_CSS_BASE_CLASS, STEPS_GALLERY_TYPE } from "./StepsConstants";
import { BEMClass } from "../../helpers/bem-helper";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header`;
const bemHelper = BEMClass(CSS_BASE_CLASS);
export const StepsHeader = ({
  type,
  activeStepIndex,
  onChangeActiveStep,
  stepsCount,
  areNavigationButtonsHidden,
  backwardButtonProps,
  forwardButtonProps,
  areIconsHidden,
  isOnPrimary
}) => {
  const SubHeaderComponent = type === STEPS_GALLERY_TYPE ? StepsGalleryHeader : StepsNumbersHeader;

  return (
    <div className={cx(CSS_BASE_CLASS, bemHelper({ state: type }))}>
      {areNavigationButtonsHidden ? null : (
        <StepsCommand
          isForward={false}
          isIconHidden={areIconsHidden}
          onChangeActiveStep={onChangeActiveStep}
          activeStepIndex={activeStepIndex}
          stepsCount={stepsCount}
          buttonProps={backwardButtonProps}
          isOnPrimary={isOnPrimary}
        />
      )}
      <SubHeaderComponent
        activeStepIndex={activeStepIndex}
        stepsCount={stepsCount}
        onChangeActiveStep={onChangeActiveStep}
      />
      {areNavigationButtonsHidden ? null : (
        <StepsCommand
          isForward
          isIconHidden={areIconsHidden}
          activeStepIndex={activeStepIndex}
          onChangeActiveStep={onChangeActiveStep}
          stepsCount={stepsCount}
          buttonProps={forwardButtonProps}
          isOnPrimary={isOnPrimary}
        />
      )}
    </div>
  );
};
