import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { MenuTitle, Menu, Flex, MenuItem, DialogContentContainer } from "@vibe/core";

const metaSettings = createStoryMetaSettingsDecorator({
  component: MenuTitle
});

export default {
  title: "Components/Menu/MenuTitle",
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
  render: () => (
    <Flex gap={80}>
      <DialogContentContainer>
        <Menu>
          <MenuTitle caption="Left menu title" captionPosition="top" />
          <MenuItem title="Item 1" />
          <MenuItem title="Item 2" />
          <MenuItem title="Item 3" />
        </Menu>
      </DialogContentContainer>
      <DialogContentContainer>
        <Menu>
          <MenuTitle caption="Center menu title" captionPosition="center" />
          <MenuItem title="Item 1" />
          <MenuItem title="Item 2" />
          <MenuItem title="Item 3" />
        </Menu>
      </DialogContentContainer>
    </Flex>
  ),
  name: "Caption placements"
};
