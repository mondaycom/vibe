/* eslint-disable no-unused-vars */
import React from "react";
import {
  Activity,
  Settings,
  Invite,
  Email,
  Info,
  Delete,
  Favorite,
  Emoji,
  Code,
  Feedback,
  Calendar,
  Filter,
  Wand
} from "../../../Icon/Icons";
import { DialogContentContainer, Menu, MenuItem, Search, MenuTitle, MenuDivider, MenuGridItem } from "../../..";
import classes from "./Menu.stories.module.scss";
import { DummyNavigableGrid } from "../../../GridKeyboardNavigationContext/__stories__/useGridKeyboardNavigationContext.stories";

export const menuTemplate = args => (
  <Menu {...args}>
    <MenuItem title="Menu item 1" />
    <MenuItem title="Menu item 2" disabled />
    <MenuItem title="More item 3" />
  </Menu>
);

export const menuSizesTemplate = args => [
  <DialogContentContainer key="small">
    <Menu {...args} size={Menu.sizes.SMALL}>
      <MenuTitle caption="Small menu" />
      <MenuDivider />
      <MenuItem title="Menu item 1" />
      <MenuItem title="Menu item 2" disabled />
      <MenuItem title="More item 3" />
    </Menu>
  </DialogContentContainer>,
  <DialogContentContainer key="md">
    <Menu {...args} size={Menu.sizes.MEDIUM}>
      <MenuTitle caption="Medium menu" />
      <MenuDivider />
      <MenuItem title="Menu item 1" />
      <MenuItem title="Menu item 2" disabled />
      <MenuItem title="More item 3" />
    </Menu>
  </DialogContentContainer>,
  <DialogContentContainer key="lg">
    <Menu {...args} size={Menu.sizes.LARGE}>
      <MenuTitle caption="Large menu" />
      <MenuDivider />
      <MenuItem title="Menu item 1" />
      <MenuItem title="Menu item 2" disabled />
      <MenuItem title="More item 3" />
    </Menu>
  </DialogContentContainer>
];

export const menuWithIconsTemplate = args => (
  <DialogContentContainer>
    <Menu {...args}>
      <MenuItem icon={Email} title="Send" />
      <MenuItem icon={Delete} title="Delete" disabled />
      <MenuItem icon={Info} title="More info" />
    </Menu>
  </DialogContentContainer>
);

export const menuWithSubMenuTemplate = args => (
  <DialogContentContainer>
    <Menu {...args}>
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
);

export const menuWith2DepthSubMenuTemplate = args => (
  <DialogContentContainer>
    <Menu {...args}>
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
);

export const menuWithGridItems = args => (
  <div className={classes["menu-long-story-wrapper"]}>
    <DialogContentContainer>
      <Menu {...args}>
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
  </div>
);

export const ComponentRuleSimpleActions = () => (
  <DialogContentContainer>
    <Menu>
      <MenuItem title="Item 1" icon={Calendar} />
      <MenuItem title="Item 2" icon={Wand} />
      <MenuItem title="Item 3" icon={Filter} />
    </Menu>
  </DialogContentContainer>
);

export const ComponentRuleWithSearch = () => (
  <DialogContentContainer>
    <Search size={Search.sizes.SMALL} wrapperClassName={classes["component-rule-search"]} />
    <Menu>
      <MenuItem title="Item 1" icon={Calendar} />
      <MenuItem title="Item 2" icon={Wand} />
      <MenuItem title="Item 3" icon={Filter} />
    </Menu>
  </DialogContentContainer>
);

export const ComponentRuleDefaultWidth = () => (
  <DialogContentContainer>
    <Menu>
      <MenuItem title="Item 1" icon={Calendar} />
      <MenuItem title="Item 2" icon={Filter} />
    </Menu>
  </DialogContentContainer>
);

export const ComponentRuleLargeWidth = () => (
  <DialogContentContainer className={classes["component-rule-large-dialog"]}>
    <Menu className={classes["component-rule-large-menu"]}>
      <MenuItem title="Item 1" icon={Calendar} />
      <MenuItem title="Item 2" icon={Filter} />
    </Menu>
  </DialogContentContainer>
);
