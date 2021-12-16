import { useMemo } from "react";
import { colorsHashMap } from "../../../../general-stories/colors/colors-vars-map";
import { ColorsDescription } from "../../../components";

const colorKeys = new Set([
  "primary-color",
  "primary-hover-color",
  "primary-selected-color",
  "positive-color",
  "positive-color-hover",
  "positive-color-selected",
  "negative-color",
  "negative-color-hover",
  "negative-color-selected",
  "private-color",
  "shareable-color",
  "inverted-color-background",
  "Icon-color"
]);

export const SemanticColors = () => <ColorsDescription colorNames={colorKeys} />;
