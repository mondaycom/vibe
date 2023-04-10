import { COLOR_STYLES, contentColors } from "./colors-vars-map";

const ColorUtils = {
  modes: COLOR_STYLES,
  contentColors,
  getMondayColorAsStyle: (
    color: string,
    mode: "regular" | "hover" | "selected" = COLOR_STYLES.REGULAR,
    withVar = true
  ) => {
    return `${withVar ? "var(" : ""}--color-${color}${mode !== COLOR_STYLES.REGULAR ? `-${mode}` : ""}${
      withVar ? ")" : ""
    }`;
  }
};

export default Object.freeze(ColorUtils);
