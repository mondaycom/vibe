import React, { useRef, useContext, useCallback } from "react";
import useEventListener from "../../hooks/useEventListener";
import { focusElementWithDirection, getDirectionMaps, getOppositeDirection, getOutmostElementInDirection } from "./GridKeyboardNavigationContextHelper";

export const GridKeyboardNavigationContext = React.createContext();

export const useGridKeyboardNavigationContext = (positions, wrapperRef) => {
  const directionMaps = useRef(getDirectionMaps(positions));
  const upperContext = useContext(GridKeyboardNavigationContext);

  const onWrapperFocus = useCallback(
    e => {
      const keyboardDirection = e?.detail?.keyboardDirection;
      if (!keyboardDirection) {
        return;
      }
      const oppositeDirection = getOppositeDirection(keyboardDirection);
      const elementToFocus = getOutmostElementInDirection(directionMaps.current, oppositeDirection);
      focusElementWithDirection(elementToFocus, keyboardDirection);
    },
    [directionMaps]
  );
  useEventListener({ eventName: "focus", callback: onWrapperFocus, ref: wrapperRef });

  const onOutboundNavigation = useCallback(
    (elementRef, direction) => {
      const maybeNextElement = directionMaps.current[direction].get(elementRef);
      if (maybeNextElement?.current) {
        elementRef.current?.blur();
        focusElementWithDirection(maybeNextElement, direction);
        return;
      }
      // nothing on that direction - try updating the upper context
      upperContext?.onOutboundNavigation(wrapperRef, direction);
    },
    [upperContext, wrapperRef]
  );
  return { onOutboundNavigation };
};
