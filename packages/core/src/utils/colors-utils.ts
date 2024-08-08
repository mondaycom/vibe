import { ColorStyle as ColorStyleEnum, contentColors } from "./colors-vars-map";
import { ColorStyle } from "../components";

const ColorUtils = {
  modes: ColorStyleEnum,
  contentColors,
  getMondayColorAsStyle: (color: string, mode: ColorStyle = "regular", withVar = true) => {
    return `${withVar ? "var(" : ""}--color-${color}${mode !== "regular" ? `-${mode}` : ""}${withVar ? ")" : ""}`;
  }
};

export default Object.freeze(ColorUtils);
