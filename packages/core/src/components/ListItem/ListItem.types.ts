import { SIZES } from "../../constants";

export type ListItemElement = "div" | "li" | "a";

export type ListItemSize = (typeof SIZES)[keyof typeof SIZES];
