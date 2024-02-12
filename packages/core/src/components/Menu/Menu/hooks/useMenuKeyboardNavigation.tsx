import React, { useCallback, useMemo } from "react";
import { ARROW_DOWN_KEYS, ARROW_UP_KEYS, ENTER_KEYS, NavDirections } from "../../../../hooks/useFullKeyboardListeners";
import useKeyEvent from "../../../../hooks/useKeyEvent";

export default function useMenuKeyboardNavigation({
  hasOpenSubMenu,
  getNextSelectableIndex,
  getPreviousSelectableIndex,
  activeItemIndex,
  setActiveItemIndex,
  isVisible,
  ref,
  useDocumentEventListeners
}: {
  hasOpenSubMenu: boolean;
  getNextSelectableIndex: (index: number) => number;
  getPreviousSelectableIndex: (index: number) => number;
  activeItemIndex: number;
  setActiveItemIndex: (index: number) => void;
  isVisible: boolean;
  ref: React.RefObject<HTMLElement>;
  useDocumentEventListeners: boolean;
}) {
  const onArrowKeyEvent = useCallback(
    (direction: NavDirections) => {
      let newIndex;

      if (hasOpenSubMenu) return false;

      if (direction === NavDirections.DOWN) {
        newIndex = getNextSelectableIndex(activeItemIndex);
      } else if (direction === NavDirections.UP) {
        newIndex = getPreviousSelectableIndex(activeItemIndex);
      }

      if (newIndex || newIndex === 0) setActiveItemIndex(newIndex);
    },
    [activeItemIndex, getNextSelectableIndex, getPreviousSelectableIndex, hasOpenSubMenu, setActiveItemIndex]
  );
  const onArrowUp = useCallback(() => {
    onArrowKeyEvent(NavDirections.UP);
  }, [onArrowKeyEvent]);

  const onArrowDown = useCallback(() => {
    onArrowKeyEvent(NavDirections.DOWN);
  }, [onArrowKeyEvent]);

  const onEnterClickCallback = useCallback(
    (_event: React.KeyboardEvent) => {
      if (!isVisible) return;

      if (activeItemIndex === -1) {
        setActiveItemIndex(0);
      }
    },
    [setActiveItemIndex, activeItemIndex, isVisible]
  );

  const listenerOptions = useMemo(() => {
    if (useDocumentEventListeners) return undefined;

    return {
      ref,
      preventDefault: true,
      stopPropagation: true
    };
  }, [useDocumentEventListeners, ref]);

  useKeyEvent({
    keys: ARROW_DOWN_KEYS,
    callback: onArrowDown,
    ...listenerOptions
  });

  useKeyEvent({
    keys: ARROW_UP_KEYS,
    callback: onArrowUp,
    ...listenerOptions
  });

  useKeyEvent({
    keys: ENTER_KEYS,
    callback: onEnterClickCallback,
    ...listenerOptions
  });
}
