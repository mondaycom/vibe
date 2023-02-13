import React, { FC } from "react";
import VibeComponentProps from "../../../types/VibeComponentProps";
import Button from "../../Button/Button";
import Flex from "../../Flex/Flex";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";

interface ModalButtonsProps extends VibeComponentProps {
  className: string;
  onCancel: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onConfirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
  cancelText: string;
  confirmText: string;
}

const ModalButtons: FC<ModalButtonsProps> = ({
  className,
  onCancel,
  onConfirm,
  cancelText = "Cancel",
  confirmText = "Confirm"
}) => {
  return (
    <Flex justify={Flex.justify.END} gap={12} className={className}>
      <Button
        onClick={onCancel}
        kind={Button.kinds.SECONDARY}
        dataTestId={getTestId(ComponentDefaultTestId.MODAL_BUTTONS, "cancel")}
      >
        {cancelText}
      </Button>
      <Button onClick={onConfirm} dataTestId={getTestId(ComponentDefaultTestId.MODAL_BUTTONS, "confirm")}>
        {confirmText}
      </Button>
    </Flex>
  );
};

export default ModalButtons;
