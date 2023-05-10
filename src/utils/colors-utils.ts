import { ColorStyle, contentColors } from "./colors-vars-map";

const ColorUtils = {
  modes: ColorStyle,
  contentColors,
  getMondayColorAsStyle: (color: string, mode: ColorStyle = ColorStyle.REGULAR, withVar = true) => {
    return `${withVar ? "var(" : ""}--color-${color}${mode !== ColorStyle.REGULAR ? `-${mode}` : ""}${
      withVar ? ")" : ""
    }`;
  }
};

export default Object.freeze(ColorUtils);
