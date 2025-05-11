import { contentColors } from "../../utils/colors-vars-map";

export type LabelSizes = "small" | "medium";

export type LabelKind = "fill" | "line";

export type ContentColor = (typeof contentColors)[number];
export type LabelColor = "primary" | "dark" | "negative" | "positive" | ContentColor;
