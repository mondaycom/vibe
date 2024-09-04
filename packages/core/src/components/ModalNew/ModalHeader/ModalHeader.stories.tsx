import React from "react";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Meta, StoryObj } from "@storybook/react";
import ModalHeader from "./ModalHeader";
import Text from "../../Text/Text";
import { Sun } from "../../Icon/Icons";

type Story = StoryObj<typeof ModalHeader>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: ModalHeader
});

export default {
  title: "Feedback/ModalNew/ModalHeader",
  component: ModalHeader,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  tags: ["internal"]
} satisfies Meta<typeof ModalHeader>;

export const Overview: Story = {
  render: () => <ModalHeader title="This is header title" />
};

export const WithStringSubtitle: Story = {
  render: () => <ModalHeader title="This is header title" description="This is description" />
};

export const WithStringSubtitleAndIcon: Story = {
  render: () => <ModalHeader title="This is header title" description="This is description" descriptionIcon={Sun} />
};

export const WithCustomSubtitle: Story = {
  render: () => (
    <ModalHeader
      title="This is header title"
      description={<Text type={Text.types.TEXT1}>This is custom description</Text>}
    />
  )
};

export const WithCustomSubtitleAndIcon: Story = {
  render: () => (
    <ModalHeader
      title="This is header title"
      description={<Text type={Text.types.TEXT1}>This is custom description</Text>}
      descriptionIcon={Sun}
    />
  )
};
