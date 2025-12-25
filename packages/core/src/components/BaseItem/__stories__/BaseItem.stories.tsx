import { createComponentTemplate } from "vibe-storybook-components";
import BaseItem from "../BaseItem";
import { type Meta, type StoryObj } from "@storybook/react";
import { Email } from "@vibe/icons";
import person1 from "./person1.png";

type Story = StoryObj<typeof BaseItem>;

export default {
  title: "Internal/BaseItem",
  component: BaseItem,
  tags: ["internal"]
} satisfies Meta<typeof BaseItem>;

const baseItemTemplate = createComponentTemplate(BaseItem);

export const Overview: Story = {
  render: baseItemTemplate.bind({}),
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

