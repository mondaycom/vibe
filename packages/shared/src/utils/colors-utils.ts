import { contentColors } from "./colors-vars-map";
import { type ColorStyle } from "../types/Colors";

const ColorUtils = {
  contentColors,
  getMondayColorAsStyle: (color: string, mode: ColorStyle = "regular", withVar = true) => {
    return `${withVar ? "var(" : ""}--color-${color}${mode !== "regular" ? `-${mode}` : ""}${withVar ? ")" : ""}`;
  }
};

export default Object.freeze(ColorUtils);
