import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Dialog from "../../../../../components/Dialog/Dialog";
import DialogContentContainer from "../../../../../components/DialogContentContainer/DialogContentContainer";
import { ExampleContent } from "../../../../../components/Dialog/__stories__/helpers";
import IconButton from "../../../../../components/IconButton/IconButton";
import Info from "../../../../../components/Icon/Icons/components/Info";
import styles from "./dialog-description.module.scss";

export const DialogDescription = () => {
  const component = useMemo(() => {
    const modifiers =
      // for prevent dialog to move while scrolling
      [
        {
          name: "preventOverflow",
          options: {
            mainAxis: false
          }
        }
      ];
    return (
      <div className={styles.container}>
        <Dialog
          modifiers={modifiers}
          shouldShowOnMount
          showTrigger={[Dialog.hideShowTriggers.CLICK]}
          hideTrigger={[Dialog.hideShowTriggers.CLICK]}
          position={Dialog.positions.RIGHT}
          moveBy={{ main: 2, secondary: 0 }}
          content={
            <DialogContentContainer>
              <ExampleContent />
            </DialogContentContainer>
          }
        >
          <IconButton icon={Info} active kind={IconButton.kinds.SECONDARY} />
        </Dialog>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Dialog"
      href="/?path=/docs/popover-dialog--docs"
      description="The dialog component's purpose is to position a popup component nearby another element, such as any kind of a button."
    />
  );
};
