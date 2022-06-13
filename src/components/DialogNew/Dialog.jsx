import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Dialog.module.scss";
import { useA11yDialog } from "./a11YDialog";

const Dialog = ({ className, id, show, title, onHide, role }) => {
  // `instance` is the `a11y-dialog` instance.
  // `attr` is an object with the following keys:
  // - `container`: the dialog container
  // - `overlay`: the dialog overlay (sometimes called backdrop)
  // - `dialog`: the actual dialog box
  // - `title`: the dialog mandatory title
  // - `closeButton`:  the dialog close button
  const [instance, attr] = useA11yDialog({
    // The required HTML `id` attribute of the dialog element, internally used
    // a11y-dialog to manipulate the dialog.
    id: "my-dialog",
    // The optional `role` attribute of the dialog element, either `dialog`
    // (default) or `alertdialog` to make it a modal (preventing closing on
    // click outside of ESC key).
    role,
    // The required dialog title, mandatory in the document
    // to provide context to assistive technology.
    title,

    onHide
  });

  // useEffect(() => {
  //   instance?.on("hide", element => console.log(element));
  //   return () => {
  //     instance?.off("hide");
  //   };
  // }, [instance]);

  useEffect(() => {
    if (show) {
      instance?.show();
    } else {
      instance?.hide();
    }
  }, [show, instance]);

  const dialog = ReactDOM.createPortal(
    <div {...attr.container} className={styles.dialogContainer}>
      <div {...attr.overlay} className={styles.dialogOverlay} />

      <div {...attr.dialog} className={styles.dialogContent}>
        <p {...attr.title} className="dialog-title">
          {title}
        </p>

        <p>Your dialog content</p>

        <button {...attr.closeButton} type="button" className="dialog-close">
          Close dialog
        </button>
      </div>
    </div>,
    document.body
  );

  return (
    <div className={cx(styles.mondayStyleModalNew, className)} id={id}>
      {dialog}
    </div>
  );
};

Dialog.propTypes = {
  /**
   * Class name to be add to the wrapper
   */
  className: PropTypes.string,

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
   * either `dialog` (default) or `alertdialog` to make it a modal (preventing
   * closing on click outside of ESC key).
   */
  role: PropTypes.oneOf(["dialog", "alertdialog"])
};

Dialog.defaultProps = {
  className: "",
  role: "dialog"
};

export default Dialog;
