import { type SIZES } from "@vibe/shared";

export type ListItemElement = "div" | "li" | "a";

export type ListItemSize = (typeof SIZES)[keyof typeof SIZES];
