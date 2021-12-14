import { COLOR_STYLES } from "../general-stories/colors/colors-vars-map";

const ColorUtils = {
  getMondayColorAsStyle: (color, mode = COLOR_STYLES.REGULAR, withVar = true) =>
    `${withVar ? "var(" : ""}--color-${color}${mode !== COLOR_STYLES.REGULAR ? `-${mode}` : ""}${withVar ? ")" : ""}`
};

export default Object.freeze(ColorUtils);
