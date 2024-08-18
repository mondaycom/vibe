export type BorderColor = "uiBorderColor" | "layoutBorderColor";

export type BackgroundColor =
  | "primaryBackgroundColor"
  | "secondaryBackgroundColor"
  | "greyBackgroundColor"
  | "allgreyBackgroundColor"
  | "invertedColorBackground";

export type BoxTextColor = "primaryTextColor" | "textColorOnInverted" | "secondaryTextColor";

export type BaseBoxSize = "xs" | "small" | "medium" | "large" | "xl" | "xxl" | "xxxl";

export type BoxSize = "auto" | BaseBoxSize;

export type Shadow = Extract<BaseBoxSize, "xs" | "small" | "medium" | "large">;

export type RoundedSize = "small" | "medium" | "big";
