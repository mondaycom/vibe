import React, { forwardRef } from "react";
import VibeComponentProps from "../../../../types/VibeComponentProps";
import VibeComponent from "../../../../types/VibeComponent";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import Flex from "../../../Flex/Flex";
import Button from "../../../Button/Button";
import ModalFooter from "../ModalFooter";

export interface ModalFooterButtonsProps extends VibeComponentProps {
  primaryButtonText: string;
  secondaryButtonText?: string;
  disablePrimaryButton?: boolean;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const ModalFooterButtons: VibeComponent<ModalFooterButtonsProps> = forwardRef(
  (
    {
      primaryButtonText,
      secondaryButtonText,
      disablePrimaryButton,
      onPrimaryButtonClick,
      onSecondaryButtonClick,
      className,
      id,
      "data-testid": dataTestId
    },
    // As ModalFooter does not currently forward refs
    // eslint-disable-next-line
    ref
  ) => {
    return (
      <ModalFooter
        id={id}
        className={className}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_FOOTER_BUTTONS, id)}
      >
        <Flex justify={Flex.justify.END} gap={Flex.gaps.SMALL}>
          {secondaryButtonText && (
            <Button onClick={onSecondaryButtonClick} kind={Button.kinds.TERTIARY}>
              {secondaryButtonText}
            </Button>
          )}
          <Button onClick={onPrimaryButtonClick} disabled={disablePrimaryButton}>
            {primaryButtonText}
          </Button>
        </Flex>
      </ModalFooter>
    );
  }
);

export default ModalFooterButtons;
