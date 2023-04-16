import { COLOR_STYLES, COLOR_STYLES_VALUES, contentColors } from "./colors-vars-map";

const ColorUtils = {
  modes: COLOR_STYLES,
  contentColors,
  getMondayColorAsStyle: (color: string, mode: COLOR_STYLES_VALUES = COLOR_STYLES.REGULAR, withVar = true) => {
    return `${withVar ? "var(" : ""}--color-${color}${mode !== COLOR_STYLES.REGULAR ? `-${mode}` : ""}${
      withVar ? ")" : ""
    }`;
  }
};

export default Object.freeze(ColorUtils);
