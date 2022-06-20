import { Button, Flex } from "components";
import React, { useRef, useState } from "react";

export const useStorybookModalHelper = props => {
  const [show, setShow] = useState(false);
  const buttonRef = useRef(null);
  const closeModal = () => setShow(false);

  const openDialogButton = (
    <Button onClick={() => setShow(true)} ref={buttonRef}>
      Open
    </Button>
  );

  const modalButtons = <ModalButtons closeModal={closeModal} />;

  const modalProps = {
    ...props,
    show,
    onClose: closeModal,
    triggerElement: buttonRef.current
  };

  return { modalProps, openDialogButton, modalButtons, show, closeModal, ref: buttonRef };
};

export const ModalButtons = ({ closeModal }) => {
  return (
    <div>
      <Flex justify={Flex.justify.END} gap={12}>
        <Button onClick={closeModal} kind={Button.kinds.SECONDARY}>
          Cancel
        </Button>
        <Button onClick={closeModal}>Confirm</Button>
      </Flex>
    </div>
  );
};
