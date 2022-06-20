import React, { useCallback, useEffect, cloneElement } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Modal.module.scss";
import { useA11yDialog } from "./a11YDialog";
import { ModalContent, ModalFooter, ModalHeader } from "components";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const DIALOG_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  FULL_WIDTH: "full_width"
};

const Modal = ({
  classNames,
  id,
  show,
  title,
  onClose,
  isAlertDialog,
  children,
  triggerElement,
  size,
  hideCloseButton,
  closeButtonAriaLabel
}) => {
  const [instance, attr] = useA11yDialog({
    id,
    onClose,
    isAlertDialog
  });

  // clear all scroll locks on unmount (just to be safe)
  useEffect(() => {
    return () => clearAllBodyScrollLocks();
  }, []);

  // lock body on modal show
  useEffect(() => {
    instance?.on("show", () => disableBodyScroll(instance.$el, { reserveScrollBarGap: true }));
    instance?.on("hide", () => enableBodyScroll(instance.$el));
    return () => {
      instance?.off("show");
      instance?.off("hide");
    };
  }, [instance]);

  const getAnimationProps = useCallback(
    (hideAnimation = false) => {
      let animationStart, animationEnd;
      if (triggerElement) {
        const { top: sourceTop, left: sourceLeft } = triggerElement.getBoundingClientRect();
        const {
          top: destinationTop,
          left: destinationLeft,
          width,
          height
        } = instance?.$el.childNodes[1].getBoundingClientRect();

        animationStart = {
          transform: `translate(${sourceLeft - destinationLeft - width / 2}px, ${
            sourceTop - destinationTop - height / 2
          }px) scale(0.2)`,
          opacity: 0.2
        };
        animationEnd = { transform: `translate(0, 0) scale(1)`, opacity: 1 };
      } else {
        animationStart = {
          transform: `scale(0.2)`,
          opacity: 0.2
        };
        animationEnd = { transform: `scale(1)`, opacity: 1 };
      }

      return [
        hideAnimation ? [animationEnd, animationStart] : [animationStart, animationEnd],
        {
          duration: hideAnimation ? 100 : 200,
          easing: "ease-in"
        }
      ];
    },
    [instance, triggerElement]
  );

  const getHeader = () => {
    // const header = React.Children.toArray(children).find(child => child?.props?.mdxType === ModalHeader.displayName);

    const header = React.Children.toArray(children).find(
      child => child.type === ModalHeader || child?.props?.mdxType === ModalHeader.displayName
    );

    if (header) {
      return cloneElement(header, { attr });
    }

    return (
      <ModalHeader
        title={title}
        attr={attr}
        hideCloseButton={hideCloseButton}
        closeButtonAriaLabel={closeButtonAriaLabel}
      />
    );
  };

  const getContent = () => {
    return (
      React.Children.toArray(children).find(
        child => child.type === ModalContent || child.props.mdxType === ModalContent.displayName
      ) || (
        <ModalContent>
          {React.Children.toArray(children).filter(
            child =>
              child.type !== ModalHeader &&
              child.type !== ModalFooter &&
              child?.props?.mdxType !== ModalHeader.displayName &&
              child?.props?.mdxType !== ModalFooter.displayName
          )}
        </ModalContent>
      )
    );
  };

  const getFooter = () => {
    return (
      React.Children.toArray(children).find(
        child => child.type === ModalFooter || child.props.mdxType === ModalFooter.displayName
      ) || null
    );
  };

  // show/hide and animate the modal
  useEffect(() => {
    if (show) {
      instance?.show();
      instance?.$el.childNodes[1].animate(...getAnimationProps());
    } else {
      const animation = instance?.$el.childNodes[1].animate(...getAnimationProps(true));
      animation?.finished.then(() => instance?.hide());
    }
  }, [show, instance, getAnimationProps]);

  const dialog = ReactDOM.createPortal(
    <div {...attr.container} className={cx(styles.container, classNames.container)}>
      <div {...attr.overlay} className={cx(styles.overlay, classNames.overlay)} />
      <div
        {...attr.dialog}
        className={cx(styles.dialog, classNames.modal, {
          [styles.small]: size === DIALOG_SIZES.SMALL,
          [styles.medium]: size === DIALOG_SIZES.MEDIUM,
          [styles.large]: size === DIALOG_SIZES.LARGE,
          [styles.full]: size === DIALOG_SIZES.FULL_WIDTH
        })}
      >
        {getHeader()}
        {getContent()}
        {getFooter()}
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
   * Title for the modal, required for accessibility
   */
  title: PropTypes.string.isRequired,

  /**
   * Called when the modal is hidden (by close button/click outside/esc key
   */
  onClose: PropTypes.func.isRequired,
  /**
   *  Makes the dialog behave like a modal (preventing closing on click outside of
   *  ESC key)..
   */
  isAlertDialog: PropTypes.bool,
  /**
   *  used for the fromOrigin animation
   */
  triggerElement: PropTypes.instanceOf(Element),
  /**
   *  used for the fromOrigin animation
   */
  size: PropTypes.oneOf(Object.values(DIALOG_SIZES)),
  /**
   *  used for the fromOrigin animation
   */
  hideCloseButton: PropTypes.bool,
  /**
   *  used for the fromOrigin animation
   */
  closeButtonAriaLabel: PropTypes.string,
  /**
   *  classNames for specific parts of the dialog
   */
  classNames: PropTypes.exact({
    container: PropTypes.string,
    overlay: PropTypes.string,
    modal: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    closeButton: PropTypes.string
  }),
  /**
   *  Dialog content
   */
  children: PropTypes.node
};

Modal.defaultProps = {
  triggerElement: null,
  isAlertDialog: false,
  children: undefined,
  size: DIALOG_SIZES.MEDIUM,
  classNames: {
    container: "",
    overlay: "",
    dialog: "",
    title: "",
    content: "",
    closeButton: ""
  },
  hideCloseButton: false,
  closeButtonAriaLabel: "close"
};

export default Modal;
