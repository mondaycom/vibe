import { ColorsDescription } from "../../../components";

const colorKeys = [
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
  "icon-color"
];

export const SemanticColors = () => <ColorsDescription colorNames={colorKeys} />;
