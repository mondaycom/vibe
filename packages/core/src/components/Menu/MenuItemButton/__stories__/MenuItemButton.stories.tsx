import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../../storybook";
import MenuItemButton from "../MenuItemButton";
import Menu from "../../Menu/Menu";
import { Invite } from "@vibe/icons";

const metaSettings = createStoryMetaSettingsDecorator({
  component: MenuItemButton,
  iconPropNamesArray: ["leftIcon", "rightIcon"]
});

const menuItemButtonTemplate = createComponentTemplate(MenuItemButton);

export default {
  title: "Navigation/Menu/MenuItemButton",
  component: MenuItemButton,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: menuItemButtonTemplate.bind({}),
  name: "Overview",

  args: {
    children: "Menu item children"
  }
};

export const States = {
  render: () => [
    <Menu key="Primary">
      <MenuItemButton kind="primary">Primary</MenuItemButton>
    </Menu>,
    <Menu key="Secondary">
      <MenuItemButton kind="secondary">Secondary</MenuItemButton>
    </Menu>,
    <Menu key="Tertiary">
      <MenuItemButton kind="tertiary">Tertiary</MenuItemButton>
    </Menu>
  ],
  name: "States"
};

export const Disabled = {
  render: () => [
    <Menu key="disabled-Primary">
      <MenuItemButton kind="primary" disabled disableReason="Disabled reason">
        Primary
      </MenuItemButton>
    </Menu>,
    <Menu key="disabled-Secondary">
      <MenuItemButton kind="secondary" disabled disableReason="Disabled reason">
        Secondary
      </MenuItemButton>
    </Menu>,
    <Menu key="disabled-Tertiary">
      <MenuItemButton kind="tertiary" disabled disableReason="Disabled reason">
        Tertiary
      </MenuItemButton>
    </Menu>
  ],
  name: "Disabled"
};

export const Icons = {
  render: () => [
    <Menu key="left">
      <MenuItemButton leftIcon={Invite}>Left icon</MenuItemButton>
    </Menu>,
    <Menu key="right">
      <MenuItemButton rightIcon={Invite}>Right icon</MenuItemButton>
    </Menu>
  ],
  name: "Icons"
};
