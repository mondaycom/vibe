import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import TextArea from "../TextArea";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { type Decorator, type Meta, type StoryObj } from "@storybook/react";

type Story = StoryObj<typeof TextArea>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: TextArea
});

export default {
  title: "Components/TextArea",
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
    id: "overview-textarea",
    "aria-label": "Overview text area",
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
      <TextArea id="sizes-large" aria-label="Large text area" size="large" label="Large text area" />
      <TextArea id="sizes-small" aria-label="Small text area" size="small" label="Small text area" />
    </>
  ),
  decorators: [withGrid]
};

export const States: Story = {
  render: () => (
    <>
      <TextArea id="states-success" aria-label="Success text area" size="small" label="Success state" success />
      <TextArea id="states-error" aria-label="Error text area" size="small" label="Error state" error />
      <TextArea id="states-disabled" aria-label="Disabled text area" size="small" label="Disabled state" disabled />
      <TextArea id="states-readonly" aria-label="Read only text area" size="small" label="Read only state" readOnly />
    </>
  ),
  decorators: [withGrid]
};

export const Validation: Story = {
  render: () => (
    <TextArea
      id="validation-textarea"
      aria-label="Text area with validation"
      size="small"
      label="Text area label"
      error
      required
      helpText="Validation text"
    />
  ),
  decorators: [withFixedWidth]
};
