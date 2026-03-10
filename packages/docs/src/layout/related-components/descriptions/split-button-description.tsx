import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { SplitButton, SplitButtonMenu, MenuItem } from "@ezds/core";
import { Check, Announcement } from "@ezds/icons";

export const SplitButtonDescription = () => {
  const component = useMemo(
    () => (
      <SplitButton
        secondaryDialogContent={
          <SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Button
      </SplitButton>
    ),
    []
  );
  return (
    <RelatedComponent
      component={component}
      title="SplitButton"
      href="/?path=/docs/components-splitbutton--docs"
      description="Dual-function menu button offers a default action and a secondary action"
    />
  );
};
