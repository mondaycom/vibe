import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Dialog.module.scss";
import { useA11yDialog } from "./a11YDialog";
import { IconButton } from "components";
import { CloseSmall } from "components/Icon/Icons";

const Dialog = ({ className, classNames, id, show, title, onHide, role, children }) => {
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
    <div {...attr.container} className={cx(styles.dialogContainer, classNames.container)}>
      <div {...attr.overlay} className={cx(styles.dialogOverlay, classNames.overlay)} />

      <div {...attr.dialog} className={cx(styles.dialogContent, classNames.dialog)}>
        <div className={styles.titleWrapper}>
          <p {...attr.title} className={cx(classNames.title, styles.dialogTitle)}>
            {title}
          </p>

          <IconButton
            key="xxs"
            {...attr.closeButton}
            className={cx(classNames.close)}
            icon={CloseSmall}
            kind={IconButton.kinds.TERTIARY}
            size={IconButton.sizes.SMALL}
            // ariaLabel="My xxs IconButton"
          />
        </div>

        {children}
      </div>
    </div>,
    document.body
  );

  return (
    <div className={className} id={id}>
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
   *  Makes the dialog behave like a modal (preventing closing on click outside of
   *  ESC key)..
   */
  isAlertDialog: PropTypes.bool,
  /**
   *  classNames for specific parts of the dialog
   *  ESC key)..
   */
  classNames: PropTypes.exact({
    container: PropTypes.string,
    overlay: PropTypes.string,
    dialog: PropTypes.string,
    title: PropTypes.string,
    closeButton: PropTypes.string
  }),
  /**
   *  Dialog content
   */
  children: PropTypes.node
};

Dialog.defaultProps = {
  className: "",
  isAlertDialog: false,
  children: undefined,
  classNames: {
    container: "",
    overlay: "",
    dialog: "",
    title: "",
    closeButton: ""
  }
};

export default Dialog;
