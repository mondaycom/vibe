import React from "react";
import A11yDialogLib from "a11y-dialog";
import { A11yDialogType } from "./ModalHelper";

const useA11yDialogInstance = (): [A11yDialogType, (node: Element) => void] => {
  const [instance, setInstance] = React.useState(null);
  const container = React.useCallback((node: Element) => {
    if (node !== null) setInstance(new A11yDialogLib(node));
  }, []);

  return [instance, container];
};

export const useA11yDialog = ({ id, alertDialog }: { id: string; alertDialog: boolean }) => {
  const [instance, ref] = useA11yDialogInstance();
  const role = alertDialog ? "alertdialog" : "dialog";
  const titleId = id + "-title";

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
      dialog: { role: "document" },
      // Using a paragraph with accessibility mapping can be useful to work
      // around SEO concerns of having multiple <h1> per page.
      title: { id: titleId }
    }
  ];
};
