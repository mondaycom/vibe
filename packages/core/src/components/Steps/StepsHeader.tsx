import React, { type FC, useMemo } from "react";
import cx from "classnames";
import { StepsCommand } from "./StepsCommand";
import { StepsGalleryHeader, type StepsGalleryHeaderProps } from "./StepsGalleryHeader";
import { StepsNumbersHeader, type StepsNumbersHeaderProps } from "./StepsNumbersHeader";
import { FINISH_TEXT } from "./StepsConstants";
import { type StepsType, type StepsColor } from "./Steps.types";
import { type VibeComponentProps } from "@vibe/shared";
import Button, { type ButtonProps } from "../Button/Button";
import styles from "./StepsHeader.module.scss";

export interface StepsHeaderProps extends VibeComponentProps {
  /**
   * The type of steps header.
   */
  type: StepsType;
  /**
   * The index of the currently active step.
   */
  activeStepIndex: number;
  /**
   * Callback fired when the active step changes.
   */
  onChangeActiveStep: (e: React.MouseEvent, stepIndex: number) => void;
  /**
   * The total number of steps.
   */
  stepsCount: number;
  /**
   * If true, hides the navigation buttons.
   */
  areNavigationButtonsHidden: boolean;
  /**
   * Props applied to the back button.
   */
  backButtonProps: Partial<ButtonProps>;
  /**
   * Props applied to the next button.
   */
  nextButtonProps: Partial<ButtonProps>;
  /**
   * Props applied to the finish button.
   */
  finishButtonProps: Partial<ButtonProps>;
  /**
   * If true, hides the icons in the navigation buttons.
   */
  areButtonsIconsHidden: boolean;
  /**
   * The color theme of the steps header.
   */
  color?: StepsColor;
  /**
   * Callback fired when the finish button is clicked.
   */
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

  // TODO: [breaking] make finish button as default in next major
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
