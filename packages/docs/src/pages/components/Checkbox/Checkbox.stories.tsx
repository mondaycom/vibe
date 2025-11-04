import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { Link, Checkbox } from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import "./Checkbox.stories.scss";
import { type Meta, type StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Checkbox>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Checkbox,
  actionPropsArray: ["onChange"]
});
const checkboxTemplate = createComponentTemplate(Checkbox);

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: metaSettings.decorators,
  argTypes: metaSettings.argTypes
} satisfies Meta<typeof Checkbox>;

export const Overview: Story = {
  render: checkboxTemplate.bind({}),
  args: {
    label: "Option",
    defaultChecked: true,
    id: "checkbox-1",
    ariaLabel: "Checkbox option"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const States: Story = {
  render: () => (
    <>
      <Checkbox label="Regular" id="checkbox-2" ariaLabel="Regular checkbox" />
      <Checkbox label="Selected" checked id="checkbox-3" ariaLabel="Selected checkbox" />
      <Checkbox label="Indeterminate" indeterminate id="checkbox-4" ariaLabel="Indeterminate checkbox" />
      <Checkbox label="Disabled" disabled id="checkbox-5" ariaLabel="Disabled checkbox" />
      <Checkbox label="Disabled checked" disabled checked id="checkbox-6" ariaLabel="Disabled checked checkbox" />
      <Checkbox
        label="Disabled indeterminate"
        disabled
        indeterminate
        id="checkbox-7"
        ariaLabel="Disabled indeterminate checkbox"
      />
    </>
  )
};

export const SingleCheckbox: Story = {
  render: () => (
    <Checkbox
      id="single-checkbox"
      ariaLabel="Agree to terms and privacy policy"
      checked
      label={
        <>
          I agree to the <Link href={"#"} text="Terms of Service" inlineText></Link> and{" "}
          <Link href={"#"} text="Privacy Policy" inlineText></Link>.
        </>
      }
    />
  ),
  name: "Single checkbox"
};
