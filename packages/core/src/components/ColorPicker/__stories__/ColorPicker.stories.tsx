import React from "react";
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
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const WithIndicator = {
  render: () => <ColorPicker ColorIndicatorIcon={TextColorIndicator} />,
  parameters: {
    docs: {
      liveEdit: {
        scope: { TextColorIndicator }
      }
    }
  }
};

export const TextIndication = {
  render: () => (
    <ColorPicker ColorIndicatorIcon={TextColorIndicator} value="peach" shouldRenderIndicatorWithoutBackground />
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { TextColorIndicator }
      }
    }
  }
};

export const Selected = {
  render: () => <ColorPicker colorStyle="selected" />
};

export const NoColor = {
  render: () => <ColorPicker noColorText="Clear color" />,
  play: noColorInteractionSuite
};

export const SelectedIcon = {
  render: () => <ColorPicker isMultiselect SelectedIndicatorIcon={Check} value="peach" />,
  play: multiSelectionInteractionSuite,
  parameters: {
    docs: {
      liveEdit: {
        scope: { Check }
      }
    }
  }
};

export const Shapes = {
  render: () => <ColorPicker colorShape="circle" />
};
