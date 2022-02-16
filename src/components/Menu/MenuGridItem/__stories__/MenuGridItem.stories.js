import { DialogContentContainer, Menu, MenuItem, MenuTitle } from "../../..";
import { DummyNavigableGrid } from "../../../GridKeyboardNavigationContext/__stories__/useGridKeyboardNavigationContext.stories";
import { Activity, Code, Favorite, Feedback, Invite, Settings } from "../../../Icon/Icons";
import MenuGridItem from "../MenuGridItem";
import "./MenuGridItem.stories.scss";

export const menuGridItemTemplate = args => (
  <Menu>
    <MenuItem title="This is a menu button" />
    <MenuTitle caption="Try keyboard navigation :)" />
    <MenuGridItem {...args}>
      <DummyNavigableGrid itemsCount={8} numberOfItemsInLine={3} withoutBorder />
    </MenuGridItem>
  </Menu>
);

export const menuGridItemWithDisabled = args => (
  <DialogContentContainer>
    <Menu>
      <MenuTitle caption="This grid has disabled items" />
      <MenuGridItem {...args}>
        <DummyNavigableGrid itemsCount={4} numberOfItemsInLine={2} disabledIndexes={[2]} withoutBorder />
      </MenuGridItem>
      <MenuItem title="I'm a regular item" />
      <MenuTitle caption="The grid below is disabled entirely" />
      <MenuGridItem disabled {...args}>
        <DummyNavigableGrid itemsCount={4} numberOfItemsInLine={2} withoutBorder />
      </MenuGridItem>
    </Menu>
  </DialogContentContainer>
);

export const menuGridItemInSubMenus = args => (
  <div className="storybook-menu-grid-item-long-story">
    <DialogContentContainer>
      <Menu>
        <MenuItem title="Menu item" icon={Favorite} />
        <MenuTitle caption="Top level grid item" />
        <MenuItem title="Hover me to see the sub menu" icon={Activity}>
          <Menu>
            <MenuItem icon={Feedback} title="More info" />
            <MenuTitle caption="1st level grid item" />
            <MenuGridItem {...args}>
              <DummyNavigableGrid itemsCount={6} numberOfItemsInLine={3} withoutBorder />
            </MenuGridItem>
            <MenuItem icon={Code} title="Hover me to see the sub menu">
              <Menu>
                <MenuTitle caption="2nd level grid item" />
                <MenuGridItem {...args}>
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
