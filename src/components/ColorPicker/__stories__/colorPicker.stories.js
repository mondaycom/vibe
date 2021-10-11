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
  const colorSize = optionsKnob("Color size", ColorPicker.sizes, ColorPicker.sizes.MEDIUM, {
    display: "inline-radio"
  });
  const numberOfColorsInLine = number("Number of colors in line");
  const noColorText = text("no color text", undefined);
  const shouldRenderIndicatorWithoutBackground = boolean("shouldRenderIndicatorWithoutBackground", false);
  return (
    <ColorPicker
      colorStyle={colorStyle}
      noColorText={noColorText}
      shouldRenderIndicatorWithoutBackground={shouldRenderIndicatorWithoutBackground}
      colorSize={colorSize}
      numberOfColorsInLine={numberOfColorsInLine}
    />
  );
};

export const WithIndicator = () => {
  const colorStyle = optionsKnob("Color style", COLOR_STYLES, COLOR_STYLES.REGULAR, {
    display: "inline-radio"
  });
  const noColorText = text("no color text", undefined);
  const shouldRenderIndicatorWithoutBackground = boolean("shouldRenderIndicatorWithoutBackground", false);
  return (
    <ColorPicker
      colorStyle={colorStyle}
      ColorIndicatorIcon={TextColorIndicator}
      noColorText={noColorText}
      shouldRenderIndicatorWithoutBackground={shouldRenderIndicatorWithoutBackground}
    />
  );
};

export const NoColorIcons = () => {
  const colorStyle = optionsKnob("Color style", COLOR_STYLES, COLOR_STYLES.REGULAR, {
    display: "inline-radio"
  });
  const noColorText = text("no color text", "no color");
  const shouldRenderIndicatorWithoutBackground = boolean("shouldRenderIndicatorWithoutBackground", false);
  return (
    <ColorPicker
      colorStyle={colorStyle}
      ColorIndicatorIcon={TextColorIndicator}
      noColorText={noColorText}
      shouldRenderIndicatorWithoutBackground={shouldRenderIndicatorWithoutBackground}
      NoColorIcon={Send}
    />
  );
};

export default {
  title: "Components|ColorPicker",
  component: ColorPicker,
  decorators: [withPerformance]
};
