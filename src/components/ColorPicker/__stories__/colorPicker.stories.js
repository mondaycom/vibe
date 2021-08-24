import { number } from "@storybook/addon-knobs";
import React from "react";
import { withPerformance } from "storybook-addon-performance";
import { contentColors, getMondayColorAsStyle } from "../../../general-stories/colors/colors-vars-map";
import ColorPicker from "../ColorPicker";

export const Sandbox = () => (
  <div style={{ width: number("external wrapper width", 240) }}>
    <ColorPicker />
  </div>
);

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
  decorators: [withPerformance]
};
