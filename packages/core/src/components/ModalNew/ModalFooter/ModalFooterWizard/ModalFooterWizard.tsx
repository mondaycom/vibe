import React, { forwardRef } from "react";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import { ModalFooterWizardProps } from "./ModalFooterWizard.types";
import styles from "./ModalFooterWizard.module.scss";
import ModalFooterBase from "../ModalFooterBase/ModalFooterBase";
import Flex from "../../../Flex/Flex";

const ModalFooterWizard = forwardRef(
  (
    { primaryButton, secondaryButton, className, id, "data-testid": dataTestId }: ModalFooterWizardProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <ModalFooterBase
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
        className={className}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_FOOTER_WIZARD, id)}
        ref={ref}
      >
        <Flex justify={Flex.justify.CENTER} className={styles.stepper}>
          Stepper
        </Flex>
      </ModalFooterBase>
    );
  }
);

export default ModalFooterWizard;
