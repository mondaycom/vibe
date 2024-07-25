import { TextType } from "../Text/TextConstants";
import Text from "../Text/Text";

export type Sizes = "small" | "medium";

export type LabelKind = "fill" | "line";

export type LabelColor = "primary" | "dark" | "negative" | "positive";

export const mapSizesToTextSize: Record<Sizes, TextType> = {
  small: Text.types.TEXT3,
  medium: Text.types.TEXT2
};
