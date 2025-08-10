import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import EditableText from "../EditableText";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { overviewPlaySuite } from "../__tests__/EditableText.interactions";
import Flex from "../../Flex/Flex";

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
    ariaLabel: "Editable text",
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
        <EditableText ariaLabel="Text1 normal editable text" type="text1" weight="normal" value="Text1 Normal"
        />
        <EditableText
          ariaLabel="Text1 medium editable text" type="text1" weight="medium" value="Text1 Medium"
        />
        <EditableText ariaLabel="Text1 bold editable text" type="text1" weight="bold" value="Text1 Bold"
        />
      </Flex>
      <Flex gap="large">
        <EditableText ariaLabel="Text2 normal editable text" type="text2" weight="normal" value="Text2 Normal"
        />
        <EditableText
          ariaLabel="Text2 medium editable text" type="text2" weight="medium" value="Text2 Medium"
        />
        <EditableText ariaLabel="Text2 bold editable text" type="text2" weight="bold" value="Text2 Bold"
        />
      </Flex>
      <Flex gap="large">
        <EditableText ariaLabel="Text3 normal editable text" type="text3" weight="normal" value="Text3 Normal"
        />
        <EditableText ariaLabel="Text3 medium editable text" type="text3" weight="medium" value="Text3 Medium"
        />
      </Flex>
    </Flex>
  )
};

export const Multiline = {
  render: () => (
    <EditableText
      ariaLabel="Multiline editable text"
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
    <EditableText ariaLabel="Editable text with placeholder" value="Clear text to see placeholder" placeholder="Enter your text here..."
    />
  )
};
