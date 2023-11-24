import { createComponentTemplate } from "vibe-storybook-components";
import EditableText from "../EditableText";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { overviewPlaySuite } from "../__tests__/EditableText-interactions";

const metaSettings = createStoryMetaSettingsDecorator({
  component: EditableText,
  enumPropNamesArray: ["weight", "type"],
  actionPropsArray: ["onChange"]
});

export default {
  title: "Inputs/EditableText",
  component: EditableText,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const EditableTextTemplate = createComponentTemplate(EditableText);

export const Overview = {
  render: EditableTextTemplate.bind({}),
  name: "Overview",
  args: {
    value: "This text is an editable text",
    type: EditableText.types.H1
  },
  play: overviewPlaySuite
};

export const Types = {
  render: () => <EditableText type={EditableText.types.H1} value="Text1" />,
  name: "Types"
};
