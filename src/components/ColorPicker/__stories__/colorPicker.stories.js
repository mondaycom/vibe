import { number, optionsKnob } from "@storybook/addon-knobs";
import React from "react";
import { withPerformance } from "storybook-addon-performance";
import { COLOR_STYLES } from "../../../general-stories/colors/colors-vars-map";
import ColorPicker from "../ColorPicker";

export const Sandbox = () => {
  const colorStyle = optionsKnob("Color style", COLOR_STYLES, COLOR_STYLES.REGULAR, {
    display: "inline-radio"
  });
  return (
    <div style={{ width: number("external wrapper width", 240) }}>
      <ColorPicker colorStyle={colorStyle} />
    </div>
  );
};

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
  decorators: [withPerformance]
};
