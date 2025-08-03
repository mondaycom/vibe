import React from "react";
import EditableHeading from "../EditableHeading";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import { overviewPlaySuite } from "../__tests__/EditableHeading-interactions";
import Flex from "../../Flex/Flex";

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
        <EditableHeading type="h1" weight="light" value="H1 Light" />
        <EditableHeading type="h1" weight="normal" value="H1 Normal" />
        <EditableHeading type="h1" weight="medium" value="H1 Medium" />
        <EditableHeading type="h1" weight="bold" value="H1 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableHeading type="h2" weight="light" value="H2 Light" />
        <EditableHeading type="h2" weight="normal" value="H2 Normal" />
        <EditableHeading type="h2" weight="medium" value="H2 Medium" />
        <EditableHeading type="h2" weight="bold" value="H2 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableHeading type="h3" weight="light" value="H3 Light" />
        <EditableHeading type="h3" weight="normal" value="H3 Normal" />
        <EditableHeading type="h3" weight="medium" value="H3 Medium" />
        <EditableHeading type="h3" weight="bold" value="H3 Bold" />
      </Flex>
    </Flex>
  )
};

export const WithPlaceholder = {
  render: () => <EditableHeading value="Clear heading to see placeholder" placeholder="Enter your heading here..." />
};
