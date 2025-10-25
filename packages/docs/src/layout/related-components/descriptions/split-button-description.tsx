import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { SplitButton, SplitButtonMenu, MenuItem } from "@vibe/core";
import { Check, Announcement } from "@vibe/icons";

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
