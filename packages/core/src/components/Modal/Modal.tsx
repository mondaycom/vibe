import React, { cloneElement, FC, ReactElement, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import { useA11yDialog } from "./a11yDialog";
import ModalContent from "./ModalContent/ModalContent";
import ModalHeader from "./ModalHeader/ModalHeader";
import useBodyScrollLock from "./useBodyScrollLock";
import useShowHideModal from "./useShowHideModal";
import {
  isModalContent,
  isModalFooter,
  isModalHeader,
  ModalWidth as ModalWidthEnum,
  validateTitleProp
} from "./ModalHelper";
import { NOOP } from "../../utils/function-utils";
import { withStaticProps } from "../../types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./Modal.module.scss";
import { ModalWidth } from "./Modal.types";

export interface ModalProps {
  /**
   * Id of the modal, used internally and for accessibility
   */
  id?: string;
  "data-testid"?: string;
  /**
   * Show/hide the Dialog
   */
  show: boolean;
  /**
   * Heading for the modal, mandatory when ModalHeader isn't provided in children
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
  width?: ModalWidth | string;
  /**
   *  Aria label for the close button
   */
  closeButtonAriaLabel?: string;
  /**
   *  Add gaps between parts of the modal
   */
  contentSpacing?: boolean;
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
  /**
   * When `false`, the modal will remain in the DOM when closed
   */
  unmountOnClose?: boolean;
}

const Modal: FC<ModalProps> & { width?: typeof ModalWidthEnum } = ({
  classNames = { container: "", overlay: "", modal: "" },
  id,
  show,
  title = "",
  description = "",
  onClose = NOOP,
  alertDialog = false,
  children,
  triggerElement,
  width = "default",
  closeButtonAriaLabel = "Close",
  contentSpacing = false,
  zIndex = 10000,
  unmountOnClose = true,
  "data-testid": dataTestId
}: ModalProps) => {
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
  const { shouldShow } = useShowHideModal({
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
        closeButtonAriaLabel={closeButtonAriaLabel}
      />
    );
  }, [attr.title, childrenArray, title, description, onClose, closeButtonAriaLabel]);

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

  const customWidth = width !== "default" && width !== "full-width";

  const dialog = ReactDOM.createPortal(
    <div
      {...attr.container}
      className={cx(styles.container, classNames.container)}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL, id)}
      style={{ "--monday-modal-z-index": zIndex }}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        onClick={closeIfNotAlertType}
        className={cx(styles.overlay, classNames.overlay)}
        data-testid={ComponentDefaultTestId.MODAL_OVERLAY}
      />
      <div
        {...attr.dialog}
        className={cx(styles.dialog, classNames.modal, {
          [styles.default]: width === "default",
          [styles.full]: width === "full-width",
          [styles.spacing]: contentSpacing
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

  if (unmountOnClose && !shouldShow) {
    return null;
  }

  return ReactDOM.createPortal(dialog, document.body);
};

export default withStaticProps(Modal, {
  width: ModalWidthEnum
});
