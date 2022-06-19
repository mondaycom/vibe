import React from "react";
import A11yDialogLib from "a11y-dialog";
import PropTypes from "prop-types";

const useA11yDialogInstance = () => {
  const [instance, setInstance] = React.useState(null);
  const container = React.useCallback(node => {
    if (node !== null) setInstance(new A11yDialogLib(node));
  }, []);

  return [instance, container];
};

export const useA11yDialog = props => {
  const [instance, ref] = useA11yDialogInstance();
  const { onHide, isAlertDialog, id } = props;
  const role = isAlertDialog ? "alertdialog" : "dialog";
  const titleId = props.titleId || id + "-title";

  // Destroy the `a11y-dialog` instance when unmounting the component.
  React.useEffect(() => {
    return () => {
      if (instance) instance.destroy();
    };
  }, [instance]);

  return [
    instance,
    {
      container: {
        id,
        ref,
        role,
        tabIndex: -1,
        "aria-modal": true,
        "aria-hidden": true,
        "aria-labelledby": titleId
      },
      overlay: { onClick: isAlertDialog ? undefined : onHide },
      dialog: { role: "document" },
      closeButton: { type: "button", onClick: onHide },
      // Using a paragraph with accessibility mapping can be useful to work
      // around SEO concerns of having multiple <h1> per page.
      title: { role: "heading", "aria-level": 1, id: titleId }
    }
  ];
};

useA11yDialog.propTypes = {
  // Makes the dialog behave like a modal (preventing closing on click outside of
  // ESC key).
  isAlertDialog: PropTypes.bool,

  // The HTML `id` attribute of the dialog element, internally used by
  // a11y-dialog to manipulate the dialog.
  id: PropTypes.string.isRequired,

  // The title of the dialog, mandatory in the document to provide context to
  // assistive technology. Could be hidden (while remaining accessible) with
  // CSS though.
  title: PropTypes.node.isRequired,

  // The HTML `id` attribute of the dialog’s title element, used by assistive
  // technologies to provide context and meaning to the dialog window. Falls
  // back to the `${this.props.id}-title` if not provided.
  titleId: PropTypes.string
};
