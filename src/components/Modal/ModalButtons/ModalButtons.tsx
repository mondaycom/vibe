import React, { FC, ReactElement } from "react";
import cx from "classnames";
import VibeComponentProps from "../../../types/VibeComponentProps";
import classes from "./ModalFooter.module.scss";
import { Button, Flex } from "../../index";

interface ModalButtonsProps extends VibeComponentProps {
  className: string;
  cancelCallback: () => void;
  confirmCallback: () => void;
  cancelText: string;
  confirmText: string;
}

const ModalButtons: FC<ModalButtonsProps> = ({
  className,
  cancelCallback,
  confirmCallback,
  cancelText,
  confirmText
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
