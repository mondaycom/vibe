import { COLOR_STYLES } from "./colors-vars-map";

const ColorUtils = {
  modes: COLOR_STYLES,
  getMondayColorAsStyle: (color, mode = COLOR_STYLES.REGULAR, withVar = true) => {
    return `${withVar ? "var(" : ""}--color-${color}${mode !== COLOR_STYLES.REGULAR ? `-${mode}` : ""}${
      withVar ? ")" : ""
    }`;
  }
};

export default Object.freeze(ColorUtils);
