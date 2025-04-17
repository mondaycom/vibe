import React from "react";
import { Activity, Code, Delete, Email, Emoji, Favorite, Feedback, Info, Invite, Settings } from "@vibe/icons";
import { DialogContentContainer, Flex, Menu, MenuDivider, MenuGridItem, MenuItem, MenuTitle } from "../../..";
import { DummyNavigableGrid } from "../../../GridKeyboardNavigationContext/__stories__/useGridKeyboardNavigationContext.stories.helpers";
import { menuWithTwoDepthsSuite } from "../__tests__/Menu.interactions";
import { MenuProps } from "../../..";

export default {
  title: "Components/Menu/Menu",
  component: Menu
};

const menuTemplate = (args: MenuProps) => (
  <Menu {...args}>
    <MenuItem title="Menu item 1" />
    <MenuItem title="Menu item 2" disabled />
    <MenuItem title="Menu item 3" />
  </Menu>
);

export const Overview = {
  render: menuTemplate.bind({}),
  name: "Overview",
  args: {},
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Sizes = {
  render: () => [
    <Flex gap="medium">
      <DialogContentContainer key="small">
        <Menu size={Menu.sizes.SMALL}>
          <MenuTitle caption="Small menu" />
          <MenuDivider />
          <MenuItem title="Menu item 1" />
          <MenuItem title="Menu item 2" disabled />
          <MenuItem title="Menu item 3" />
        </Menu>
      </DialogContentContainer>
      <DialogContentContainer key="md">
        <Menu size={Menu.sizes.MEDIUM}>
          <MenuTitle caption="Medium menu" />
          <MenuDivider />
          <MenuItem title="Menu item 1" />
          <MenuItem title="Menu item 2" disabled />
          <MenuItem title="Menu item 3" />
        </Menu>
      </DialogContentContainer>
      <DialogContentContainer key="lg">
        <Menu size={Menu.sizes.LARGE}>
          <MenuTitle caption="Large menu" />
          <MenuDivider />
          <MenuItem title="Menu item 1" />
          <MenuItem title="Menu item 2" disabled />
          <MenuItem title="Menu item 3" />
        </Menu>
      </DialogContentContainer>
    </Flex>
  ],
  name: "Sizes",

  args: {
    size: Menu.sizes.SMALL
  }
};

export const MenuWithIcons = {
  render: () => (
    <Flex>
      <DialogContentContainer>
        <Menu>
          <MenuItem icon={Email} title="Send" />
          <MenuItem icon={Delete} title="Delete" disabled />
          <MenuItem icon={Info} title="More info" />
        </Menu>
      </DialogContentContainer>
    </Flex>
  ),
  name: "Menu with icons"
};

export const MenuWithSubMenu = {
  render: () => (
    <Flex>
      <DialogContentContainer>
        <Menu>
          <MenuItem title="Menu item without sub menu" icon={Activity} />
          <MenuItem title="With Sub menu" icon={Activity}>
            <Menu>
              <MenuItem icon={Email} title="Send" />
              <MenuItem icon={Delete} title="Delete" disabled />
              <MenuItem icon={Info} title="More info" />
            </Menu>
          </MenuItem>
          <MenuItem title="Another item" icon={Settings} />
        </Menu>
      </DialogContentContainer>
    </Flex>
  ),
  name: "Menu with sub menu"
};

export const MenuWithGridItemsAndSubMenu = {
  render: () => (
    <Flex align="start" style={{ height: "500px" }}>
      <DialogContentContainer>
        <Menu>
          <MenuItem title="Menu item" icon={Favorite} />
          <MenuTitle caption="Top level grid item" />
          <MenuItem title="With Sub menu" icon={Activity}>
            <Menu>
              <MenuItem icon={Feedback} title="More info" />
              <MenuTitle caption="1st level grid item" />
              <MenuGridItem>
                <DummyNavigableGrid itemsCount={6} numberOfItemsInLine={3} withoutBorder />
              </MenuGridItem>
              <MenuItem icon={Code} title="With Sub menu">
                <Menu>
                  <MenuTitle caption="2nd level grid item" />
                  <MenuGridItem>
                    <DummyNavigableGrid itemsCount={6} numberOfItemsInLine={3} withoutBorder />
                  </MenuGridItem>
                  <MenuItem icon={Invite} title="Another sub sub item" />
                  <MenuItem icon={Settings} title="More sub sub items" />
                </Menu>
              </MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem title="Another item" icon={Settings} />
        </Menu>
      </DialogContentContainer>
    </Flex>
  ),
  name: "Menu with grid items and sub menu"
};

export const MenuWith2DepthSubMenu = {
  render: () => (
    <Flex>
      <DialogContentContainer>
        <Menu>
          <MenuItem title="Menu item" icon={Favorite} />
          <MenuItem title="With Sub menu" icon={Activity}>
            <Menu>
              <MenuItem icon={Emoji} title="Send" />
              <MenuItem icon={Code} title="Sub Sub menu">
                <Menu>
                  <MenuItem icon={Email} title="Sub sub item" />
                  <MenuItem icon={Invite} title="Another sub sub item" />
                  <MenuItem icon={Settings} title="More sub sub items" />
                </Menu>
              </MenuItem>
              <MenuItem icon={Feedback} title="More info" />
            </Menu>
          </MenuItem>
          <MenuItem title="Another item" icon={Settings} />
        </Menu>
      </DialogContentContainer>
    </Flex>
  ),
  name: "Menu with 2-depth sub menu",
  play: menuWithTwoDepthsSuite
};
