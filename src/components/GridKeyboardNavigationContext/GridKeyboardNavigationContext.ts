import React, { useContext, useCallback, useMemo } from "react";
import useEventListener from "../../hooks/useEventListener";
import { useLastNavigationDirection } from "../Menu/Menu/hooks/useLastNavigationDirection";
import {
  getDirectionMaps,
  getNextElementToFocusInDirection,
  getOppositeDirection,
  getOutmostElementInDirection
} from "./helper";
import { NavDirections } from "../../hooks/useFullKeyboardListeners";
import { GridElementRef, GridKeyboardNavigationContextType, Position } from "./GridKeyboardNavigationContextConstants";

export const GridKeyboardNavigationContext = React.createContext<GridKeyboardNavigationContextType>(null);

/**
 * @param {({topElement: MutableRefObject, bottomElement: MutableRefObject}|
 * {leftElement: MutableRefObject, rightElement: MutableRefObject})[]} positions - the positions of the navigable items
 * @param {*} wrapperRef - a reference for a wrapper element which contains all the referenced elements
 * @param options - { disabled: boolean }
 */
export const useGridKeyboardNavigationContext = (
  positions: Position[],
  wrapperRef: GridElementRef,
  options: { disabled: boolean } = { disabled: false }
) => {
  const directionMaps = useMemo(() => getDirectionMaps(positions), [positions]);
  const upperContext = useContext(GridKeyboardNavigationContext);
  const { lastNavigationDirectionRef } = useLastNavigationDirection();

  const onWrapperFocus = useCallback(() => {
    const keyboardDirection = lastNavigationDirectionRef.current;
    if (!keyboardDirection || options.disabled) {
      return;
    }
    const oppositeDirection = getOppositeDirection(keyboardDirection);
    const refToFocus = getOutmostElementInDirection(directionMaps, oppositeDirection);
    refToFocus?.current?.focus();
  }, [directionMaps, options.disabled, lastNavigationDirectionRef]);
  useEventListener({ eventName: "focus", callback: onWrapperFocus, ref: wrapperRef });

  const onOutboundNavigation = useCallback(
    (elementRef: GridElementRef, direction: NavDirections) => {
      if (options.disabled) return;
      const maybeNextElement = getNextElementToFocusInDirection(directionMaps[direction], elementRef);
      if (maybeNextElement) {
        elementRef.current?.blur();
        maybeNextElement.current?.focus();
        return;
      }
      // nothing on that direction - try updating the upper context
      upperContext?.onOutboundNavigation(wrapperRef, direction);
    },
    [directionMaps, upperContext, wrapperRef, options.disabled]
  );
  return { onOutboundNavigation };
};
