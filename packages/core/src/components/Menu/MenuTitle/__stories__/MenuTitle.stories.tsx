import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../../storybook/functions/createStoryMetaSettingsDecorator";
import MenuTitle from "../MenuTitle";
import Menu from "../../Menu/Menu";
import MenuItem from "../../MenuItem/MenuItem";

const metaSettings = createStoryMetaSettingsDecorator({
  component: MenuTitle,
  enumPropNamesArray: ["captionPosition"]
});

export default {
  title: "Navigation/Menu/MenuTitle",
  component: MenuTitle,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const menuTitleTemplate = createComponentTemplate(MenuTitle);

export const Overview = {
  render: menuTitleTemplate.bind({}),
  name: "Overview",

  args: {
    caption: "Menu title"
  }
};

export const CaptionPlacements = {
  render: () => [
    <Menu key="top">
      <MenuTitle caption="Top caption" captionPosition={MenuTitle.positions.TOP} />
      <MenuItem title="Menu item" />
    </Menu>,
    <Menu key="center">
      <MenuTitle caption="Center caption" captionPosition={MenuTitle.positions.CENTER} />
      <MenuItem title="Menu item" />
    </Menu>
  ],
  name: "Caption placements"
};
