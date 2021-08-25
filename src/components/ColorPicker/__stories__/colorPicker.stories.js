import { number, optionsKnob, text } from "@storybook/addon-knobs";
import React from "react";
import { withPerformance } from "storybook-addon-performance";
import { COLOR_STYLES } from "../../../general-stories/colors/colors-vars-map";
import ColorPicker from "../ColorPicker";
import ColorIndicator from "../components/ColorIndicator/ColorIndicator";

export const Sandbox = () => {
  const colorStyle = optionsKnob("Color style", COLOR_STYLES, COLOR_STYLES.REGULAR, {
    display: "inline-radio"
  });
  const noColorText = text("no color text", undefined);
  return (
    <div style={{ width: number("external wrapper width", 240) }}>
      <ColorPicker colorStyle={colorStyle} noColorText={noColorText} />
    </div>
  );
};

export const WithIndicator = () => {
  const colorStyle = optionsKnob("Color style", COLOR_STYLES, COLOR_STYLES.REGULAR, {
    display: "inline-radio"
  });
  return (
    <div style={{ width: number("external wrapper width", 240) }}>
      <ColorPicker colorStyle={colorStyle} ColorIndicatorComponentRenderer={() => ColorIndicator({})} />
    </div>
  );
};

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
  decorators: [withPerformance]
};
