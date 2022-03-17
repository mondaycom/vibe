import React, { useContext, useCallback, useMemo } from "react";
import useEventListener from "../../hooks/useEventListener";
import { useLastNavigationDirection } from "../Menu/Menu/hooks/useLastNavigationDirection";
import {
  getDirectionMaps,
  getNextElementToFocusInDirection,
  getOppositeDirection,
  getOutmostElementInDirection
} from "./helper";

export const GridKeyboardNavigationContext = React.createContext();

/**
 * @param {({topElement: React.MutableRefObject, bottomElement: React.MutableRefObject}|
 * {leftElement: React.MutableRefObject, rightElement: React.MutableRefObject})[]} positions - the positions of the navigable items
 * @param {*} wrapperRef - a reference for a wrapper element which contains all the referenced elements
 */
export const useGridKeyboardNavigationContext = (positions, wrapperRef, { disabled } = { disabled: false }) => {
  const directionMaps = useMemo(() => getDirectionMaps(positions), [positions]);
  const upperContext = useContext(GridKeyboardNavigationContext);
  const { lastNavigationDirectionRef } = useLastNavigationDirection();

  const onWrapperFocus = useCallback(() => {
    const keyboardDirection = lastNavigationDirectionRef.current;
    if (!keyboardDirection || disabled) {
      return;
    }
    const oppositeDirection = getOppositeDirection(keyboardDirection);
    const refToFocus = getOutmostElementInDirection(directionMaps, oppositeDirection);
    refToFocus?.current?.focus();
  }, [directionMaps, disabled, lastNavigationDirectionRef]);
  useEventListener({ eventName: "focus", callback: onWrapperFocus, ref: wrapperRef });

  const onOutboundNavigation = useCallback(
    (elementRef, direction) => {
      if (disabled) return;
      const maybeNextElement = getNextElementToFocusInDirection(directionMaps[direction], elementRef);
      if (maybeNextElement) {
        elementRef.current?.blur();
        maybeNextElement.current?.focus();
        return;
      }
      // nothing on that direction - try updating the upper context
      upperContext?.onOutboundNavigation(wrapperRef, direction);
    },
    [directionMaps, upperContext, wrapperRef, disabled]
  );
  return { onOutboundNavigation };
};
