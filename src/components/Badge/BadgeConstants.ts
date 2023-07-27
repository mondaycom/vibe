import { DialogPosition } from "../../constants";

export enum BadgeType {
  INDICATOR = "indicator",
  COUNTER = "counter"
}

export enum BadgeColor {
  PRIMARY = "primary",
  NOTIFICATION = "notification"
}

export enum BadgePosition {
  TOP_START = DialogPosition.TOP_START,
  TOP_END = DialogPosition.TOP_END,
  BOTTOM_START = DialogPosition.BOTTOM_START,
  BOTTOM_END = DialogPosition.BOTTOM_END
}
