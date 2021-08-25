import { COLOR_STYLES } from "../general-stories/colors/colors-vars-map";

export const getMondayColorAsStyle = (color, mode = COLOR_STYLES.REGULAR, withVar = true) =>
  `${withVar ? "var(" : ""}--color-${color}${mode !== COLOR_STYLES.REGULAR ? `-${mode}` : ""}${withVar ? ")" : ""}`;
