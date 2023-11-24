import ColorPicker from "../ColorPicker";
import TextColorIndicator from "../../Icon/Icons/components/TextColorIndicator";
import Check from "../../Icon/Icons/components/Check";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { multiSelectionInteractionSuite, noColorInteractionSuite } from "../__tests__/ColorPicker.interactions.js";

const metaSettings = createStoryMetaSettingsDecorator({
  component: ColorPicker,
  enumPropNamesArray: ["colorStyle", "colorSize", "colorShape"],
  iconPropNamesArray: ["ColorIndicatorIcon", "SelectedIndicatorIcon", "NoColorIcon"],
  actionPropsArray: [{ name: "onSave", linkedToPropValue: "value" }]
});

export default {
  title: "Pickers/ColorPicker",
  component: ColorPicker,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const colorPickerTemplate = args => <ColorPicker {...args} />;

export const Overview = {
  render: colorPickerTemplate.bind({}),
  name: "Overview"
};

export const colorPickerWithIndicatorTemplate = args => (
  <ColorPicker ColorIndicatorIcon={TextColorIndicator} {...args} />
);

export const WithIndicator = {
  render: colorPickerWithIndicatorTemplate.bind({}),
  name: "With Indicator"
};

export const colorPickerTextIndicatorTemplate = args => (
  <ColorPicker ColorIndicatorIcon={TextColorIndicator} shouldRenderIndicatorWithoutBackground value="peach" {...args} />
);

export const TextIndication = {
  render: colorPickerTextIndicatorTemplate.bind({}),
  name: "Text Indication"
};

export const colorPickerSelectedTemplate = args => (
  <ColorPicker ColorIndicatorIcon={TextColorIndicator} colorStyle={ColorPicker.COLOR_STYLES.SELECTED} {...args} />
);

export const Selected = {
  render: colorPickerSelectedTemplate.bind({}),
  name: "Selected"
};

export const colorPickerNoColorTemplate = args => <ColorPicker noColorText="Clear color" {...args} />;

export const NoColor = {
  render: colorPickerNoColorTemplate.bind({}),
  name: "No color",
  play: noColorInteractionSuite
};

export const colorPickerSelectedIconTemplate = args => (
  <ColorPicker isMultiselect SelectedIndicatorIcon={Check} value="peach" {...args} />
);

export const SelectedIcon = {
  render: colorPickerSelectedIconTemplate.bind({}),
  name: "Selected icon",
  play: multiSelectionInteractionSuite
};

export const colorPickerCircleShapeTemplate = args => (
  <ColorPicker colorShape={ColorPicker.colorShapes.CIRCLE} {...args} />
);

export const Shapes = {
  render: colorPickerCircleShapeTemplate.bind({}),
  name: "Shapes"
};
