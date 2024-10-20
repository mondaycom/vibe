import React, { forwardRef } from "react";
import { VibeComponentProps } from "../../../../types";
import cx from "classnames";
import ModalFooterBase from "../ModalFooterBase/ModalFooterBase";
import { ModalFooterBaseProps } from "../ModalFooterBase/ModalFooterBase.types";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import styles from "./ModalFooterWizard.module.scss";
import { StepsGalleryHeader } from "../../../Steps/StepsGalleryHeader";

export interface ModalFooterWizardProps
  extends Required<Pick<ModalFooterBaseProps, "primaryButton" | "secondaryButton">>,
    VibeComponentProps {
  stepCount: number;
  activeStep: number;
  onDotClick: (e: React.MouseEvent, stepIndex: number) => void;
}

const ModalFooterWizard = forwardRef(
  (
    {
      primaryButton,
      secondaryButton,
      stepCount,
      activeStep,
      onDotClick,
      "data-testid": dataTestId,
      className,
      id
    }: ModalFooterWizardProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const primary = { ...primaryButton, className: cx(primaryButton.className, styles.primary) };
    const secondary = secondaryButton
      ? { ...secondaryButton, className: cx(secondaryButton.className, styles.secondary) }
      : undefined;
    const steps = (
      <StepsGalleryHeader
        stepsCount={stepCount}
        activeStepIndex={activeStep}
        onChangeActiveStep={onDotClick}
        className={styles.stepDots}
      />
    );

    return (
      <ModalFooterBase
        ref={ref}
        className={className}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_FOOTER, id)}
        primaryButton={primary}
        secondaryButton={secondary}
        renderAction={steps}
      />
    );
  }
);

export default ModalFooterWizard;
