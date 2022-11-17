import React, { FC } from "react";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import { StepsCommand } from "./StepsCommand";
import { StepsGalleryHeader, StepsGalleryHeaderProps } from "./StepsGalleryHeader";
import { StepsNumbersHeader, StepsNumbersHeaderProps } from "./StepsNumbersHeader";
import { STEPS_CSS_BASE_CLASS, StepsType } from "./StepsConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ButtonProps } from "../Button/Button";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header`;
const bemHelper = BEMClass(CSS_BASE_CLASS);

export interface StepsHeaderProps extends VibeComponentProps {
  type: StepsType;
  activeStepIndex: number;
  onChangeActiveStep: (e: React.MouseEvent, stepIndex: number) => void;
  stepsCount: number;
  areNavigationButtonsHidden: boolean;
  backButtonProps: ButtonProps;
  nextButtonProps: ButtonProps;
  areButtonsIconsHidden: boolean;
  isOnPrimary: boolean;
}

export const StepsHeader: FC<StepsHeaderProps> = ({
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
  const SubHeaderComponent: FC<StepsGalleryHeaderProps | StepsNumbersHeaderProps> =
    type === StepsType.GALLERY ? StepsGalleryHeader : StepsNumbersHeader;

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
