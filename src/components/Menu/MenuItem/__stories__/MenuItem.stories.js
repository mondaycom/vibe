/* eslint-disable no-unused-vars */
import React from "react";
import MenuItem from "../MenuItem";
import Menu from "../../Menu/Menu";
import { Activity } from "../../../Icon/Icons";
import Icon from "../../../Icon/Icon";
import Tooltip from "../../../Tooltip/Tooltip";
import { createStoryMetaSettingsDecorator } from "../../../../storybook/functions/createStoryMetaSettingsDecorator";

const metaSettings = createStoryMetaSettingsDecorator({
  component: MenuItem,
  enumPropNamesArray: ["tooltipPosition"],
  iconPropNamesArray: ["icon"]
});

export default {
  title: "Navigation/Menu/MenuItem",
  component: MenuItem,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const menuItemTemplate = args => (
  <Menu>
    <MenuItem {...args} />
  </Menu>
);

export const Overview = {
  render: menuItemTemplate.bind({}),
  name: "Overview",

  args: {
    title: "Menu item"
  }
};

export const States = {
  render: () => (
    <Menu>
      <MenuItem title="Regular menu item" />
      <MenuItem title="Selected menu item" selected />
      <MenuItem title="Disabled menu item" disabled />
    </Menu>
  ),
  name: "States"
};

export const Icons = {
  render: () => (
    <Menu>
      <MenuItem title="SVG icon" icon={Activity} />
      <MenuItem title="Font icon" icon="fa fa-star" iconType={MenuItem.iconType.ICON_FONT} />
    </Menu>
  ),
  name: "Icons"
};

export const Label = {
  render: () => (
    <Menu>
      <MenuItem title="Menu item" label="New" />
    </Menu>
  ),
  name: "Label",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const SubMenu = {
  render: () => (
    <Menu>
      <MenuItem title="Opens on item hover">
        <Menu tabIndex={0} id="sub-menu">
          <MenuItem title="Sub menu item 1" onClick={() => alert("clicked on sub menu item 1")} />
          <MenuItem title="Sub menu item 2" onClick={() => alert("clicked on sub menu item 2")} />
          <MenuItem title="Sub menu item 3" onClick={() => alert("clicked on sub menu item 3")} />
        </Menu>
      </MenuItem>
      <MenuItem title="Opens on icon hover" splitMenuItem={true} onClick={() => alert("clicked on menu item")}>
        <Menu tabIndex={0} id="sub-menu">
          <MenuItem title="Sub menu item 1" onClick={() => alert("clicked on sub menu item 1")} />
          <MenuItem title="Sub menu item 2" onClick={() => alert("clicked on sub menu item 2")} />
          <MenuItem title="Sub menu item 3" onClick={() => alert("clicked on sub menu item 3")} />
        </Menu>
      </MenuItem>
    </Menu>
  ),
  name: "Sub menu"
};

export const Overflow = {
  render: () => (
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
  ),
  name: "Overflow"
};

export const TooltipStory = {
  render: () => (
    <Menu>
      <MenuItem title="Menu item with tooltip" tooltipContent="I am tooltip" />
      <MenuItem title="Disabled menu item with tooltip" disabled={true} disableReason="I am a disabled tooltip" />
      <MenuItem title="I am a very very very very long text please hover me to get a tooltip" />
      <MenuItem
        title="Menu item with bottom tooltip"
        tooltipContent="I am tooltip"
        tooltipPosition={MenuItem.tooltipPositions.BOTTOM}
      />
      <MenuItem
        title="Menu item with icon and tooltip"
        tooltipContent="Menu item with icon and tooltip"
        tooltipPosition={Tooltip.positions.LEFT}
        icon={Activity}
        iconType={Icon.type.SVG}
      />
    </Menu>
  ),
  name: "Tooltip"
};
