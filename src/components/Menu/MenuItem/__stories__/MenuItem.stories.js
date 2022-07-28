/* eslint-disable no-unused-vars */
import React from "react";
import MenuItem from "../MenuItem";
import Menu from "../../Menu/Menu";
import { Activity, Bolt, Settings } from "../../../Icon/Icons";
import Icon from "../../../Icon/Icon";

export const menuItemTemplate = args => (
  <Menu>
    <MenuItem {...args} />
  </Menu>
);

export const menuItemStatesTemplate = args => (
  <Menu>
    <MenuItem title="Regular menu item" />
    <MenuItem title="Selected menu item" selected />
    <MenuItem title="Disabled menu item" disabled />
  </Menu>
);

export const menuItemIconsTemplate = args => (
  <Menu>
    <MenuItem title="SVG icon" icon={Activity} />
    <MenuItem title="Font icon" icon="fa fa-star" iconType={MenuItem.iconType.ICON_FONT} />
  </Menu>
);

export const menuItemIconsWithColorsTemplate = args => {
  return (
    <Menu>
      <MenuItem
        title="My Item (stuck red)"
        icon={Settings}
        iconType={Icon.type.SVG}
        iconBackgroundColor="var(--color-stuck-red)"
      />
      <MenuItem
        title="My Item (done green)"
        icon={Activity}
        iconType={Icon.type.SVG}
        iconBackgroundColor="var(--color-done-green)"
      />
      <MenuItem
        title="My Item (indigo)"
        icon={Bolt}
        iconType={Icon.type.SVG}
        iconBackgroundColor="var(--color-indigo)"
      />
    </Menu>
  );
};

export const menuItemOverflowTemplate = args => {
  return (
    <Menu>
      <MenuItem title="short text" />
      <MenuItem title="long text - bla bla bla bla bla bla bla bla bla bla bla" />
      <MenuItem title="long text with sub menu - bla bla bla bla bla bla bla bla bla bla bla">
        <Menu tabIndex={0} id="sub-menu">
          <MenuItem title="Sub menu item 1" />
          <MenuItem title="Sub menu item 2" />
          <MenuItem title="Sub menu item 3" />
        </Menu>
      </MenuItem>
    </Menu>
  );
};

export const menuItemTooltipTemplate = args => {
  return (
    <Menu>
      <MenuItem title="Menu item with tooltip" tooltipContent="I am tooltip" />
      <MenuItem title="Disabled menu item with tooltip" disabled={true} disableReason="I am a disabled tooltip" />
      <MenuItem title="I am a very very very very long text please hover me to get a tooltip" />
      <MenuItem
        title="Menu item with bottom tooltip"
        tooltipContent="I am tooltip"
        tooltipPosition={MenuItem.tooltipPositions.BOTTOM}
      />
    </Menu>
  );
};
