// import { DialogPosition } from "../../constants";

//TODO Remove once change dialogPosition to const
export const DialogPosition = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left"
} as const;

export const TooltipPositions = {
  TOP: DialogPosition.TOP,
  RIGHT: DialogPosition.RIGHT,
  BOTTOM: DialogPosition.BOTTOM,
  LEFT: DialogPosition.LEFT
} as const;

export type TooltipPositionsType = (typeof TooltipPositions)[keyof typeof TooltipPositions];
