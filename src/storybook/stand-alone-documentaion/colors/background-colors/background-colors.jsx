import { useMemo } from "react";
import { colorsHashMap } from "../../../../general-stories/colors/colors-vars-map";
import { ColorsDescription } from "../../../components";

const colorKeys = new Set([
  "primary-background-color",
  "secondary-background-color",
  "primary-background-hover-color",
  "inverted-color-background"
]);

export const BackgroundColors = () => <ColorsDescription colorNames={colorKeys} />;
