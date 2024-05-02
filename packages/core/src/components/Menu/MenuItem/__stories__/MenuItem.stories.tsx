/* eslint-disable no-unused-vars */
import React from "react";
import MenuItem, { MenuItemProps } from "../MenuItem";
import Menu from "../../Menu/Menu";
import { Activity } from "../../../Icon/Icons";
import Icon from "../../../Icon/Icon";
import Tooltip from "../../../Tooltip/Tooltip";
import { createStoryMetaSettingsDecorator } from "../../../../storybook/functions/createStoryMetaSettingsDecorator";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<MenuItemProps>;

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
} satisfies Meta<typeof MenuItem>;

const menuItemTemplate = (args: MenuItemProps) => (
  <Menu>
    <MenuItem {...args} />
  </Menu>
);

export const Overview: Story = {
  render: menuItemTemplate.bind({}),
  args: {
    title: "Menu item"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const States: Story = {
  render: () => (
    <Menu>
      <MenuItem title="Regular menu item" />
      <MenuItem title="Selected menu item" selected />
      <MenuItem title="Disabled menu item" disabled />
    </Menu>
  )
};

export const Icons: Story = {
  render: () => (
    <Menu>
      <MenuItem title="SVG icon" icon={Activity} />
      <MenuItem title="Font icon" icon="fa fa-star" iconType={MenuItem.iconType.ICON_FONT} />
    </Menu>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Activity }
      }
    }
  }
};

export const Label: Story = {
  render: () => (
    <Menu>
      <MenuItem title="Menu item" label="New" />
    </Menu>
  ),
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const SubMenu: Story = {
  render: () => (
    <Menu>
      <MenuItem title="Opens on item hover">
        <Menu tabIndex={0} id="sub-menu">
          <MenuItem title="Sub menu item 1" onClick={() => alert("clicked on sub menu item 1")} />
          <MenuItem title="Sub menu item 2" onClick={() => alert("clicked on sub menu item 2")} />
          <MenuItem title="Sub menu item 3" onClick={() => alert("clicked on sub menu item 3")} />
        </Menu>
      </MenuItem>
      <MenuItem title="Opens on icon hover" splitMenuItem onClick={() => alert("clicked on menu item")}>
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

export const Overflow: Story = {
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
  )
};

export const TooltipStory: Story = {
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
  name: "Tooltip",
  parameters: {
    docs: {
      liveEdit: {
        scope: { Activity }
      }
    }
  }
};
