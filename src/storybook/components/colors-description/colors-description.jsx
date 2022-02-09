import { useMemo } from "react";
import { ColorDescription } from "../color-description/color-description";
import { Frame } from "../frame/frame";
import { colorsHashMap } from "../../../utils/colors-vars-map";

const colorsWithBorder = new Set([
  "text-color-on-inverted",
  "text-color-on-primary",
  "primary-background-color",
  "secondary-background-color"
]);

export const ColorsDescription = ({ colorNames }) => {
  const descriptions = useMemo(
    () =>
      colorNames.map(color => (
        <ColorDescription
          key={color}
          colorName={color}
          description={colorsHashMap.get(color)}
          withBorder={colorsWithBorder.has(color)}
        />
      )),
    [colorNames]
  );
  return <Frame>{descriptions}</Frame>;
};
