import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import ListItem from "../../ListItem/ListItem";
import ListItemIcon from "../../ListItemIcon/ListItemIcon";
import ListItemAvatar from "../../ListItemAvatar/ListItemAvatar";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { person1 } from "../../Avatar/__stories__/assets";
import { Send } from "../../Icon/Icons";

const metaSettings = createStoryMetaSettingsDecorator({
  component: ListItem,
  enumPropNamesArray: ["size", "component"]
});

export default {
  title: "Navigation/List/ListItem",
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
    <>
      <ListItem>Default state</ListItem>
      <ListItem disabled>Disabled state</ListItem>
      <ListItem selected>Selected state</ListItem>
    </>
  ),

  name: "States"
};

export const Sizes = {
  render: () => (
    <>
      <ListItem size={ListItem.sizes.SMALL}>Small item</ListItem>
      <ListItem size={ListItem.sizes.MEDIUM}>Medium item</ListItem>
      <ListItem size={ListItem.sizes.LARGE}>Large item</ListItem>
    </>
  ),

  name: "Sizes"
};

export const WithIcon = {
  render: () => (
    <>
      <ListItem>
        <ListItemIcon icon={Send} />
        Productivity
      </ListItem>
    </>
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
