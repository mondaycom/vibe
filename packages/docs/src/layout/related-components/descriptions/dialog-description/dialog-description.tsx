import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Dialog, DialogContentContainer, IconButton, Flex, Skeleton } from "@vibe/core";
import { Info } from "@vibe/icons";
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
          showTrigger={["click"]}
          hideTrigger={["click"]}
          position="right"
          moveBy={{ main: 2, secondary: 0 }}
          content={
            <DialogContentContainer>
              <Flex
                direction="column"
                align="start"
                gap="small"
                style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
              >
                <Skeleton type="text" size="h1" fullWidth />
                {Array.from({ length: 3 }, (_value, index: number) => (
                  <Flex key={index} gap="small" style={{ width: "100%" }}>
                    <Skeleton type="circle" width={20} height={20} />
                    <Skeleton type="text" size="small" fullWidth />
                  </Flex>
                ))}
              </Flex>
            </DialogContentContainer>
          }
        >
          <IconButton icon={Info} active kind="secondary" />
        </Dialog>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Dialog"
      href="/?path=/docs/components-dialog--docs"
      description="The dialog component's purpose is to position a popup component nearby another element, such as any kind of a button."
    />
  );
};
