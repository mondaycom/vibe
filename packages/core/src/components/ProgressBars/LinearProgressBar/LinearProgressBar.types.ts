import { SIZES } from "../../../constants";

export type LinearProgressBarStyle = "primary" | "secondary" | "positive" | "negative" | "warning" | "none";

export type LinearProgressBarSize = (typeof SIZES)[keyof typeof SIZES];
