import React, { FC, useMemo } from "react";
import cx from "classnames";
import { StepsCommand } from "./StepsCommand";
import { StepsGalleryHeader, StepsGalleryHeaderProps } from "./StepsGalleryHeader";
import { StepsNumbersHeader, StepsNumbersHeaderProps } from "./StepsNumbersHeader";
import { FINISH_TEXT } from "./StepsConstants";
import { StepsType, StepsColor } from "./Steps.types";
import VibeComponentProps from "../../types/VibeComponentProps";
import Button, { ButtonProps } from "../Button/Button";
import styles from "./StepsHeader.module.scss";

export interface StepsHeaderProps extends VibeComponentProps {
  type: StepsType;
  activeStepIndex: number;
  onChangeActiveStep: (e: React.MouseEvent, stepIndex: number) => void;
  stepsCount: number;
  areNavigationButtonsHidden: boolean;
  backButtonProps: Partial<ButtonProps>;
  nextButtonProps: Partial<ButtonProps>;
  finishButtonProps: Partial<ButtonProps>;
  areButtonsIconsHidden: boolean;
  color?: StepsColor;
  onFinish?: (e: React.MouseEvent) => void;
}

export const StepsHeader: FC<StepsHeaderProps> = ({
  type,
  activeStepIndex,
  onChangeActiveStep,
  stepsCount,
  areNavigationButtonsHidden,
  backButtonProps,
  nextButtonProps,
  finishButtonProps,
  areButtonsIconsHidden,
  color = "primary",
  onFinish,
  className
}: StepsHeaderProps) => {
  const SubHeaderComponent: FC<StepsGalleryHeaderProps | StepsNumbersHeaderProps> =
    type === "gallery" ? StepsGalleryHeader : StepsNumbersHeader;

  // TODO: make finish button as default in next major
  const showFinishButton = useMemo(() => {
    if (!onFinish) {
      return;
    }
    return activeStepIndex === stepsCount - 1;
  }, [activeStepIndex, onFinish, stepsCount]);

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
          color={color}
        />
      )}
      <SubHeaderComponent
        activeStepIndex={activeStepIndex}
        stepsCount={stepsCount}
        onChangeActiveStep={onChangeActiveStep}
        color={color}
      />
      {areNavigationButtonsHidden ? null : (
        <>
          {showFinishButton ? (
            // @ts-ignore
            <Button onClick={onFinish} color={color} {...finishButtonProps}>
              {finishButtonProps?.children || FINISH_TEXT}
            </Button>
          ) : (
            <StepsCommand
              isNext
              isIconHidden={areButtonsIconsHidden}
              activeStepIndex={activeStepIndex}
              onChangeActiveStep={onChangeActiveStep}
              stepsCount={stepsCount}
              buttonProps={nextButtonProps}
              color={color}
            />
          )}
        </>
      )}
    </div>
  );
};
