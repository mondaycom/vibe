import { type BASE_SIZES } from "../../constants";
import { type DialogPosition } from "@vibe/dialog";
import { type TypographyColor } from "@vibe/typography";

export type SliderColor = "primary" | "negative" | "positive";

export type SliderLabelColor = Extract<TypographyColor, "primary" | "secondary">;

export type SliderLabelPosition = Extract<DialogPosition, "top" | "bottom">;

export type SliderSize = (typeof BASE_SIZES)[keyof typeof BASE_SIZES];

export type InfixKind = "prefix" | "postfix";
