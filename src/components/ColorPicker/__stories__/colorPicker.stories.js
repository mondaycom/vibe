import { boolean, number, optionsKnob, text, array } from "@storybook/addon-knobs";
import React from "react";
import { withPerformance } from "storybook-addon-performance";
import { COLOR_STYLES } from "../../../general-stories/colors/colors-vars-map";
import Send from "../../Icon/Icons/components/Send";
import TextColorIndicator from "../../Icon/Icons/components/TextColorIndicator";
import Check from "../../Icon/Icons/components/Check";
import ColorPicker from "../ColorPicker";
import ColorPickerWrapper from "../ColorPickerWrapper";

export const Sandbox = () => {
  const colorStyle = optionsKnob("Color style", COLOR_STYLES, COLOR_STYLES.REGULAR, {
    display: "inline-radio"
  });
  const noColorText = text("no color text", undefined);
  const shouldRenderIndicatorWithoutBackground = boolean("shouldRenderIndicatorWithoutBackground", false);
  return (
    <div style={{ width: number("external wrapper width", 240) }}>
      <ColorPicker
        colorStyle={colorStyle}
        noColorText={noColorText}
        shouldRenderIndicatorWithoutBackground={shouldRenderIndicatorWithoutBackground}
      />
    </div>
  );
};

export const WithIndicator = () => {
  const colorStyle = optionsKnob("Color style", COLOR_STYLES, COLOR_STYLES.REGULAR, {
    display: "inline-radio"
  });
  const noColorText = text("no color text", undefined);
  const shouldRenderIndicatorWithoutBackground = boolean("shouldRenderIndicatorWithoutBackground", false);
  return (
    <div style={{ width: number("external wrapper width", 240) }}>
      <ColorPicker
        colorStyle={colorStyle}
        ColorIndicatorIcon={TextColorIndicator}
        noColorText={noColorText}
        shouldRenderIndicatorWithoutBackground={shouldRenderIndicatorWithoutBackground}
      />
    </div>
  );
};

export const NoColorIcons = () => {
  const colorStyle = optionsKnob("Color style", COLOR_STYLES, COLOR_STYLES.REGULAR, {
    display: "inline-radio"
  });
  const noColorText = text("no color text", "no color");
  const shouldRenderIndicatorWithoutBackground = boolean("shouldRenderIndicatorWithoutBackground", false);
  return (
    <div style={{ width: number("external wrapper width", 240) }}>
      <ColorPicker
        colorStyle={colorStyle}
        ColorIndicatorIcon={TextColorIndicator}
        noColorText={noColorText}
        shouldRenderIndicatorWithoutBackground={shouldRenderIndicatorWithoutBackground}
        NoColorIcon={Send}
      />
    </div>
  );
};

export const MultiSelect = () => {
  const colorStyle = optionsKnob("Color style", COLOR_STYLES, COLOR_STYLES.REGULAR, {
    display: "inline-radio"
  });
  const noColorText = text("no color text", "no color");
  const shouldRenderIndicatorWithoutBackground = boolean("shouldRenderIndicatorWithoutBackground", false);
  const colorsList = array("colors list", ["grass_green", "done-green", "bright-green"]);
  const isBlackListMode = boolean("isBlackListMode", true);
  const isMultiselect = boolean("isMultiselect", false);
  const value = array("value", ["done-green"]);

  return (
    <div style={{ width: number("external wrapper width", 240) }}>
      <ColorPicker
        colorStyle={colorStyle}
        ColorIndicatorIcon={TextColorIndicator}
        SelectedIndicatorIcon={Check}
        noColorText={noColorText}
        shouldRenderIndicatorWithoutBackground={shouldRenderIndicatorWithoutBackground}
        NoColorIcon={Send}
        colorsList={colorsList}
        isBlackListMode={isBlackListMode}
        isMultiselect={isMultiselect}
        value={value}
      />
    </div>
  );
};

export default {
  title: "Components|ColorPicker",
  component: ColorPicker,
  decorators: [withPerformance]
};
