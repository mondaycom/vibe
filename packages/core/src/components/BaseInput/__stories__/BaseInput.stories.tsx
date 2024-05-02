import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import BaseInput from "../BaseInput";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof BaseInput>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: BaseInput
});

export default {
  title: "Internal/BaseInput",
  component: BaseInput,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  tags: ["internal"]
} satisfies Meta<typeof BaseInput>;

const baseInputTemplate = createComponentTemplate(BaseInput);

export const Overview: Story = {
  render: baseInputTemplate.bind({})
};
