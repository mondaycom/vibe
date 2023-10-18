import { useMemo } from "react";
import { ColorsDescription } from "../colors-description/colors-description";

export const TextColors = () => {
  const colorKeys = useMemo(
    () => [
      "primary-text-color",
      "secondary-text-color",
      "secondary-text-on-secondary-color",
      "text-color-on-inverted",
      "text-color-on-primary",
      "text-color-fixed-light",
      "text-color-fixed-dark",
      "disabled-text-color",
      "placeholder-color",
      "link-color"
    ],
    []
  );
  return <ColorsDescription colorNames={colorKeys} />;
};

export default TextColors;
