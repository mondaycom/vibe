import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import ColorPicker from "../../../../components/ColorPicker/ColorPicker";

const COLORS_LIST = [
  "grass_green",
  "done-green",
  "bright-green",
  "saladish",
  "egg_yolk",
  "working_orange",
  "dark-orange",
  "peach",
  "sunset",
  "stuck-red",
  "dark-red",
  "sofia_pink",
  "lipstick",
  "bubble",
  "purple"
];

export const ColorPickerDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <ColorPicker colorSize={ColorPicker.colorSizes.SMALL} colorsList={COLORS_LIST} forceUseRawColorList />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="ColorPicker"
      href="/?path=/docs/pickers-colorpicker--docs"
      description="ColorPicker is our component for selecting our content colors."
    />
  );
};
