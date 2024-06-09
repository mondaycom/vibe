import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import TextArea from "../TextArea";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Decorator, Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof TextArea>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: TextArea
});

export default {
  title: "Inputs/TextArea",
  component: TextArea,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof TextArea>;

const withFixedWidth: Decorator = Story => (
  <div style={{ width: 300 }}>
    <Story />
  </div>
);

const withGrid: Decorator = Story => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 300px)",
      gap: "16px",
      width: "100%"
    }}
  >
    <Story />
  </div>
);

const textAreaTemplate = createComponentTemplate(TextArea);

export const Overview: Story = {
  render: textAreaTemplate.bind({}),
  args: {
    label: "Text area label",
    helpText: "Helper text"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  },
  decorators: [withFixedWidth]
};

export const Sizes: Story = {
  render: () => (
    <>
      <TextArea size="large" label="Large text area" />
      <TextArea size="small" label="Small text area" />
    </>
  ),
  decorators: [withGrid]
};

export const States: Story = {
  render: () => (
    <>
      <TextArea size="small" label="Success state" success />
      <TextArea size="small" label="Error state" error />
      <TextArea size="small" label="Disabled state" disabled />
      <TextArea size="small" label="Read only state" readOnly />
    </>
  ),
  decorators: [withGrid]
};

export const Validation: Story = {
  render: () => <TextArea size="small" label="Text area label" error required helpText="Validation text" />,
  decorators: [withFixedWidth]
};
