import React, { useCallback, useRef, useState } from "react";
import Button from "../../Button/Button";
import Modal from "../Modal";
import { Dialog, DialogContentContainer, Heading } from "../../../components";
import Flex from "../../Flex/Flex";
import { DEFAULT_DIALOG_SHOW_TRIGGER } from "../../SplitButton/SplitButtonConstants";
import ModalFooterButtons from "../ModalFooter/ModalFooterButtons/ModalFooterButtons";
import styles from "./Modal.stories.module.scss";
import cx from "classnames";
import { StorybookLink, Tip } from "vibe-storybook-components";

// internal custom hook to help with writing tests and stories.
export const useHelperOpenModalButton = ({
  title = "Open modal",
  setShow,
  openModalButtonRef,
  color = undefined,
  testId = undefined
}: any) => {
  return (
    <Button onClick={() => setShow(true)} ref={openModalButtonRef} color={color} data-testid={testId}>
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
}: any) => {
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
    <ModalFooterButtons
      primaryButtonText="Confirm"
      secondaryButtonText="Cancel"
      onPrimaryButtonClick={closeModal}
      onSecondaryButtonClick={closeModal}
    />
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
        contentSpacing
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
        className={cx(styles.modalDialogBadExample, styles.content)}
        direction={Flex.directions.COLUMN}
        justify={Flex.justify.START}
        align={Flex.align.START}
      >
        <Heading
          className={cx(styles.modalDialogBadExample, styles.heading)}
          type={Heading.types.h2}
          value="Dialog title"
        />
        Dialog content
        <ModalFooterButtons
          primaryButtonText="Confirm"
          secondaryButtonText="Cancel"
          className={cx(styles.modalDialogBadExample, styles.footer)}
          onPrimaryButtonClick={closeDialog}
          onSecondaryButtonClick={closeDialog}
        />
      </Flex>
    </DialogContentContainer>
  );
  return (
    <Dialog
      open={show}
      onClickOutside={closeDialog}
      wrapperClassName={cx(styles.modalDialogBadExample, styles.wrapper)}
      content={dialogContent}
      showTrigger={DEFAULT_DIALOG_SHOW_TRIGGER}
    >
      <Button onClick={onShow} color={Button.colors.NEGATIVE}>
        Click here
      </Button>
    </Dialog>
  );
};

export const TipAlertDialog = () => (
  <Tip>
    Set <code>alertDialog</code> to <code>true</code> in order to allow closing the modal only by the close buttons and
    not by ESC or by clicking outside.
  </Tip>
);

export const TipDialog = () => (
  <Tip>
    For creating a popover positioned next to other components, like customized menus, check out our{" "}
    <StorybookLink page="Components/Dialog/Dialog" size={StorybookLink.sizes.SMALL}>
      Dialog
    </StorybookLink>{" "}
    component.
  </Tip>
);

export const TipDevDropdownInsideModal = () => (
  <Tip title="Dev tip">
    {`If you wish to implement a dropdown inside a Modal container and need help displaying the dropdown's popovers
    correctly, read more about our dropdown in popovers technical pattern `}
    <StorybookLink
      page="Technical patterns/Dropdowns inside pop overs"
      story="Modal with damaged dropdown"
      size={StorybookLink.sizes.SMALL}
    >
      here.
    </StorybookLink>
  </Tip>
);
