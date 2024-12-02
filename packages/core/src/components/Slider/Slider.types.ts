import { BASE_SIZES } from "../../constants";

export type SliderColor = "primary" | "negative" | "positive";

export type SliderSize = (typeof BASE_SIZES)[keyof typeof BASE_SIZES];

export type InfixKind = "prefix" | "postfix";
