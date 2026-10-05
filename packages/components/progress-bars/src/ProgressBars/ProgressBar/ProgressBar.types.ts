import { type SIZES } from "@vibe/shared";

export type ProgressBarStyle = "primary" | "secondary" | "positive" | "negative" | "warning" | "none";

export type ProgressBarSize = (typeof SIZES)[keyof typeof SIZES];
