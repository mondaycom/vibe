import { TextType } from "../Text/TextConstants";
import Text from "../Text/Text";

export type Sizes = "small" | "medium";

export const mapSizesToTextSize: Record<Sizes, TextType> = {
  small: Text.types.TEXT3,
  medium: Text.types.TEXT2
};
