import MenuButton from "../MenuButton";
import { noop as NOOP } from "lodash-es";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import { Menu, MenuItem, MenuTitle } from "../../index";
import { DropdownChevronDown, Favorite, Moon, Sun } from "../../Icon/Icons";
import MoveArrowDown from "../../Icon/Icons/components/MoveArrowDown";

const metaSettings = createStoryMetaSettingsDecorator({
  component: MenuButton,
  iconPropNamesArray: ["component"],
  actionPropsArray: ["onMenuHide", "onMenuShow"],
  ignoreControlsPropNamesArray: ["children"]
});

export default {
  title: "Buttons/MenuButton",
  component: MenuButton,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const menuButtonTemplate = createComponentTemplate(MenuButton);

export const Overview = {
  render: menuButtonTemplate.bind({}),
  name: "Overview",

  args: {
    children: (
      <Menu id="menu" size={Menu.sizes.MEDIUM}>
        <MenuTitle caption="Look up, you might see" captionPosition={MenuTitle.positions.TOP} />
        <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
        <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />
        <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />
      </Menu>
    )
  }
};

export const Sizes = {
  render: () => (
    <MenuButton size={MenuButton.sizes.XXS}>
      <Menu id="menu" size={Menu.sizes.MEDIUM}>
        <MenuTitle caption="Look up, you might see" captionPosition={MenuTitle.positions.TOP} />
        <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
      </Menu>
    </MenuButton>
  ),

  name: "Sizes"
};

export const DifferentIcon = {
  render: () => (
    <MenuButton component={MoveArrowDown}>
      <Menu id="menu" size={Menu.sizes.MEDIUM}>
        <MenuTitle caption="Look up, you might see" captionPosition={MenuTitle.positions.TOP} />
        <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
      </Menu>
    </MenuButton>
  ),

  name: "Different Icon"
};

export const WithText = {
  render: () => (
    <div
      style={{
        width: 200
      }}
    >
      <MenuButton text="Open">
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuTitle caption="Look up, you might see" captionPosition={MenuTitle.positions.TOP} />
          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
        </Menu>
      </MenuButton>
    </div>
  ),

  name: "With Text"
};

export const WithTextAndIconAtTheEnd = {
  render: () => (
    <div
      style={{
        width: 200
      }}
    >
      <MenuButton text="Open" component={DropdownChevronDown} componentPosition={MenuButton.componentPositions.END}>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuTitle caption="Look up, you might see" captionPosition={MenuTitle.positions.TOP} />
          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
        </Menu>
      </MenuButton>
    </div>
  ),

  name: "With Text and Icon at the end"
};

export const Disabled = {
  render: () => (
    <MenuButton disabled tooltipContent="This action is not available now">
      <Menu id="menu" size={Menu.sizes.MEDIUM}>
        <MenuTitle caption="Look up, you might see" captionPosition={MenuTitle.positions.TOP} />
        <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
      </Menu>
    </MenuButton>
  ),

  name: "Disabled"
};
