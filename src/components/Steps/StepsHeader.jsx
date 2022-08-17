import React from "react";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import { StepsCommand } from "./StepsCommand";
import { StepsGalleryHeader } from "./StepsGalleryHeader";
import { StepsNumbersHeader } from "./StepsNumbersHeader";
import { STEPS_CSS_BASE_CLASS, STEPS_GALLERY_TYPE } from "./StepsConstants";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header`;
const bemHelper = BEMClass(CSS_BASE_CLASS);
export const StepsHeader = ({
  type,
  activeStepIndex,
  onChangeActiveStep,
  stepsCount,
  areNavigationButtonsHidden,
  backButtonProps,
  nextButtonProps,
  areButtonsIconsHidden,
  isOnPrimary
}) => {
  const SubHeaderComponent = type === STEPS_GALLERY_TYPE ? StepsGalleryHeader : StepsNumbersHeader;

  return (
    <div className={cx(CSS_BASE_CLASS, bemHelper({ state: type }))}>
      {areNavigationButtonsHidden ? null : (
        <StepsCommand
          isNext={false}
          isIconHidden={areButtonsIconsHidden}
          onChangeActiveStep={onChangeActiveStep}
          activeStepIndex={activeStepIndex}
          stepsCount={stepsCount}
          buttonProps={backButtonProps}
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
          isNext
          isIconHidden={areButtonsIconsHidden}
          activeStepIndex={activeStepIndex}
          onChangeActiveStep={onChangeActiveStep}
          stepsCount={stepsCount}
          buttonProps={nextButtonProps}
          isOnPrimary={isOnPrimary}
        />
      )}
    </div>
  );
};
