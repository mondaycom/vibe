import { useCallback, useEffect } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";

const ARROW_DIRECTIONS = {
  UP: "up",
  DOWN: "down"
};

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
  resetOpenSubMenuIndex
) {
  const onArrowKeyEvent = useCallback(
    direction => {
      let newIndex;
      const refElement = ref && ref.current;
      if (document.activeElement === refElement && hasOpenSubMenu) {
        resetOpenSubMenuIndex(); // as a fallback for blur from sub menu and sub menu not closing
        return;
      }
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
    [ref, activeItemIndex, children, hasOpenSubMenu, setActiveItemIndex, resetOpenSubMenuIndex]
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
    [setActiveItemIndex, activeItemIndex, isVisible, ref, hasOpenSubMenu, resetOpenSubMenuIndex]
  );

  useKeyEvent({
    keys: ["ArrowDown"],
    callback: onArrowDown,
    ref,
    preventDefault: true
  });

  useKeyEvent({
    keys: ["ArrowUp"],
    callback: onArrowUp,
    ref,
    preventDefault: true
  });

  useKeyEvent({
    keys: ["Enter"],
    callback: onEnterClickCallback,
    ref,
    preventDefault: true
  });
}
