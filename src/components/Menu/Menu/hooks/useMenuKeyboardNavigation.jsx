import { useCallback, useMemo } from "react";
import { ARROW_DOWN_KEYS, ARROW_UP_KEYS } from "../../../../hooks/useFullKeyboardListeners";
import useKeyEvent from "../../../../hooks/useKeyEvent";

const ArrowDirections = {
  UP: "up",
  DOWN: "down"
};

const ENTER_KEYS = ["Enter"];

export default function useMenuKeyboardNavigation(
  hasOpenSubMenu,
  getNextSelectableIndex,
  getPreviousSelectableIndex,
  activeItemIndex,
  setActiveItemIndex,
  isVisible,
  ref,
  useDocumentEventListeners
) {
  const onArrowKeyEvent = useCallback(
    direction => {
      let newIndex;

      if (hasOpenSubMenu) return false;

      if (direction === ArrowDirections.DOWN) {
        newIndex = getNextSelectableIndex(activeItemIndex);
      } else if (direction === ArrowDirections.UP) {
        newIndex = getPreviousSelectableIndex(activeItemIndex);
      }

      if (newIndex || newIndex === 0) setActiveItemIndex(newIndex);
    },
    [activeItemIndex, getNextSelectableIndex, getPreviousSelectableIndex, hasOpenSubMenu, setActiveItemIndex]
  );
  const onArrowUp = useCallback(() => {
    onArrowKeyEvent(ArrowDirections.UP);
  }, [onArrowKeyEvent]);

  const onArrowDown = useCallback(() => {
    onArrowKeyEvent(ArrowDirections.DOWN);
  }, [onArrowKeyEvent]);

  const onEnterClickCallback = useCallback(
    _event => {
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
