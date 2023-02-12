import Button from "../../Button/Button";
import React, { useRef, useState } from "react";

// internal custom hook to help with writing tests and stories.
export const createHelperOpenModalButton = ({ title = "Open modal", setShow, openModalButtonRef }) => {
  return (
    <Button onClick={() => setShow(true)} ref={openModalButtonRef}>
      {title}
    </Button>
  );
};

// internal custom hook to help with writing tests and stories.
export const useModalHelper = ({ openButtonTitle = "Open", openOnStart = false, ...props } = {}) => {
  const [show, setShow] = useState(openOnStart);
  const buttonRef = useRef(null);
  const closeModal = () => setShow(false);

  const openModalButton = (
    <Button onClick={() => setShow(true)} ref={buttonRef}>
      {openButtonTitle}
    </Button>
  );

  const modalProps = {
    ...props,
    show,
    onClose: closeModal,
    triggerElement: buttonRef.current
  };

  return { modalProps, openModalButton, modalButtons: <div />, show, closeModal, ref: buttonRef };
};
