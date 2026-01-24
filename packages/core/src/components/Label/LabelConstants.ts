import { Text, type TextType } from "@vibe/typography";
import { type LabelSizes } from "./Label.types";
import { ContentColorByName } from "../../utils/colors-vars-map";

/**
 * @deprecated
 */
export enum LabelKind {
  FILL = "fill",
  LINE = "line"
}

/**
 * @deprecated
 */
export enum LabelColor {
  PRIMARY = "primary",
  DARK = "dark",
  NEGATIVE = "negative",
  POSITIVE = "positive"
}

export const LabelAllowedColor = {
  ...LabelColor,
  ...ContentColorByName
};

export const mapSizesToTextSize: Record<LabelSizes, TextType> = {
  small: Text.types.TEXT3,
  medium: Text.types.TEXT2
};
