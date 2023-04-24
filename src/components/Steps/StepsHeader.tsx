import React, { FC } from "react";
import cx from "classnames";
import { StepsCommand } from "./StepsCommand";
import { StepsGalleryHeader, StepsGalleryHeaderProps } from "./StepsGalleryHeader";
import { StepsNumbersHeader, StepsNumbersHeaderProps } from "./StepsNumbersHeader";
import { StepsType } from "./StepsConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { ButtonProps } from "../Button/Button";
import styles from "./StepsHeader.module.scss";

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
  isOnPrimary,
  className
}) => {
  const SubHeaderComponent: FC<StepsGalleryHeaderProps | StepsNumbersHeaderProps> =
    type === StepsType.GALLERY ? StepsGalleryHeader : StepsNumbersHeader;

  return (
    <div className={cx(styles.header, className)}>
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
        isOnPrimary={isOnPrimary}
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
