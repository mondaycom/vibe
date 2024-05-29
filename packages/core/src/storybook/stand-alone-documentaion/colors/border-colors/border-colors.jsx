import React from "react";
import ColorsDescription from "../colors-description/colors-description";

const colorKeys = ["ui-border-color", "layout-border-color"];

export const BorderColors = () => <ColorsDescription colorNames={colorKeys} />;
