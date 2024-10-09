import ColorPicker from "../ColorPicker";
import { TextColorIndicator, Check } from "@vibe/icons";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { multiSelectionInteractionSuite, noColorInteractionSuite } from "../__tests__/ColorPicker.interactions";
import { createComponentTemplate } from "vibe-storybook-components";

const metaSettings = createStoryMetaSettingsDecorator({
  component: ColorPicker,
  iconPropNamesArray: ["ColorIndicatorIcon", "SelectedIndicatorIcon", "NoColorIcon"],
  actionPropsArray: [{ name: "onSave", linkedToPropValue: "value" }]
});

export default {
  title: "Pickers/ColorPicker",
  component: ColorPicker,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const colorPickerTemplate = createComponentTemplate(ColorPicker);

export const Overview = {
  render: colorPickerTemplate.bind({}),
  name: "Overview"
};

export const WithIndicator = {
  render: colorPickerTemplate.bind({}),
  args: {
    ColorIndicatorIcon: TextColorIndicator
  },
  name: "With Indicator"
};

export const TextIndication = {
  render: colorPickerTemplate.bind({}),
  args: {
    ColorIndicatorIcon: TextColorIndicator,
    value: "peach",
    shouldRenderIndicatorWithoutBackground: true
  },
  name: "Text Indication"
};

export const Selected = {
  render: colorPickerTemplate.bind({}),
  args: {
    ColorIndicatorIcon: TextColorIndicator,
    colorStyle: "selected"
  },
  name: "Selected"
};

export const NoColor = {
  render: colorPickerTemplate.bind({}),
  args: {
    noColorText: "Clear color"
  },
  name: "No color",
  play: noColorInteractionSuite
};

export const SelectedIcon = {
  render: colorPickerTemplate.bind({}),
  args: {
    isMultiselect: true,
    SelectedIndicatorIcon: Check,
    value: "peach"
  },
  name: "Selected icon",
  play: multiSelectionInteractionSuite
};

export const Shapes = {
  render: colorPickerTemplate.bind({}),
  args: {
    colorShape: "circle"
  },
  name: "Shapes"
};
