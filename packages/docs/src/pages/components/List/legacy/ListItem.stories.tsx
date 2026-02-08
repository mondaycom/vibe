import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { ListItem, ListItemIcon, ListItemAvatar, Flex } from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../../utils/createStoryMetaSettingsDecorator";
import person1 from "../../Avatar/assets/person1.png";
import { Send } from "@vibe/icons";

const metaSettings = createStoryMetaSettingsDecorator({
  component: ListItem
});

export default {
  title: "Components/List/ListItem",
  component: ListItem,
  subcomponents: {
    ListItemIcon,
    ListItemAvatar
  },
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const listItemTemplate = createComponentTemplate(ListItem);

export const Overview = {
  render: listItemTemplate.bind({}),
  name: "Overview",
  args: { children: "List item" }
};

export const States = {
  render: () => (
    <Flex>
      <ListItem>Default state</ListItem>
      <ListItem disabled>Disabled state</ListItem>
      <ListItem selected>Selected state</ListItem>
    </Flex>
  ),

  name: "States"
};

export const Sizes = {
  render: () => (
    <Flex>
      <ListItem size="small">Small item</ListItem>
      <ListItem size="medium">Medium item</ListItem>
      <ListItem size="large">Large item</ListItem>
    </Flex>
  ),

  name: "Sizes"
};

export const WithIcon = {
  render: () => (
    <Flex>
      <ListItem>
        <ListItemIcon icon={Send} />
        Productivity
      </ListItem>
    </Flex>
  ),

  name: "List item with an icon"
};

export const WithAvatar = {
  render: () => (
    <ListItem>
      <ListItemAvatar src={person1} />
      Sophia Johnson
    </ListItem>
  ),

  name: "List item with an avatar"
};
