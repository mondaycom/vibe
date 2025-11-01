import React from "react";
import { EditableHeading, Flex } from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { createComponentTemplate } from "vibe-storybook-components";
import { overviewPlaySuite } from "./EditableHeading.interactions";

const metaSettings = createStoryMetaSettingsDecorator({
  component: EditableHeading,
  actionPropsArray: ["onChange"]
});

export default {
  title: "Components/EditableHeading",
  component: EditableHeading,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const editableHeadingTemplate = createComponentTemplate(EditableHeading);

export const Overview = {
  render: editableHeadingTemplate.bind({}),
  args: {
    value: "This heading is an editable heading"
  },
  play: overviewPlaySuite,
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Types = {
  render: () => (
    <Flex direction="column" gap="large" align="start">
      <Flex gap="large">
        <EditableHeading id="h1-light" ariaLabel="H1 light heading" type="h1" weight="light" value="H1 Light" />
        <EditableHeading id="h1-normal" ariaLabel="H1 normal heading" type="h1" weight="normal" value="H1 Normal" />
        <EditableHeading id="h1-medium" ariaLabel="H1 medium heading" type="h1" weight="medium" value="H1 Medium" />
        <EditableHeading id="h1-bold" ariaLabel="H1 bold heading" type="h1" weight="bold" value="H1 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableHeading id="h2-light" ariaLabel="H2 light heading" type="h2" weight="light" value="H2 Light" />
        <EditableHeading id="h2-normal" ariaLabel="H2 normal heading" type="h2" weight="normal" value="H2 Normal" />
        <EditableHeading id="h2-medium" ariaLabel="H2 medium heading" type="h2" weight="medium" value="H2 Medium" />
        <EditableHeading id="h2-bold" ariaLabel="H2 bold heading" type="h2" weight="bold" value="H2 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableHeading id="h3-light" ariaLabel="H3 light heading" type="h3" weight="light" value="H3 Light" />
        <EditableHeading id="h3-normal" ariaLabel="H3 normal heading" type="h3" weight="normal" value="H3 Normal" />
        <EditableHeading id="h3-medium" ariaLabel="H3 medium heading" type="h3" weight="medium" value="H3 Medium" />
        <EditableHeading id="h3-bold" ariaLabel="H3 bold heading" type="h3" weight="bold" value="H3 Bold" />
      </Flex>
    </Flex>
  )
};

export const WithPlaceholder = {
  render: () => (
    <EditableHeading
      id="with-placeholder"
      ariaLabel="Editable heading with placeholder"
      value="Clear heading to see placeholder"
      placeholder="Enter your heading here..."
    />
  )
};
