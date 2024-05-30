import React from "react";
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
  render: () => (
    <>
      {" "}
      <EditableHeading type={EditableHeading.types.h1} value="H1 Header" />
      <EditableHeading type={EditableHeading.types.h2} value="H2 Header" />
      <EditableHeading type={EditableHeading.types.h3} value="H3 Header" />
      <EditableHeading type={EditableHeading.types.h4} value="H4 Header" />
      <EditableHeading type={EditableHeading.types.h5} value="H5 Header" />
      <EditableHeading type={EditableHeading.types.h6} value="H6 Header" />
    </>
  ),
  name: "Types"
};

export const Placeholder = {
  render: () => <EditableHeading type={EditableHeading.types.h1} placeholder="H1 Placeholder" />,
  name: "Placeholder"
};

export const TextHighlight = {
  render: () => (
    <>
      <EditableHeading type={EditableHeading.types.h1} value="H1 Header" highlightTerm="head" />
      <EditableHeading type={EditableHeading.types.h2} value="H2 Header" highlightTerm="head" />
      <EditableHeading type={EditableHeading.types.h3} value="H3 Header" highlightTerm="head" />
    </>
  ),
  name: "Text Highlight"
};

export const Colors = {
  render: () => (
    <>
      <EditableHeading type={EditableHeading.types.h1} value="H1 Header" customColor="blue" />
      <EditableHeading type={EditableHeading.types.h2} value="H2 Header" customColor="red" />
      <EditableHeading type={EditableHeading.types.h3} value="H3 Header" highlightTerm="head" customColor="#AA33FF" />
    </>
  ),
  name: "Colors"
};
