import React, { FC } from "react";
import VibeComponentProps from "../../../types/VibeComponentProps";
import Button from "../../Button/Button";
import Flex from "../../Flex/Flex";

interface ModalButtonsProps extends VibeComponentProps {
  className: string;
  cancelCallback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  confirmCallback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  cancelText: string;
  confirmText: string;
}

const ModalButtons: FC<ModalButtonsProps> = ({
  className,
  cancelCallback,
  confirmCallback,
  cancelText = "Cancel",
  confirmText = "Confirm"
}) => {
  return (
    <Flex justify={Flex.justify.END} gap={12} className={className}>
      <Button onClick={cancelCallback} kind={Button.kinds.SECONDARY}>
        {cancelText}
      </Button>
      <Button onClick={confirmCallback}>{confirmText}</Button>
    </Flex>
  );
};

export default ModalButtons;
