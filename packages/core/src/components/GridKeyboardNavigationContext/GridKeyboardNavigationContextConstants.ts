import { MutableRefObject } from "react";
import { NavDirections } from "../../hooks/useFullKeyboardListeners";

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
  onOutboundNavigation?: (ref: GridElementRef, direction: NavDirections) => void;
}
