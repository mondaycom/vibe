import { TextType } from "../Text/Text.types";

export type Sizes = "small" | "medium";

export const mapSizesToTextSize: Record<Sizes, TextType> = {
  small: "text3",
  medium: "text2"
};
