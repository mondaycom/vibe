import React, { cloneElement, FC, ReactElement, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import { useA11yDialog } from "./a11yDialog";
import ModalContent from "./ModalContent/ModalContent";
import ModalHeader from "./ModalHeader/ModalHeader";
import useBodyScrollLock from "./useBodyScrollLock";
import useShowHideModal from "./useShowHideModal";
import { isModalContent, isModalFooter, isModalHeader, ModalWidth, validateTitleProp } from "./ModalHelper";
import { NOOP } from "../../utils/function-utils";
import styles from "./Modal.module.scss";

interface ModalProps {
  /**
   * Id of the modal, used internally and for accessibility
   */
  id?: string;
  /**
   * Show/hide the Dialog
   */
  show: boolean;
  /**
   * Title for the modal, mandatory when ModalHeader isn't provided in children
   */
  title?: string;
  /**
   * Description for the modal title
   */
  description?: string;
  /**
   * Called when the modal is closed (by close button/click outside/esc key)
   */
  onClose: () => void;
  /**
   *  Makes the dialog behave like a modal (preventing closing on click outside of
   *  ESC key)..
   */
  alertDialog?: boolean;
  /**
   *  Used for the fromOrigin animation
   */
  triggerElement?: Element;
  /**
   *  Set the modal's width. Can be one of the presets or any custom size
   */
  width?: typeof ModalWidth | string;
  /**
   *  Hide the modal close button
   */
  hideCloseButton?: boolean;
  /**
   *  Aria label for the close button
   */
  closeButtonAriaLabel?: string;
  /**
   *  classNames for specific parts of the dialog
   */
  classNames?: {
    container?: string;
    overlay?: string;
    modal?: string;
  };
  /**
   *  Dialog content
   */
  children?: ReactElement | ReactElement[];
  /**
   * z-index attribute of the container
   */
  zIndex?: number;
}

const Modal: FC<ModalProps> & { width?: typeof ModalWidth } = ({
  classNames = { container: "", overlay: "", modal: "" },
  id,
  show,
  title = "",
  description = "",
  onClose = NOOP,
  alertDialog = false,
  children,
  triggerElement,
  width = ModalWidth.DEFAULT,
  hideCloseButton = false,
  closeButtonAriaLabel = "Close",
  zIndex = 10000
}) => {
  const childrenArray: ReactElement[] = useMemo(
    () => (children ? (React.Children.toArray(children) as ReactElement[]) : []),
    [children]
  );
  validateTitleProp(title, childrenArray);

  const [instance, attr] = useA11yDialog({
    id,
    alertDialog
  });

  const closeIfNotAlertType = useCallback(() => {
    if (!alertDialog) {
      onClose?.();
    }
  }, [alertDialog, onClose]);

  // lock body scroll when modal is open
  useBodyScrollLock({ instance });

  // show/hide and animate the modal
  useShowHideModal({
    instance,
    show,
    triggerElement,
    onClose,
    alertDialog
  });

  const header = useMemo(() => {
    const { id } = attr.title;
    const header = childrenArray.find(isModalHeader);
    if (header) {
      return cloneElement(header, { id, closeModal: onClose });
    }

    return (
      <ModalHeader
        title={title}
        description={description}
        closeModal={onClose}
        id={id}
        hideCloseButton={hideCloseButton}
        closeButtonAriaLabel={closeButtonAriaLabel}
      />
    );
  }, [attr.title, childrenArray, title, description, onClose, hideCloseButton, closeButtonAriaLabel]);

  const content = useMemo(() => {
    return (
      childrenArray.find(isModalContent) || (
        <ModalContent>{childrenArray.filter(child => !isModalHeader(child) && !isModalFooter(child))}</ModalContent>
      )
    );
  }, [childrenArray]);

  const footer = useMemo(() => {
    return childrenArray.find(isModalFooter) || null;
  }, [childrenArray]);

  const customWidth = width !== ModalWidth.DEFAULT && width !== ModalWidth.FULL_WIDTH;

  const dialog = ReactDOM.createPortal(
    <div
      {...attr.container}
      className={cx(styles.container, classNames.container)}
      data-testid="monday-dialog-container"
      style={{ "--monday-modal-z-index": zIndex }}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        onClick={closeIfNotAlertType}
        className={cx(styles.overlay, classNames.overlay)}
        data-testid="monday-modal-overlay"
      />
      <div
        {...attr.dialog}
        className={cx(styles.dialog, classNames.modal, {
          [styles.default]: width === ModalWidth.DEFAULT,
          [styles.full]: width === ModalWidth.FULL_WIDTH
        })}
        style={{ width: customWidth ? width : null }}
      >
        {header}
        {content}
        {footer}
      </div>
    </div>,
    document.body
  );

  return ReactDOM.createPortal(dialog, document.body);
};

Object.assign(Modal, {
  width: ModalWidth
});

export default Modal;
