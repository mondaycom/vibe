import React from "react";
import { TextField, type TextFieldProps, Heading, Flex } from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { Check, CloseSmall, Email, Show, Duplicate } from "@vibe/icons";
import { type Meta, type StoryObj } from "@storybook/react";

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
    id: "overview-textfield",
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
      <TextField id="sizes-small" inputAriaLabel="Small text field" placeholder="Small" />
      <TextField id="sizes-medium" inputAriaLabel="Medium text field" placeholder="Medium" size="medium" />
      <TextField id="sizes-large" inputAriaLabel="Large text field" placeholder="Large" size="large" />
    </Flex>
  )
};

export const States: Story = {
  render: () => (
    <Flex gap="large">
      <Flex direction="column" gap="medium" style={{ marginTop: "var(--space-32)", width: 300 }}>
        <TextField
          id="states-disabled"
          inputAriaLabel="Disabled text field"
          placeholder="Disabled"
          size="medium"
          disabled
        />
        <TextField
          id="states-with-icon"
          inputAriaLabel="Text field with icon"
          placeholder="With icon"
          iconName={Email}
          size="medium"
        />
        <TextField
          id="states-clickable-icon"
          inputAriaLabel="Text field with clickable icon"
          placeholder="With clickable icon"
          iconTooltipContent="Copy"
          iconName={Duplicate}
          onIconClick={() => {}}
          size="medium"
        />
      </Flex>
      <Flex direction="column" gap="medium" style={{ width: 300 }}>
        <TextField id="states-with-label" placeholder="With field label" title="Name" size="medium" />
        <TextField
          id="states-success"
          inputAriaLabel="Success text field"
          placeholder="Success"
          validation={{
            status: "success"
          }}
          iconName={Check}
          size="medium"
        />
        <TextField
          id="states-error"
          inputAriaLabel="Error text field"
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
        id="validation-textfield"
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
        Dark Mode Feedback Form
      </Heading>
      <Flex direction="column" gap="medium">
        <TextField id="form-name" title="Your Name" size="medium" placeholder="John Doe" />
        <TextField id="form-email" title="Email" size="medium" placeholder="email@monday.com" />
      </Flex>
    </Flex>
  ),
  name: "Text field in a form"
};

export const InputFieldWithPlaceholderText: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <TextField
        id="placeholder-text-field"
        title="Invite with email"
        labelIconName={Email}
        placeholder="Enter one or more email"
        size="medium"
      />
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
      <TextField id="required-field" placeholder="Your email" title="Email Address" size="medium" required />
    </div>
  ),
  name: "Required input field"
};

export const InputFieldWithDate: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <TextField id="date-field" inputAriaLabel="Select a date" size="medium" type="date" />
    </div>
  ),
  name: "Input field with date"
};

export const InputFieldWithDateAndTime: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <TextField id="datetime-field" inputAriaLabel="Select date and time" size="medium" type="datetime-local" />
    </div>
  ),
  name: "Input field with date and time"
};
