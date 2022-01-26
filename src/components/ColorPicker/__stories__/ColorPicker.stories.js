import ColorPicker from "../ColorPicker";
import TextColorIndicator from "../../Icon/Icons/components/TextColorIndicator";
import Check from "../../Icon/Icons/components/Check";

export const colorPickerTemplate = args => <ColorPicker {...args} />;

export const colorPickerWithIndicatorTemplate = args => (
  <ColorPicker ColorIndicatorIcon={TextColorIndicator} {...args} />
);

export const colorPickerTextIndicatorTemplate = args => (
  <ColorPicker ColorIndicatorIcon={TextColorIndicator} shouldRenderIndicatorWithoutBackground value="peach" {...args} />
);

export const colorPickerSelectedTemplate = args => (
  <ColorPicker ColorIndicatorIcon={TextColorIndicator} colorStyle={ColorPicker.COLOR_STYLES.SELECTED} {...args} />
);

export const colorPickerNoColorTemplate = _args => <ColorPicker noColorText="Clear color" />;

export const colorPickerSelectedIconTemplate = args => (
  <ColorPicker isMultiselect SelectedIndicatorIcon={Check} value="peach" {...args} />
);

export const colorPickerCircleShapeTemplate = args => (
  <ColorPicker colorShape={ColorPicker.colorShapes.CIRCLE} {...args} />
);

export const colorPickerWithCustomPicker = args => (
  <ColorPicker showCustomColorPicker numberOfColorsInLine="7" {...args} />
);

export const colorPickerWithCustomPickerAndMultiSelect = args => <ColorPicker showCustomColorPicker isMultiselect numberOfColorsInLine="7" {...args} />;
