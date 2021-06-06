import { useCallback, useMemo } from "react";
import useKeyEvent from "./useKeyEvent";

const ARROW_DIRECTIONS = {
  UP: "up",
  DOWN: "down"
};

const ARROW_DOWN_KEYS = ["ArrowDown"];
const ARROW_UP_KEYS = ["ArrowUp"];
const ENTER_KEYS = ["Enter"];

export default function useListKeyboardNavigation(
  ref, // the reference for the component that listens to keyboard
  options,
  activeItemIndex,
  setActiveItemIndex,
  isChildSelectable,
  onClick,
  useDocumentEventListeners = false
) {
  const onArrowKeyEvent = useCallback(
    direction => {
      let newIndex;

      if (direction === ARROW_DIRECTIONS.DOWN) {
        if (activeItemIndex >= options.length - 1) return;
        for (let offset = 1; offset < options.length; offset++) {
          const nextIndex = activeItemIndex + offset;
          if (isChildSelectable(nextIndex, options)) {
            newIndex = nextIndex;
            break;
          }
        }
      } else if (direction === ARROW_DIRECTIONS.UP) {
        if (activeItemIndex === 0) {
          newIndex = -1;
        } else {
          for (let offset = 1; offset <= activeItemIndex; offset++) {
            const prevIndex = activeItemIndex - offset;
            if (isChildSelectable(prevIndex, options)) {
              newIndex = prevIndex;
              break;
            }
          }
        }
      }

      if (newIndex || newIndex === 0) setActiveItemIndex(newIndex);
    },
    [isChildSelectable, activeItemIndex, options, setActiveItemIndex]
  );
  const onArrowUp = useCallback(() => {
    onArrowKeyEvent(ARROW_DIRECTIONS.UP);
  }, [onArrowKeyEvent]);

  const onArrowDown = useCallback(() => {
    onArrowKeyEvent(ARROW_DIRECTIONS.DOWN);
  }, [onArrowKeyEvent]);

  const onEnterClickCallback = useCallback(
    event => {
      const hasValidIndex = activeItemIndex || activeItemIndex === 0;
      if (!onClick || !hasValidIndex || !isChildSelectable(activeItemIndex, options)) return;
      onClick(event, activeItemIndex);
    },
    [activeItemIndex, onClick, isChildSelectable, options]
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
