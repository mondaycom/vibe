import React, { forwardRef } from "react";
import ModalFooterBase from "../ModalFooterBase/ModalFooterBase";
import { ComponentDefaultTestId, getTestId } from "@vibe/shared";
import styles from "./ModalFooterWizard.module.scss";
import { StepsGalleryHeader } from "@vibe/wizard";
import { type ModalFooterWizardProps } from "./ModalFooterWizard.types";
import { getPropsForButton } from "../utils/getPropsForButton";

const ModalFooterWizard = forwardRef(
  (
    {
      primaryButton,
      secondaryButton,
      stepCount,
      activeStep,
      onStepClick,
      "data-testid": dataTestId,
      className,
      id
    }: ModalFooterWizardProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const primary = getPropsForButton(primaryButton, styles.primary);
    const secondary = getPropsForButton(secondaryButton, styles.secondary);

    const steps = (
      <StepsGalleryHeader
        stepsCount={stepCount}
        activeStepIndex={activeStep}
        onChangeActiveStep={(_, newStep) => onStepClick(newStep)}
        className={styles.stepDots}
      />
    );

    return (
      <ModalFooterBase
        ref={ref}
        className={className}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_FOOTER, id)}
        primaryButton={primary}
        secondaryButton={secondary}
        renderAction={steps}
      />
    );
  }
);

export default ModalFooterWizard;
