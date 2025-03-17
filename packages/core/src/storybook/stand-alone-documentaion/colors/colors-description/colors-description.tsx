import React, { useMemo } from "react";
import { ColorDescription } from "vibe-storybook-components";
import { colorsHashMap } from "../../../../utils/colors-vars-map";

const colorsWithBorder = new Set([
  "text-color-on-inverted",
  "text-color-on-primary",
  "fixed-light-color",
  "text-color-on-brand",
  "primary-background-color",
  "secondary-background-color"
]);

interface ColorsDescriptionProps {
  colorNames: string[];
}

export const ColorsDescription: React.FC<ColorsDescriptionProps> = ({ colorNames }) => {
  const descriptions = useMemo(
    () =>
      colorNames.map((color: string) => (
        <ColorDescription
          key={color}
          colorName={color}
          description={colorsHashMap.get(color)}
          withBorder={colorsWithBorder.has(color)}
        />
      )),
    [colorNames]
  );
  return <div>{descriptions}</div>;
};

export default ColorsDescription;
