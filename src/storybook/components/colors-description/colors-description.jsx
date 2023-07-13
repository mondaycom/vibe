import { useMemo } from "react";
import { Frame, ColorDescription } from "monday-ui-storybook-blocks";
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

export default ColorsDescription;
