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
      "disabled-text-color",
      "placeholder-color",
      "link-color"
    ],
    []
  );
  return <ColorsDescription colorNames={colorKeys} />;
};
