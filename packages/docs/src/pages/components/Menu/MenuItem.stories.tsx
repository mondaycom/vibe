import React from "react";
import { Menu, MenuItem, type MenuItemProps, Flex, Text } from "@vibe/core";
import { Activity } from "@vibe/icons";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { type Meta, type StoryObj } from "@storybook/react";

type Story = StoryObj<MenuItemProps>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: MenuItem,
  iconPropNamesArray: ["icon", "rightIcon"]
});

export default {
  title: "Components/Menu/MenuItem",
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
    <Flex gap="large" align="start" justify="start">
      <Flex direction="column" gap="medium">
        <Text>Left icon</Text>
        <Menu>
          <MenuItem title="SVG icon" icon={Activity} />
          <MenuItem title="Font icon" icon="fa fa-star" type="font" />
        </Menu>
      </Flex>
      <Flex direction="column" gap="medium">
        <Text>Right icon</Text>
        <Menu>
          <MenuItem title="SVG right icon" rightIcon={Activity} />
          <MenuItem title="Font right icon" rightIcon="fa fa-star" rightType="font" />
        </Menu>
      </Flex>
    </Flex>
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
      <MenuItem title="Menu item with bottom tooltip" tooltipContent="I am tooltip" tooltipPosition="bottom" />
      <MenuItem
        title="Menu item with icon and tooltip"
        tooltipContent="Menu item with icon and tooltip"
        tooltipPosition="left"
        icon={Activity}
        type="svg"
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
