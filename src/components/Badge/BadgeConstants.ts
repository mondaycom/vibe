import { DialogPosition } from "../../constants";

export enum BadgeType {
  INDICATOR = "indicator",
  COUNTER = "counter"
}

export enum BadgeAnchor {
  TOP_START = DialogPosition.TOP_START,
  TOP_END = DialogPosition.TOP_END,
  BOTTOM_START = DialogPosition.BOTTOM_START,
  BOTTOM_END = DialogPosition.BOTTOM_END
}

export enum BadgeAlignments {
  RECTANGULAR = "rectangular",
  OUTSIDE = "outside",
  CIRCULAR = "circular"
}
