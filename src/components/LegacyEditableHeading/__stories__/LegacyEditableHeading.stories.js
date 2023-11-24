import EditableHeading from "../LegacyEditableHeading";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { overviewPlaySuite } from "../__tests__/LegacyEditableHeading-interactions";

const metaSettings = createStoryMetaSettingsDecorator({
  component: EditableHeading,
  enumPropNamesArray: ["size", "type"]
});

export default {
  title: "Inputs/LegacyEditableHeading [deprecated]",
  component: EditableHeading,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: () => <EditableHeading value="This heading is editable" type={EditableHeading.types.h1} />,
  name: "Overview",
  play: overviewPlaySuite
};

export const Types = {
  render: () => <EditableHeading type={EditableHeading.types.h1} value="H1 Header" />,
  name: "Types"
};

export const Placeholder = {
  render: () => <EditableHeading type={EditableHeading.types.h1} placeholder="H1 Placeholder" />,
  name: "Placeholder"
};

export const TextHighlight = {
  render: () => <EditableHeading type={EditableHeading.types.h1} value="H1 Header" highlightTerm="head" />,
  name: "Text Highlight"
};

export const Colors = {
  render: () => <EditableHeading type={EditableHeading.types.h1} value="H1 Header" customColor="blue" />,
  name: "Colors"
};
