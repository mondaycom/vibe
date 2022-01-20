import { ColorsDescription } from "../../../components";

const colorKeys = [
  "primary-background-color",
  "secondary-background-color",
  "primary-background-hover-color",
  "inverted-color-background",
  "grey-background-color"
];

export const BackgroundColors = () => <ColorsDescription colorNames={colorKeys} />;
