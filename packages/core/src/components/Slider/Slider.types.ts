import { BASE_SIZES } from "../../constants";
import { DialogPosition } from "../Dialog";
import { TypographyColor } from "../Typography";

export type SliderColor = "primary" | "negative" | "positive";

export type SliderLabelColor = Extract<TypographyColor, "primary" | "secondary">;

export type SliderLabelPosition = Extract<DialogPosition, "top" | "bottom">;

export type SliderSize = (typeof BASE_SIZES)[keyof typeof BASE_SIZES];

export type InfixKind = "prefix" | "postfix";
