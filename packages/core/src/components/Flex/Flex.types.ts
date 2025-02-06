export type FlexAlign = "start" | "center" | "end" | "stretch" | "baseline" | "initial";

export type FlexJustify = "start" | "center" | "end" | "stretch" | "space-around" | "space-between" | "initial";

export type FlexGap = "xs" | "small" | "medium" | "large";

export type FlexDirection = "row" | "column";

export type FlexShorthand = {
  grow?: CSSProperties["flexGrow"]; 
  shrink?: CSSProperties["flexShrink"];
  basis?: CSSProperties["flexBasis"];
};
