import React, { useCallback, useRef, useState } from "react";
import Button from "../../Button/Button";
import Modal from "../Modal";
import { Dialog, DialogContentContainer, Heading, ModalButtons, ModalFooter } from "../../../components";
import Flex from "../../Flex/Flex";
import { DEFAULT_DIALOG_SHOW_TRIGGER } from "../../SplitButton/SplitButtonConstants";

// internal custom hook to help with writing tests and stories.
export const useHelperOpenModalButton = ({ title = "Open modal", setShow, openModalButtonRef, color }) => {
  return (
    <Button onClick={() => setShow(true)} ref={openModalButtonRef} color={color}>
      {title}
    </Button>
  );
};

// This is internal helper method for creating basic button which change the show state to true in order to display the modal
// This method is not part of our external API and not required for creating function modal component
export const ModalExampleWrapper = ({
  bestPractice,
  modalTitle,
  buttonTitle,
  children,
  hideFooter,
  ...otherModalProps
}) => {
  // Control if modal is display or hidden
  const [show, setShow] = useState(false);
  const openModalButtonRef = useRef(null);
  const closeModal = useCallback(() => {
    setShow(false);
  }, []);
  const openModalColor = bestPractice ? Button.colors.POSITIVE : Button.colors.NEGATIVE;
  const openModalButton = useHelperOpenModalButton({
    title: buttonTitle || modalTitle,
    setShow,
    openModalButtonRef,
    color: openModalColor
  });
  const footer = hideFooter ? null : (
    <ModalFooter>
      <ModalButtons onCancel={closeModal} onConfirm={closeModal} />
    </ModalFooter>
  );

  return (
    <>
      {openModalButton}
      <Modal
        id={"story-book-modal"}
        title={modalTitle}
        triggerElement={openModalButtonRef.current}
        // is modal show or hidden
        show={show}
        // set show state to close
        onClose={closeModal}
        closeButtonAriaLabel={"close"}
        width={Modal.width.DEFAULT}
        {...otherModalProps}
      >
        {children}
        {footer}
      </Modal>
    </>
  );
};

export const DialogAsModalBadExample = () => {
  const [show, setShow] = useState(false);
  const closeDialog = useCallback(() => {
    setShow(false);
  }, []);
  const onShow = useCallback(() => {
    setShow(true);
  }, []);
  const dialogContent = (
    <DialogContentContainer style={{ width: "500px", margin: "auto" }}>
      <Flex direction={Flex.directions.COLUMN} justify={Flex.justify.START} align={Flex.align.START}>
        <Heading value="Dialog title"></Heading>
        <p>Dialog content</p>
        <Flex justify={Flex.justify.END} style={{ width: "100%" }} gap={12}>
          <Button onClick={closeDialog} kind={Button.kinds.SECONDARY}>
            Cancel
          </Button>
          <Button onClick={closeDialog}>Confirm</Button>
        </Flex>
      </Flex>
    </DialogContentContainer>
  );
  return (
    <Dialog
      open={show}
      onClickOutside={closeDialog}
      wrapperClassName="monday-storybook-modal-dialog-wrapper"
      content={dialogContent}
      showTrigger={DEFAULT_DIALOG_SHOW_TRIGGER}
    >
      <Button onClick={onShow} color={Button.colors.NEGATIVE}>
        Centered Dialog component
      </Button>
    </Dialog>
  );
};
