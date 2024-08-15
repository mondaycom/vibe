export type Disabled = "opacityDisabled";

export type Border = "border";

export type BorderColor = "borderColorUiBorderColor" | "borderColorLayoutBorderColor";

export type BackgroundColor =
  | "bgPrimaryBackgroundColor"
  | "bgSecondaryBackgroundColor"
  | "bgGreyBackgroundColor"
  | "bgAllgreyBackgroundColor"
  | "bgInvertedColorBackground";

export type BoxTextColor = "textPrimaryTextColor" | "textTextColorOnInverted" | "textSecondaryTextColor";

export type BoxPropSize = "xs" | "small" | "medium" | "large" | "xl" | "xxl" | "xxxl";

export type BoxPropSizeWithAuto = "auto" | BoxPropSize;

export type Shadow = Extract<BoxPropSize, "xs" | "small" | "medium" | "large">;

export type Rounded = "small" | "medium" | "big";
