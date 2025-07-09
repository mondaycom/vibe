import React from "react";
import TextField, { TextFieldProps } from "../TextField";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Check, CloseSmall, Email, Show, Duplicate } from "@vibe/icons";
import { Meta, StoryObj } from "@storybook/react";
import Heading from "../../Heading/Heading";
import { Flex } from "../../Flex";

type Story = StoryObj<typeof TextField>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: TextField,
  iconPropNamesArray: ["secondaryIconName", "iconName", "labelIconName"]
});

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof TextField>;

export const Overview: Story = {
  render: (args: TextFieldProps) => (
    <div style={{ width: 300 }}>
      <TextField {...args} />
    </div>
  ),
  args: {
    title: "Name",
    iconName: Show,

    validation: {
      text: "Helper text"
    },

    showCharCount: true,
    placeholder: "Placeholder text here"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="medium" style={{ width: 300 }}>
      <TextField placeholder="Small" />
      <TextField placeholder="Medium" size="medium" />
      <TextField placeholder="Large" size="large" />
    </Flex>
  )
};

export const States: Story = {
  render: () => (
    <Flex gap="large">
      <Flex direction="column" gap="medium" style={{ marginTop: "var(--space-32)", width: 300 }}>
        <TextField placeholder="Disabled" size="medium" disabled />
        <TextField placeholder="With icon" iconName={Email} size="medium" />
        <TextField
          placeholder="With clickable icon"
          iconTooltipContent="Copy"
          iconName={Duplicate}
          onIconClick={() => {}}
          size="medium"
        />
      </Flex>
      <Flex direction="column" gap="medium" style={{ width: 300 }}>
        <TextField placeholder="With field label" title="Name" size="medium" />
        <TextField
          placeholder="Success"
          validation={{
            status: "success"
          }}
          iconName={Check}
          size="medium"
        />
        <TextField
          placeholder="Error"
          validation={{
            status: "error"
          }}
          iconName={CloseSmall}
          size="medium"
        />
      </Flex>
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Email, Check, CloseSmall, Duplicate }
      }
    }
  }
};

export const Validation: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <TextField
        placeholder="Validate me"
        title="Name"
        size="medium"
        validation={{
          status: "error",
          text: "Validation text"
        }}
      />
    </div>
  )
};

export const TextFieldInAForm: Story = {
  render: () => (
    <Flex align="stretch" direction="column" gap="large" style={{ width: 300 }}>
      <Heading type="h1" weight="bold" maxLines={2}>
        Dark Mode Feedback From
      </Heading>
      <Flex direction="column" gap="medium">
        <TextField title="Your Name" size="medium" placeholder="John Doe" />
        <TextField title="Email" size="medium" placeholder="email@monday.com" />
      </Flex>
    </Flex>
  ),
  name: "Text field in a form"
};

export const InputFieldWithPlaceholderText: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <TextField title="Invite with email" labelIconName={Email} placeholder="Enter one or more email" size="medium" />
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Email }
      }
    }
  },
  name: "Input field with placeholder text"
};

export const RequiredInputField: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <TextField placeholder="Your email" title="Email Address" size="medium" required />
    </div>
  ),
  name: "Required input field"
};

export const InputFieldWithDate: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <TextField size="medium" type="date" />
    </div>
  ),
  name: "Input field with date"
};

export const InputFieldWithDateAndTime: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <TextField size="medium" type="datetime-local" />
    </div>
  ),
  name: "Input field with date and time"
};
