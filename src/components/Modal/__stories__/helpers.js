import React, { useCallback, useRef, useState } from "react";
import Button from "../../Button/Button";
import Modal from "../Modal";
import { Dialog, DialogContentContainer, Heading, ModalFooter } from "../../../components";
import Flex from "../../Flex/Flex";
import { DEFAULT_DIALOG_SHOW_TRIGGER } from "../../SplitButton/SplitButtonConstants";

// internal custom hook to help with writing tests and stories.
export const useHelperOpenModalButton = ({ title = "Open modal", setShow, openModalButtonRef, color, testId }) => {
  return (
    <Button onClick={() => setShow(true)} ref={openModalButtonRef} color={color} dataTestId={testId}>
      {title}
    </Button>
  );
};

// Internal component for create all boilerplate needed for implementing modal example to the "Do and don't" section
export const ModalExampleWrapper = ({
  bestPractice,
  modalTitle,
  buttonTitle,
  children,
  hideFooter,
  show: defaultShow = false,
  openModalTestId,
  ...otherModalProps
}) => {
  // Control if modal is display or hidden
  const [show, setShow] = useState(defaultShow);
  const openModalButtonRef = useRef(null);
  const closeModal = useCallback(() => {
    setShow(false);
  }, []);
  const openModalColor = bestPractice ? Button.colors.POSITIVE : Button.colors.NEGATIVE;
  const openModalButton = useHelperOpenModalButton({
    testId: openModalTestId,
    title: buttonTitle || modalTitle,
    setShow,
    openModalButtonRef,
    color: openModalColor
  });
  const footer = hideFooter ? null : (
    <ModalFooter>
      <Flex justify={Flex.justify.END} gap={12}>
        <Button onClick={closeModal} kind={Button.kinds.TERTIARY}>
          Cancel
        </Button>
        <Button onClick={closeModal}>Confirm</Button>
      </Flex>
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
      <Flex
        className="monday-storybook-modal-dialog-bad-example-content"
        direction={Flex.directions.COLUMN}
        justify={Flex.justify.START}
        align={Flex.align.START}
      >
        <Heading
          className="monday-storybook-modal-dialog-bad-example-heading"
          type={Heading.types.h2}
          value="Dialog title"
        />
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
      wrapperClassName="monday-storybook-modal-dialog-bad-example-wrapper"
      content={dialogContent}
      showTrigger={DEFAULT_DIALOG_SHOW_TRIGGER}
    >
      <Button onClick={onShow} color={Button.colors.NEGATIVE}>
        Click here
      </Button>
    </Dialog>
  );
};
