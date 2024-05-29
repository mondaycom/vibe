import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import Link from "../../Link/Link";
import Checkbox from "../Checkbox";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import "./Checkbox.stories.scss";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Checkbox>;

const metaSettings = createStoryMetaSettingsDecorator({ component: Checkbox });
const checkboxTemplate = createComponentTemplate(Checkbox);

export default {
  title: "Inputs/Checkbox",
  component: Checkbox,
  decorators: metaSettings.decorators
} satisfies Meta<typeof Checkbox>;

export const Overview: Story = {
  render: checkboxTemplate.bind({}),
  args: {
    label: "Option",
    defaultChecked: true
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
      <Checkbox label="Regular" />
      <Checkbox label="Selected" checked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled checked />
      <Checkbox label="Disabled indeterminate" disabled indeterminate />
    </>
  )
};

export const SingleCheckbox: Story = {
  render: () => (
    <Checkbox
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
