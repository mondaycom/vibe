import React, { cloneElement, useMemo } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Modal.module.scss";
import { useA11yDialog } from "./a11yDialog";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalHeader from "../ModalHeader/ModalHeader";
import useBodyScrollLock from "./useBodyScrollLock";
import useShowHideModal from "./useShowHideModal";

export const MODAL_WIDTH = {
  DEFAULT: "default",
  FULL_WIDTH: "full_width"
};

const isModalHeader = child => child.type === ModalHeader;
const isModalContent = child => child.type === ModalContent;
const isModalFooter = child => child.type === ModalFooter;

const Modal = ({
  classNames,
  id,
  show,
  title,
  description,
  onClose,
  alertDialog,
  children,
  triggerElement,
  width,
  hideCloseButton,
  closeButtonAriaLabel
}) => {
  const [instance, attr] = useA11yDialog({
    id,
    alertDialog
  });

  useBodyScrollLock({ instance });

  const { closeDialogIfNeeded } = useShowHideModal({ instance, show, triggerElement, onClose, alertDialog });

  const header = useMemo(() => {
    const { id } = attr.title;
    const header = React.Children.toArray(children).find(isModalHeader);
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
  }, [children, attr, title, description, hideCloseButton, closeButtonAriaLabel, onClose]);

  const content = useMemo(() => {
    return (
      React.Children.toArray(children).find(isModalContent) || (
        <ModalContent>
          {React.Children.toArray(children).filter(child => !isModalHeader(child) && !isModalFooter(child))}
        </ModalContent>
      )
    );
  }, [children]);

  const footer = useMemo(() => {
    return React.Children.toArray(children).find(isModalFooter) || null;
  }, [children]);

  const dialog = ReactDOM.createPortal(
    <div
      {...attr.container}
      className={cx(styles.container, classNames.container)}
      data-testid="monday-dialog-container"
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        onClick={closeDialogIfNeeded}
        className={cx(styles.overlay, classNames.overlay)}
        data-testid="monday-modal-overlay"
      />
      <div
        {...attr.dialog}
        className={cx(styles.dialog, classNames.modal, {
          [styles.default]: width === MODAL_WIDTH.DEFAULT,
          [styles.full]: width === MODAL_WIDTH.FULL_WIDTH
        })}
      >
        {header}
        {content}
        {footer}
      </div>
    </div>,
    document.body
  );

  return <>{dialog}</>;
};

Modal.propTypes = {
  /**
   * Id of the modal, used internaly and for accessibility
   */
  id: PropTypes.string.isRequired,
  /**
   * Show/hide the Dialog
   */
  show: PropTypes.bool.isRequired,
  /**
   * Title for the modal, mandatory when ModalHeader isn't provided in children
   */
  title: function (props, propName, componentName) {
    const { children, title } = props;
    const hasHeaderComponent = React.Children.toArray(children).some(isModalHeader);
    if (hasHeaderComponent) return;

    if (!title) {
      return new Error(
        `Title prop is mandatory for ${componentName} when HeaderModal isn't provided. Validation failed.`
      );
    } else {
      if (typeof props[propName] !== "string") {
        return new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed."`);
      }
    }
  },
  /**
   * Description for the modal title
   */
  description: PropTypes.string,
  /**
   * Called when the modal is closed (by close button/click outside/esc key
   */
  onClose: PropTypes.func.isRequired,
  /**
   *  Makes the dialog behave like a modal (preventing closing on click outside of
   *  ESC key)..
   */
  alertDialog: PropTypes.bool,
  /**
   *  Used for the fromOrigin animation
   */
  triggerElement: PropTypes.instanceOf(Element),
  /**
   *  Define modal width
   */
  width: PropTypes.oneOf(Object.values(MODAL_WIDTH)),
  /**
   *  Hide the modal close button
   */
  hideCloseButton: PropTypes.bool,
  /**
   *  Aria label for the close button
   */
  closeButtonAriaLabel: PropTypes.string,
  /**
   *  classNames for specific parts of the dialog
   */
  classNames: PropTypes.exact({
    container: PropTypes.string,
    overlay: PropTypes.string,
    modal: PropTypes.string
  }),
  /**
   *  Dialog content
   */
  children: PropTypes.node
};

Modal.Width = MODAL_WIDTH;

Modal.defaultProps = {
  triggerElement: null,
  alertDialog: false,
  children: undefined,
  width: MODAL_WIDTH.DEFAULT,
  classNames: {
    container: "",
    overlay: "",
    modal: ""
  },
  hideCloseButton: false,
  description: "",
  closeButtonAriaLabel: "close",
  title: ""
};

export default Modal;
