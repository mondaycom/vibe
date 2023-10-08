import React, { useContext, useCallback, useMemo } from "react";
import useEventListener from "../../hooks/useEventListener";
import { useLastNavigationDirection } from "../Menu/Menu/hooks/useLastNavigationDirection";
import {
  DirectionMap,
  Direction,
  getDirectionMaps,
  getNextElementToFocusInDirection,
  getOppositeDirection,
  getOutmostElementInDirection
} from "./helper";
import VibeComponentProps from "../../types/VibeComponentProps";
import { NavDirections } from "../../hooks/useFullKeyboardListeners";

export interface GridKeyboardNavigationContextProps extends VibeComponentProps {
  disabled?: boolean;
}
export const GridKeyboardNavigationContext = React.createContext<any>(null);

/**
 * @param {({topElement: React.MutableRefObject, bottomElement: React.MutableRefObject}|
 * {leftElement: React.MutableRefObject, rightElement: React.MutableRefObject})[]} positions - the positions of the navigable items
 * @param {*} wrapperRef - a reference for a wrapper element which contains all the referenced elements
 */
export const useGridKeyboardNavigationContext = (
  positions: (
    | {
        topElement: React.MutableRefObject<any>;
        bottomElement: React.MutableRefObject<any>;
      }
    | {
        leftElement: React.MutableRefObject<any>;
        rightElement: React.MutableRefObject<any>;
      }
  )[],
  wrapperRef: React.MutableRefObject<any>,
  { disabled }: GridKeyboardNavigationContextProps = { disabled: false }
) => {
  const directionMaps: DirectionMap = useMemo(() => getDirectionMaps(positions), [positions]);
  const upperContext: any = useContext(GridKeyboardNavigationContext);
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
  useEventListener({
    eventName: "focus",
    callback: onWrapperFocus,
    ref: wrapperRef
  });

  const onOutboundNavigation = useCallback(
    (elementRef: React.MutableRefObject<any>, direction: string) => {
      if (disabled) return;
      const maybeNextElement = getNextElementToFocusInDirection(directionMaps[direction as NavDirections], elementRef);
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
