import { useCallback, useMemo } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";

const ARROW_DIRECTIONS = {
  UP: "up",
  DOWN: "down"
};

const ARROW_DOWN_KEYS = ["ArrowDown"];
const ARROW_UP_KEYS = ["ArrowUp"];
const ENTER_KEYS = ["Enter"];

const isChildSelectable = (newIndex, children) => {
  const child = children[newIndex];
  return child.type.isSelectable && !child.props.disabled;
};

export default function useMenuKeyboardNavigation(
  hasOpenSubMenu,
  children,
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

      if (direction === ARROW_DIRECTIONS.DOWN) {
        for (let offset = 1; offset <= children.length; offset++) {
          newIndex = (activeItemIndex + offset) % children.length;
          if (isChildSelectable(newIndex, children)) {
            break;
          }
        }
      } else if (direction === ARROW_DIRECTIONS.UP) {
        for (let offset = children.length - 1; offset > 0; offset--) {
          newIndex = (activeItemIndex + offset) % children.length;
          if (isChildSelectable(newIndex, children)) {
            break;
          }
        }
      }

      if (newIndex || newIndex === 0) setActiveItemIndex(newIndex);
    },
    [activeItemIndex, children, hasOpenSubMenu, setActiveItemIndex]
  );
  const onArrowUp = useCallback(() => {
    onArrowKeyEvent(ARROW_DIRECTIONS.UP);
  }, [onArrowKeyEvent]);

  const onArrowDown = useCallback(() => {
    onArrowKeyEvent(ARROW_DIRECTIONS.DOWN);
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
