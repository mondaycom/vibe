import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import BaseListItem from "../BaseListItem";
import { Meta, StoryObj } from "@storybook/react";
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
} as Meta<typeof BaseListItem>;

const baseListItemTemplate = createComponentTemplate(BaseListItem);

export const Overview: Story = {
  render: baseListItemTemplate.bind({}),
  args: {
    item: {
      label: "This is a list item",
      startElement: { type: "avatar" as const, value: person1 },
      endElement: { type: "icon" as const, value: Email },
      tooltipProps: { content: "tooltip content" }
    }
  }
};
