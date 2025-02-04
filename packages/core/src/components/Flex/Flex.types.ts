export type FlexAlign = "start" | "center" | "end" | "stretch" | "baseline" | "initial";

export type FlexJustify = "start" | "center" | "end" | "stretch" | "space-around" | "space-between" | "initial";

export type FlexGap = "xs" | "small" | "medium" | "large";

export type FlexDirection = "row" | "column";

export type FlexGrow = "inherit" | "initial" | "revert" | "revert-layer" | "unset" | number;

export type FlexShrink = "inherit" | "initial" | "revert" | "revert-layer" | "unset" | number;

export type FlexBasis =
  | "auto"
  | "max-content"
  | "min-content"
  | "fit-content"
  | "content"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset"
  | number
  | `${number}%`;

export type FlexShorthand = {
  grow?: FlexGrow;
  shrink?: FlexShrink;
  basis?: FlexBasis;
};
