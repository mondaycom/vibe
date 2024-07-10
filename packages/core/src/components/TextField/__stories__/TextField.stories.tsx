import React from "react";
import TextField from "../TextField";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import { Check, CloseSmall, Email, Show, Duplicate } from "../../Icon/Icons";
import "./TextField.stories.scss";
import { Meta, StoryObj } from "@storybook/react";
import { Heading } from "../../../next/next";

type Story = StoryObj<typeof TextField>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: TextField,
  enumPropNamesArray: ["type", "size"],
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
    controls: {
      // TODO: remove exclusion when prop is removed in next major
      exclude: ["withReadOnlyStyle"]
    },
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
      <TextField placeholder="Medium" size={TextField.sizes.MEDIUM} />
      <TextField placeholder="Large" size={TextField.sizes.LARGE} />
    </div>
  )
};

export const States: Story = {
  render: () => (
    <div className="monday-storybook-text-field_wrapper">
      <div className="monday-storybook-text-field_column-wrapper monday-storybook-text-field_spacing">
        <TextField placeholder="Disabled" size={TextField.sizes.MEDIUM} disabled />
        <TextField placeholder="With icon" iconName={Email} size={TextField.sizes.MEDIUM} />
        <TextField
          placeholder="With clickable icon"
          iconTooltipContent="Copy"
          iconName={Duplicate}
          onIconClick={() => {}}
          size={TextField.sizes.MEDIUM}
        />
      </div>
      <div className="monday-storybook-text-field_column-wrapper">
        <TextField placeholder="With field label" title="Name" size={TextField.sizes.MEDIUM} />
        <TextField
          placeholder="Success"
          validation={{
            status: "success"
          }}
          iconName={Check}
          size={TextField.sizes.MEDIUM}
        />
        <TextField
          placeholder="Error"
          validation={{
            status: "error"
          }}
          iconName={CloseSmall}
          size={TextField.sizes.MEDIUM}
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
        size={TextField.sizes.MEDIUM}
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
      <Heading type={Heading.types.H1} weight={Heading.weights.BOLD} maxLines={2}>
        Dark Mode Feedback From
      </Heading>
      <div className="monday-storybook-text-field_box_wrapper">
        <TextField title="Your Name" size={TextField.sizes.MEDIUM} placeholder="John Doe" />
        <TextField title="Email" size={TextField.sizes.MEDIUM} placeholder="email@monday.com" />
      </div>
    </div>
  ),
  name: "Text field in a form"
};

export const InputFieldWithPlaceholderText: Story = {
  render: () => (
    <div className="monday-storybook-text-field_size">
      <TextField
        title="Invite with email"
        labelIconName={Email}
        placeholder="Enter one or more email"
        size={TextField.sizes.MEDIUM}
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
    <div className="monday-storybook-text-field_column-wrapper">
      <TextField placeholder="Your email" title="Email Address" size={TextField.sizes.MEDIUM} requiredAsterisk={true} />
    </div>
  ),
  name: "Required input field"
};

export const InputFieldWithDate: Story = {
  render: () => (
    <div className="monday-storybook-text-field_size">
      <TextField size={TextField.sizes.MEDIUM} type={TextField.types.DATE} />
    </div>
  ),
  name: "Input field with date"
};

export const InputFieldWithDateAndTime: Story = {
  render: () => (
    <div className="monday-storybook-text-field_size">
      <TextField size={TextField.sizes.MEDIUM} type={TextField.types.DATE_TIME} />
    </div>
  ),
  name: "Input field with date and time"
};
