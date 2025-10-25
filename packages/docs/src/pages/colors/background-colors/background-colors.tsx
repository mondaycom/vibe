import React from "react";
import ColorsDescription from "../colors-description/colors-description";

const colorKeys = [
  "primary-background-color",
  "secondary-background-color",
  "primary-background-hover-color",
  "inverted-color-background",
  "grey-background-color",
  "allgrey-background-color",
  "ui-background-color"
];

export const BackgroundColors = () => <ColorsDescription colorNames={colorKeys} />;
