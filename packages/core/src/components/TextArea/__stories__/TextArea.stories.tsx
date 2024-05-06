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
  decorators: [withFixedWidth]
};

export const Sizes = {
  render: () => {
    return (
      <>
        <TextArea size="large" label="Large text area" />
        <TextArea size="medium" label="Medium text area" />
      </>
    );
  },
  decorators: [withGrid]
};

export const States = {
  render: () => {
    return (
      <>
        <TextArea size="medium" label="Success state" success />
        <TextArea size="medium" label="Error state" error />
        <TextArea size="medium" label="Disabled state" disabled />
        <TextArea size="medium" label="Read only state" readOnly />
      </>
    );
  },
  decorators: [withGrid]
};

export const Validation = {
  render: () => {
    return <TextArea size="medium" label="Text area label" error required helpText="Validation text" />;
  },
  decorators: [withFixedWidth]
};
