import React, { useContext, useCallback, useMemo } from "react";
import useEventListener from "../../hooks/useEventListener";
import {
  focusElementWithDirection,
  getDirectionMaps,
  getOppositeDirection,
  getOutmostElementInDirection
} from "./helper";

export const GridKeyboardNavigationContext = React.createContext();

/**
 * @param {({topElement: React.MutableRefObject, bottomElement: React.MutableRefObject}|
 * {leftElement: React.MutableRefObject, rightElement: React.MutableRefObject})[]} positions - the positions of the navigable items
 * @param {*} wrapperRef - a reference for a wrapper element which contains all the referenced elements
 */
export const useGridKeyboardNavigationContext = (positions, wrapperRef) => {
  const directionMaps = useMemo(() => getDirectionMaps(positions), [positions]);
  const upperContext = useContext(GridKeyboardNavigationContext);

  const onWrapperFocus = useCallback(
    e => {
      const keyboardDirection = e?.detail?.keyboardDirection;
      if (!keyboardDirection) {
        return;
      }
      const oppositeDirection = getOppositeDirection(keyboardDirection);
      const elementToFocus = getOutmostElementInDirection(directionMaps, oppositeDirection);
      focusElementWithDirection(elementToFocus, keyboardDirection);
    },
    [directionMaps]
  );
  useEventListener({ eventName: "focus", callback: onWrapperFocus, ref: wrapperRef });

  const onOutboundNavigation = useCallback(
    (elementRef, direction) => {
      const maybeNextElement = directionMaps[direction].get(elementRef);
      if (maybeNextElement?.current) {
        elementRef.current?.blur();
        focusElementWithDirection(maybeNextElement, direction);
        return;
      }
      // nothing on that direction - try updating the upper context
      upperContext?.onOutboundNavigation(wrapperRef, direction);
    },
    [directionMaps, upperContext, wrapperRef]
  );
  return { onOutboundNavigation };
};
