import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import BaseListItem from "../BaseListItem";
import { type Meta, type StoryObj } from "@storybook/react";
import { Email } from "@vibe/icons";
import person1 from "./person1.png";

type Story = StoryObj<typeof BaseListItem>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: BaseListItem
});

export default {
  title: "Internal/BaseListItem",
  component: BaseListItem,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  tags: ["internal"]
} satisfies Meta<typeof BaseListItem>;

const baseListItemTemplate = createComponentTemplate(BaseListItem);

export const Overview: Story = {
  render: baseListItemTemplate.bind({}),
  args: {
    item: {
      value: "item1",
      label: "This is a list item",
      startElement: { type: "avatar", value: person1 },
      endElement: { type: "icon", value: Email },
      tooltipProps: { content: "tooltip content" }
    }
  }
};
