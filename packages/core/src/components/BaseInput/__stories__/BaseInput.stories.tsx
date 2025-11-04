import { createComponentTemplate } from "vibe-storybook-components";
import BaseInput from "../BaseInput";
import { type Meta, type StoryObj } from "@storybook/react";

type Story = StoryObj<typeof BaseInput>;

export default {
  title: "Internal/BaseInput",
  component: BaseInput,
  tags: ["internal"]
} satisfies Meta<typeof BaseInput>;

const baseInputTemplate = createComponentTemplate(BaseInput);

export const Overview: Story = {
  render: baseInputTemplate.bind({})
};
