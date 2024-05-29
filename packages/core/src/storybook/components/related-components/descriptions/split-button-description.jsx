import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import SplitButton from "../../../../components/SplitButton/SplitButton";
import SplitButtonMenu from "../../../../components/SplitButton/SplitButtonMenu/SplitButtonMenu";
import MenuItem from "../../../../components/Menu/MenuItem/MenuItem";
import { Check, Announcement } from "../../../../components/Icon/Icons";

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
      href="/?path=/docs/buttons-splitbutton--docs"
      description="Dual-function menu button offers a default action and a secondary action"
    />
  );
};
