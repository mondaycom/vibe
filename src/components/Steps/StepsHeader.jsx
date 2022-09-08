import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React from "react";
import { StepsCommand } from "./StepsCommand";
import { StepsGalleryHeader } from "./StepsGalleryHeader";
import { StepsNumbersHeader } from "./StepsNumbersHeader";
import { STEPS_GALLERY_TYPE } from "./StepsConstants";
import styles from "./StepsHeader.module.scss";

const CSS_BASE_CLASS = "monday-style-steps-header";

export const StepsHeader = ({
  type,
  activeStepIndex,
  onChangeActiveStep,
  stepsCount,
  areNavigationButtonsHidden,
  backButtonProps,
  nextButtonProps,
  areButtonsIconsHidden,
  isOnPrimary,
  id,
  "data-testid": dataTestId
}) => {
  const SubHeaderComponent = type === STEPS_GALLERY_TYPE ? StepsGalleryHeader : StepsNumbersHeader;

  return (
    <div
      className={cx(styles.header, CSS_BASE_CLASS, `monday-style-steps-header--${type}`)}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.STEPS_HEADER, id)}
    >
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
