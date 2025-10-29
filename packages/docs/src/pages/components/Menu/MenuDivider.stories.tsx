import React from "react";
import { MenuDivider, Menu, MenuItem } from "@vibe/core";
import { createComponentTemplate } from "vibe-storybook-components";

export default {
  title: "Components/Menu/MenuDivider",
  component: MenuDivider
};

const menuDividerTemplate = createComponentTemplate(MenuDivider);

export const Overview = {
  render: menuDividerTemplate.bind({}),
  name: "Overview"
};

export const MenuWithDivider = {
  render: () => (
    <div
      style={{
        width: 200
      }}
    >
      <Menu>
        <MenuItem title="Menu item 1" />
        <MenuDivider />
        <MenuItem title="Menu item 2" />
      </Menu>
    </div>
  ),

  name: "Menu with divider"
};

export const SubMenuWithDivider = {
  render: () => (
    <div
      style={{
        width: 200,
        height: 90
      }}
    >
      <Menu>
        <MenuItem title="Item with sub menu">
          <Menu>
            <MenuItem title="Item 1" />
            <MenuDivider />
            <MenuItem title="Item 2" />
          </Menu>
        </MenuItem>
      </Menu>
    </div>
  ),

  name: "Sub menu with divider"
};
