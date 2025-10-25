import { contentColors } from "./colors-vars-map";
import { type ColorStyle } from "../types/Colors";

export const ColorUtils = {
  contentColors,
  getMondayColorAsStyle: (color: string, mode: ColorStyle = "regular", withVar = true) => {
    return `${withVar ? "var(" : ""}--color-${color}${mode !== "regular" ? `-${mode}` : ""}${withVar ? ")" : ""}`;
  }
};
