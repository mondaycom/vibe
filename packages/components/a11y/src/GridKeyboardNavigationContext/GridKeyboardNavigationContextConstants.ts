import { type MutableRefObject } from "react";
import { type NavDirections } from "@vibe/shared";

export type GridElementRef = MutableRefObject<HTMLElement> & { current?: HTMLElement & { disabled?: boolean } };
export type DirectionMap = Map<GridElementRef, GridElementRef>;
export type DirectionMaps = Record<NavDirections, DirectionMap>;

export type Position = VerticalPosition & HorizontalPosition;

type VerticalPosition = {
  topElement?: GridElementRef;
  bottomElement?: GridElementRef;
};

type HorizontalPosition = {
  leftElement?: GridElementRef;
  rightElement?: GridElementRef;
};

export interface GridKeyboardNavigationContextType {
  /**
   * Callback fired when navigation moves beyond the bounds of the grid.
   */
  onOutboundNavigation?: (ref: GridElementRef, direction: NavDirections) => void;
}
