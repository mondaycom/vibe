import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import Link from "../../Link/Link";
import Checkbox from "../Checkbox";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
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
      <Checkbox label="Regular" ariaLabel="Regular checkbox" />
      <Checkbox label="Selected" checked ariaLabel="Selected checkbox" />
      <Checkbox label="Indeterminate" indeterminate ariaLabel="Indeterminate checkbox" />
      <Checkbox label="Disabled" disabled ariaLabel="Disabled checkbox" />
      <Checkbox label="Disabled checked" disabled checked ariaLabel="Disabled checked checkbox" />
      <Checkbox label="Disabled indeterminate" disabled indeterminate ariaLabel="Disabled indeterminate checkbox" />
    </>
  )
};

export const SingleCheckbox: Story = {
  render: () => (
    <Checkbox
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
