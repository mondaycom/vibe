import React from "react";
import TextField from "../TextField";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import { Check, CloseSmall, Email, Show, Duplicate } from "@vibe/icons";
import "./TextField.stories.scss";
import { Meta, StoryObj } from "@storybook/react";
import Heading from "../../Heading/Heading";

type Story = StoryObj<typeof TextField>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: TextField,
  iconPropNamesArray: ["secondaryIconName", "iconName", "labelIconName"]
});

export default {
  title: "Inputs/TextField",
  component: TextField,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof TextField>;

const textFieldTemplate = createComponentTemplate(TextField);

export const Overview: Story = {
  render: textFieldTemplate.bind({}),
  args: {
    title: "Name",
    iconName: Show,

    validation: {
      text: "Helper text"
    },

    wrapperClassName: "monday-storybook-text-field_size",
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
    <div className="monday-storybook-text-field_column-wrapper">
      <TextField placeholder="Small" />
      <TextField placeholder="Medium" size="medium" />
      <TextField placeholder="Large" size="large" />
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div className="monday-storybook-text-field_wrapper">
      <div className="monday-storybook-text-field_column-wrapper monday-storybook-text-field_spacing">
        <TextField placeholder="Disabled" size="medium" disabled />
        <TextField placeholder="With icon" iconName={Email} size="medium" />
        <TextField
          placeholder="With clickable icon"
          iconTooltipContent="Copy"
          iconName={Duplicate}
          onIconClick={() => {}}
          size="medium"
        />
      </div>
      <div className="monday-storybook-text-field_column-wrapper">
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
      </div>
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Email, Check, CloseSmall }
      }
    }
  }
};

export const Validation: Story = {
  render: () => (
    <div className="monday-storybook-text-field_column-wrapper">
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
    <div className="monday-storybook-text-field_box">
      <Heading type="h1" weight="bold" maxLines={2}>
        Dark Mode Feedback From
      </Heading>
      <div className="monday-storybook-text-field_box_wrapper">
        <TextField title="Your Name" size="medium" placeholder="John Doe" />
        <TextField title="Email" size="medium" placeholder="email@monday.com" />
      </div>
    </div>
  ),
  name: "Text field in a form"
};

export const InputFieldWithPlaceholderText: Story = {
  render: () => (
    <div className="monday-storybook-text-field_size">
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
    <div className="monday-storybook-text-field_column-wrapper">
      <TextField placeholder="Your email" title="Email Address" size="medium" required />
    </div>
  ),
  name: "Required input field"
};

export const InputFieldWithDate: Story = {
  render: () => (
    <div className="monday-storybook-text-field_size">
      <TextField size="medium" type="date" />
    </div>
  ),
  name: "Input field with date"
};

export const InputFieldWithDateAndTime: Story = {
  render: () => (
    <div className="monday-storybook-text-field_size">
      <TextField size="medium" type="datetime-local" />
    </div>
  ),
  name: "Input field with date and time"
};
