import React from "react";
import { withPerformance } from "storybook-addon-performance";
import MenuDivider from "../MenuDivider";
import MenuItem from "../../MenuItem/MenuItem";
import Menu from "../../Menu/Menu";

export const Sandbox = () => (
  <div style={{ width: 200 }}>
    <Menu>
      <MenuItem title="bla bla" />
      <MenuDivider />
      <MenuItem title="bla blo" />
    </Menu>
  </div>
);

export const Submenu = () => (
  <div style={{ width: 200 }}>
    <Menu>
      <MenuItem title="Item with sub menu">
        <Menu>
          <MenuItem title="bla bla" />
          <MenuDivider />
          <MenuItem title="bla blo" />
        </Menu>
      </MenuItem>
    </Menu>
  </div>
);

export default {
  title: "Components|Menu/MenuDivider",
  component: MenuDivider,
  decorators: [withPerformance]
};
