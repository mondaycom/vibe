import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Dialog.module.scss";
import { useA11yDialog } from "./a11YDialog";
import { IconButton } from "components";
import { CloseSmall } from "components/Icon/Icons";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const DIALOG_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  FULL_WIDTH: "full_width"
};

const Dialog = ({ classNames, id, show, title, onHide, isAlertDialog, children, triggerElement, size }) => {
  const [instance, attr] = useA11yDialog({
    id,
    title,
    onHide,
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
    <div {...attr.container} className={cx(styles.dialogContainer, classNames.container)}>
      <div {...attr.overlay} className={cx(styles.dialogOverlay, classNames.overlay)} />
      <div className={styles.dialogContentWrapper}>
        <div
          {...attr.dialog}
          className={cx(styles.dialogContent, classNames.dialog, {
            [styles.small]: size === DIALOG_SIZES.SMALL,
            [styles.medium]: size === DIALOG_SIZES.MEDIUM,
            [styles.large]: size === DIALOG_SIZES.LARGE,
            [styles.full]: size === DIALOG_SIZES.FULL_WIDTH
          })}
        >
          <div className={styles.titleWrapper}>
            <p {...attr.title} className={cx(classNames.title, styles.dialogTitle)}>
              {title}
            </p>

            <IconButton
              key="xxs"
              {...attr.closeButton}
              ariaLabel="close"
              className={cx(classNames.closeButton)}
              icon={props => <CloseSmall {...props} tabIndex={-1} />}
              kind={IconButton.kinds.TERTIARY}
              size={IconButton.sizes.SMALL}
            />
          </div>
          <div className={cx(styles.innerContentWrapper, classNames.content)}>{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );

  return <>{dialog}</>;
};

Dialog.propTypes = {
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
  onHide: PropTypes.func.isRequired,
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
   *  classNames for specific parts of the dialog
   */
  classNames: PropTypes.exact({
    container: PropTypes.string,
    overlay: PropTypes.string,
    dialog: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    closeButton: PropTypes.string
  }),
  /**
   *  Dialog content
   */
  children: PropTypes.node
};

Dialog.defaultProps = {
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
  }
};

export default Dialog;
