import { boolean, number, optionsKnob, text } from "@storybook/addon-knobs";
import React from "react";
import { withPerformance } from "storybook-addon-performance";
import { COLOR_STYLES } from "../../../general-stories/colors/colors-vars-map";
import Send from "../../Icon/Icons/components/Send";
import TextColorIndicator from "../../Icon/Icons/components/TextColorIndicator";
import ColorPicker from "../ColorPicker";

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

export default {
  title: "Components|ColorPicker",
  component: ColorPicker,
  decorators: [withPerformance]
};
