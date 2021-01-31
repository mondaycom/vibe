import { useCallback } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";

const isChildSelectable = (newIndex, children) => {
  const child = children[newIndex];
  return child.type.isSelectable && !child.props.disabled;
};

export default function useMenuKeyboardNavigation(
  hasOpenSubMenu,
  children,
  activeItemIndex,
  setActiveItemIndex,
  isVisible
) {
  const onArrowUp = useCallback(() => {
    let newIndex;
    if (hasOpenSubMenu) return false;
    for (let offset = children.length - 1; offset > 0; offset--) {
      newIndex = (activeItemIndex + offset) % children.length;
      if (isChildSelectable(newIndex, children)) {
        break;
      }
    }
    (newIndex || newIndex === 0) && setActiveItemIndex(newIndex);
  }, [setActiveItemIndex, children, activeItemIndex, hasOpenSubMenu]);

  const onArrowDown = useCallback(() => {
    if (hasOpenSubMenu) return false;
    let newIndex;

    if (!children) return;
    for (let offset = 1; offset <= children.length; offset++) {
      newIndex = (activeItemIndex + offset) % children.length;
      if (isChildSelectable(newIndex, children)) {
        break;
      }
    }
    (newIndex || newIndex === 0) && setActiveItemIndex(newIndex);
  }, [setActiveItemIndex, children, activeItemIndex, hasOpenSubMenu]);

  const onEnterClickCallback = useCallback(
    _event => {
      if (!isVisible) return;
      if (activeItemIndex === -1) {
        setActiveItemIndex(0);
      }
    },
    [setActiveItemIndex, activeItemIndex, isVisible]
  );

  useKeyEvent({
    keys: ["ArrowDown"],
    callback: onArrowDown
  });

  useKeyEvent({
    keys: ["ArrowUp"],
    callback: onArrowUp
  });

  useKeyEvent({
    keys: ["Enter"],
    callback: onEnterClickCallback
  });
}
