import EditableHeading from "../EditableHeading";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import { overviewPlaySuite } from "../__tests__/EditableHeading-interactions";

const metaSettings = createStoryMetaSettingsDecorator({
  component: EditableHeading,
  enumPropNamesArray: ["weight", "type"],
  actionPropsArray: ["onChange"]
});

export default {
  title: "Inputs/EditableHeading",
  component: EditableHeading,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const editableHeadingTemplate = createComponentTemplate(EditableHeading);

export const Overview = {
  render: editableHeadingTemplate.bind({}),
  name: "Overview",
  args: {
    value: "This heading is an editable heading",
    type: EditableHeading.types.H1
  },
  play: overviewPlaySuite
};

export const Types = {
  render: () => <EditableHeading type={EditableHeading.types.H1} value="H1 Header" />,
  name: "Types"
};
