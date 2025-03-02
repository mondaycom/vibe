import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import BaseList from "../BaseList";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof BaseList>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: BaseList
});

export default {
  title: "Internal/BaseList",
  component: BaseList,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  tags: ["internal"]
} satisfies Meta<typeof BaseList>;

const baseListItemTemplate = createComponentTemplate(BaseList);
import { Email } from "@vibe/icons";
import person1 from "./person1.png";

const createOptions = (groupCount: number, optionsPerGroup: number) => {
  let index = 0;
  return Array.from({ length: groupCount }, (_, groupIndex) => ({
    label: `Group ${groupIndex + 1}`,
    options: Array.from({ length: optionsPerGroup }, (_, optionIndex) => ({
      label: `Option ${optionIndex + 1}`,
      index: index++,
      startElement: { type: "avatar", value: person1 },
      endElement: { type: "icon", value: Email }
    }))
  }));
};

export const Overview: Story = {
  render: baseListItemTemplate.bind({}),
  args: {
    highlightedIndex: 0,
    options: createOptions(4, 2)
  }
};
