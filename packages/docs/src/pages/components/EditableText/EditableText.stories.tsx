import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { EditableText, Flex } from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { overviewPlaySuite } from "./EditableText.interactions";

const metaSettings = createStoryMetaSettingsDecorator({
  component: EditableText,
  actionPropsArray: ["onChange"]
});

export default {
  title: "Components/EditableText",
  component: EditableText,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const EditableTextTemplate = createComponentTemplate(EditableText);

export const Overview = {
  render: EditableTextTemplate.bind({}),
  args: {
    "aria-label": "Editable text",
    value: "This text is an editable text"
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
        <EditableText aria-label="Text1 normal editable text" type="text1" weight="normal" value="Text1 Normal" />
        <EditableText aria-label="Text1 medium editable text" type="text1" weight="medium" value="Text1 Medium" />
        <EditableText aria-label="Text1 bold editable text" type="text1" weight="bold" value="Text1 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableText aria-label="Text2 normal editable text" type="text2" weight="normal" value="Text2 Normal" />
        <EditableText aria-label="Text2 medium editable text" type="text2" weight="medium" value="Text2 Medium" />
        <EditableText aria-label="Text2 bold editable text" type="text2" weight="bold" value="Text2 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableText aria-label="Text3 normal editable text" type="text3" weight="normal" value="Text3 Normal" />
        <EditableText aria-label="Text3 medium editable text" type="text3" weight="medium" value="Text3 Medium" />
      </Flex>
    </Flex>
  )
};

export const Multiline = {
  render: () => (
    <EditableText
      aria-label="Multiline editable text"
      type="text1"
      weight="normal"
      multiline
      value={`This is a multiline
here's the second line`}
    />
  )
};

export const WithPlaceholder = {
  render: () => (
    <EditableText
      aria-label="Editable text with placeholder"
      value="Clear text to see placeholder"
      placeholder="Enter your text here..."
    />
  )
};
