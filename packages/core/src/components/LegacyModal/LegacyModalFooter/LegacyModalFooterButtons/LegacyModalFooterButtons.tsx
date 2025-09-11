import React, { forwardRef } from "react";
import { type VibeComponentProps } from "../../../../types";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import Flex from "../../../Flex/Flex";
import { Button } from "@vibe/button";
import LegacyModalFooter from "../LegacyModalFooter";

export interface LegacyModalFooterButtonsProps extends VibeComponentProps {
  primaryButtonText: string;
  secondaryButtonText?: string;
  disablePrimaryButton?: boolean;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const LegacyModalFooterButtons = forwardRef(
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
    }: LegacyModalFooterButtonsProps,
    // As ModalFooter does not currently forward refs
    // eslint-disable-next-line
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    return (
      <LegacyModalFooter
        id={id}
        className={className}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_FOOTER_BUTTONS, id)}
      >
        <Flex justify="end" gap="small">
          {secondaryButtonText && (
            <Button onClick={onSecondaryButtonClick} kind="tertiary">
              {secondaryButtonText}
            </Button>
          )}
          <Button onClick={onPrimaryButtonClick} disabled={disablePrimaryButton}>
            {primaryButtonText}
          </Button>
        </Flex>
      </LegacyModalFooter>
    );
  }
);

Object.assign(LegacyModalFooterButtons, {
  displayName: "ModalFooterButtons"
});

export default LegacyModalFooterButtons;
