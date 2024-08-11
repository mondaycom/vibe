import React from "react";
import { createStoryMetaSettingsDecorator } from "../../../../storybook";
import { Meta, StoryObj } from "@storybook/react";
import ModalFooterBasic from "./ModalFooterBasic";
import Checkbox from "../../../Checkbox/Checkbox";

type Story = StoryObj<typeof ModalFooterBasic>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: ModalFooterBasic
});

export default {
  title: "Feedback/ModalNew/Footer/ModalFooterBasic",
  component: ModalFooterBasic,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof ModalFooterBasic>;

export const Overview: Story = {
  render: () => <ModalFooterBasic primaryButton={{ text: "Primary CTA", onClick: () => {} }} />
};

export const WithSecondary: Story = {
  render: () => (
    <ModalFooterBasic
      primaryButton={{ text: "Primary CTA", onClick: () => {} }}
      secondaryButton={{ text: "Secondary CTA", onClick: () => {} }}
    />
  )
};

export const WithSideAction: Story = {
  render: () => (
    <ModalFooterBasic
      primaryButton={{ text: "Primary CTA", onClick: () => {} }}
      renderSideAction={<Checkbox defaultChecked label="Don't show again" />}
    />
  )
};

export const WithSecondaryAndSideAction: Story = {
  render: () => (
    <ModalFooterBasic
      primaryButton={{ text: "Primary CTA", onClick: () => {} }}
      secondaryButton={{ text: "Secondary CTA", onClick: () => {} }}
      renderSideAction={<Checkbox defaultChecked label="Don't show again" />}
    />
  )
};
