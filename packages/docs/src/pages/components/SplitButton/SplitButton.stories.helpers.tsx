import { StorybookLink, Tip } from "vibe-storybook-components";
import { Announcement, Check } from "@vibe/icons";
import { SplitButtonMenu, MenuItem } from "@vibe/core";
import React from "react";

export const TipMenu = () => (
  <Tip>
    If the actions in the menu are not related to each other, consider using a{" "}
    <StorybookLink page="Components/Menu" size={StorybookLink.sizes.SMALL}>
      Menu
    </StorybookLink>{" "}
    component.
  </Tip>
);

const DialogDefault = [
  { icon: Check, text: "Hey" },
  { icon: Announcement, text: "There" }
];

export const SplitButtonExampleDialog = ({ options = DialogDefault }) => {
  return (
    <div>
      {!options ? (
        <>I would be anything you want to be</>
      ) : (
        <SplitButtonMenu id="split-menu">
          {options.map(option => (
            <MenuItem key={option.text} icon={option.icon} title={option.text} />
          ))}
        </SplitButtonMenu>
      )}
    </div>
  );
};
