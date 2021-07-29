import React from "react";
import cx from "classnames";
import { StepsCommand } from "./StepsCommand";
import { StepsGalleryHeader } from "./StepsGalleryHeader";
import { StepsNumbersHeader } from "./StepsNumbersHeader";
import { STEPS_CSS_BASE_CLASS, STEPS_GALLERY_TYPE } from "./StepsConstants";
import { BEMClass } from "../../helpers/bem-helper";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header`;
const bemHelper = BEMClass(CSS_BASE_CLASS);
export const StepsHeader = ({ type, activeStepIndex, onChangeActiveStep, stepsCount }) => {
  const SubHeaderComponent = type === STEPS_GALLERY_TYPE ? StepsGalleryHeader : StepsNumbersHeader;

  return (
    <div className={cx(CSS_BASE_CLASS, bemHelper({ state: type }))}>
      <StepsCommand
        isForward={false}
        onChangeActiveStep={onChangeActiveStep}
        activeStepIndex={activeStepIndex}
        stepsCount={stepsCount}
      />
      <SubHeaderComponent
        activeStepIndex={activeStepIndex}
        stepsCount={stepsCount}
        onChangeActiveStep={onChangeActiveStep}
      />
      <StepsCommand isForward onChangeActiveStep={onChangeActiveStep} stepsCount={stepsCount} />
    </div>
  );
};
