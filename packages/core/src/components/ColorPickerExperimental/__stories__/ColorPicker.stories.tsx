import ColorPicker from "../ColorPicker";
import TextColorIndicator from "../../Icon/Icons/components/TextColorIndicator";
import Check from "../../Icon/Icons/components/Check";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { multiSelectionInteractionSuite, noColorInteractionSuite } from "../__tests__/ColorPicker.interactions.js";
import { createComponentTemplate } from "vibe-storybook-components";
import { ColorPickerArrayValueOnly } from "../ColorPickerConstants";

const metaSettings = createStoryMetaSettingsDecorator({
  component: ColorPicker,
  enumPropNamesArray: ["colorStyle", "colorSize", "colorShape"],
  iconPropNamesArray: ["ColorIndicatorIcon", "SelectedIndicatorIcon", "NoColorIcon"],
  actionPropsArray: [{ name: "onSave", linkedToPropValue: "value" }]
});

export default {
  title: "Pickers/ColorPickerExperimental",
  component: ColorPicker,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const colorPickerTemplate = createComponentTemplate(ColorPicker);

export const Overview = {
  render: colorPickerTemplate.bind({}),
  name: "Overview"
};

const handleSave = (value: ColorPickerArrayValueOnly) => console.log(value);

export const CustomColorPicker = {
  render: colorPickerTemplate.bind({}),
  args: {
    extendCustomHexColors: true,
    numberOfColorsInLine: 6,
    colorsList: ["#ce7e00", "#8fce00", "#2986cc"],
    SelectedIndicatorIcon: Check,
    value: "done-green"
  },
  name: "Custom color Picker"
};
