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
  title: "Components/ColorPicker",
  component: ColorPicker,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const colorPickerTemplate = createComponentTemplate(ColorPicker);

export const Overview = {
  render: colorPickerTemplate.bind({}),
  args: {
    id: "overview-color-picker"
  },
  name: "Overview"
};

export const WithIndicator = {
  render: colorPickerTemplate.bind({}),
  args: {
    id: "indicator-color-picker",
    ColorIndicatorIcon: TextColorIndicator
  },
  name: "With Indicator"
};

export const TextIndication = {
  render: colorPickerTemplate.bind({}),
  args: {
    id: "text-indication-color-picker",
    ColorIndicatorIcon: TextColorIndicator,
    value: "peach",
    shouldRenderIndicatorWithoutBackground: true
  },
  name: "Text Indication"
};

export const Selected = {
  render: colorPickerTemplate.bind({}),
  args: {
    id: "selected-color-picker",
    ColorIndicatorIcon: TextColorIndicator,
    colorStyle: "selected"
  },
  name: "Selected"
};

export const NoColor = {
  render: colorPickerTemplate.bind({}),
  args: {
    id: "no-color-picker",
    noColorText: "Clear color"
  },
  name: "No color",
  play: noColorInteractionSuite
};

export const SelectedIcon = {
  render: colorPickerTemplate.bind({}),
  args: {
    id: "multiselect-color-picker",
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
    id: "shapes-color-picker",
    colorShape: "circle"
  },
  name: "Shapes"
};
