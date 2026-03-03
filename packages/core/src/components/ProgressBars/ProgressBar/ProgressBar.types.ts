import { type SIZES } from "../../../constants";

export type ProgressBarStyle = "primary" | "secondary" | "positive" | "negative" | "warning" | "none";

export type ProgressBarSize = (typeof SIZES)[keyof typeof SIZES];
