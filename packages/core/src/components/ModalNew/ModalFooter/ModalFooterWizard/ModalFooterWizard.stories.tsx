import React from "react";
import { createStoryMetaSettingsDecorator } from "../../../../storybook";
import { Meta, StoryObj } from "@storybook/react";
import ModalFooterWizard from "./ModalFooterWizard";

type Story = StoryObj<typeof ModalFooterWizard>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: ModalFooterWizard
});

export default {
  title: "Feedback/ModalNew/Footer/ModalFooterWizard",
  component: ModalFooterWizard,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof ModalFooterWizard>;

export const Overview: Story = {
  render: () => (
    <ModalFooterWizard
      primaryButton={{ text: "Primary CTA", onClick: () => {} }}
      secondaryButton={{ text: "Secondary CTA", onClick: () => {} }}
    />
  )
};
