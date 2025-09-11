import { type BASE_SIZES } from "../../constants";
import { type DialogPosition } from "../Dialog";
import { type TypographyColor } from "../Typography";

export type SliderColor = "primary" | "negative" | "positive";

export type SliderLabelColor = Extract<TypographyColor, "primary" | "secondary">;

export type SliderLabelPosition = Extract<DialogPosition, "top" | "bottom">;

export type SliderSize = (typeof BASE_SIZES)[keyof typeof BASE_SIZES];

export type InfixKind = "prefix" | "postfix";
