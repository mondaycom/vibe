import { useCallback, useMemo, useState } from "react";
import useKeyEvent from "../useKeyEvent";

const ARROW_DIRECTIONS = {
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  RIGHT: "ArrowRight",
  LEFT: "ArrowLeft"
};

const ENTER_KEYS = ["Enter"];

const ROLES = {
  APPLICATION: "application",
  COMBOBOX: "combobox",
  COMPOSITE: "composite",
  GROUP: "group",
  TEXTBOX: "textbox"
};

function useActiveDescendantListFocus({
  focusedElementRef, // the reference for the component that listens to keyboard
  itemsIds,
  isItemSelectable,
  onItemClick,
  focusedElementRole = ROLES.GROUP,
  isHorizontalList = false,
  useDocumentEventListeners = false
}) {
  const itemsCount = itemsIds.length;
  const nextArrow = isHorizontalList ? ARROW_DIRECTIONS.RIGHT : ARROW_DIRECTIONS.DOWN;
  const backArrow = isHorizontalList ? ARROW_DIRECTIONS.LEFT : ARROW_DIRECTIONS.UP;

  const [visualFocusItemIndex, setVisualFocusItemIndex] = useState(-1);
  const onArrowKeyEvent = useCallback(
    direction => {
      let newIndex;

      if (direction === nextArrow) {
        if (visualFocusItemIndex >= items.length - 1) return;
        // Go over all the next items until found one which is selectable
        for (let offset = 1; offset <= itemsCount; offset++) {
          const nextIndex = (visualFocusItemIndex + offset) % itemsCount;
          if (isItemSelectable(nextIndex)) {
            newIndex = nextIndex;
            break;
          }
        }
      } else if (direction === backArrow) {
        for (let offset = 1; offset <= visualFocusItemIndex; offset++) {
          let prevIndex = visualFocusItemIndex - offset;
          if (prevIndex < 0) {
            prevIndex = itemsCount + prevIndex;
          }
          if (isItemSelectable(prevIndex)) {
            newIndex = prevIndex;
            break;
          }
        }
      }

      if (newIndex) setVisualFocusItemIndex(newIndex);
    },
    [nextArrow, backArrow, visualFocusItemIndex, itemsCount, isItemSelectable]
  );
  const onArrowBack = useCallback(() => {
    onArrowKeyEvent(backArrow);
  }, [backArrow, onArrowKeyEvent]);

  const onArrowNext = useCallback(() => {
    onArrowKeyEvent(nextArrow);
  }, [nextArrow, onArrowKeyEvent]);

  const overrideOnClickCallback = useCallback(
    (event, itemIndex) => {
      const hasValidIndex = visualFocusItemIndex >= 0 && visualFocusItemIndex < itemsCount;
      if (!onItemClick || !hasValidIndex || !isItemSelectable(visualFocusItemIndex)) return;
      if (visualFocusItemIndex !== itemIndex) setVisualFocusItemIndex(itemIndex);
      onItemClick(event, visualFocusItemIndex);
      if (event instanceof MouseEvent) {
        // set focus on input again
        requestAnimationFrame(() => focusedElementRef.current?.focus());
      }
    },
    [visualFocusItemIndex, itemsCount, onItemClick, isItemSelectable, focusedElementRef]
  );

  const listenerOptions = useMemo(() => {
    if (useDocumentEventListeners) return undefined;

    return {
      ref: focusedElementRef,
      preventDefault: true,
      stopPropagation: true
    };
  }, [useDocumentEventListeners, focusedElementRef]);

  useKeyEvent({
    keys: [nextArrow],
    callback: onArrowNext,
    ...listenerOptions
  });

  useKeyEvent({
    keys: [backArrow],
    callback: onArrowBack,
    ...listenerOptions
  });

  useKeyEvent({
    keys: ENTER_KEYS,
    callback: overrideOnClickCallback,
    ...listenerOptions
  });

  const visualFocusItemId = itemsIds[visualFocusItemIndex];
  return {
    visualFocusItemIndex,
    visualFocusItemId,
    onItemClick: overrideOnClickCallback,
    focusedElementProps: { "aria-activedescendant": visualFocusItemId, role: focusedElementRole }
  };
}

useActiveDescendantListFocus.roles = ROLES;

export default useActiveDescendantListFocus;
