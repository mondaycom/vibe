import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useKeyEvent from "../useKeyEvent";
import usePrevious from "../usePrevious";
import useEventListener from "../useEventListener";

const ARROW_DIRECTIONS = {
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  RIGHT: "ArrowRight",
  LEFT: "ArrowLeft"
};

const ENTER_KEY = "Enter";
const SPACE_KEY = " ";

const ROLES = {
  APPLICATION: "application",
  COMBOBOX: "combobox",
  COMPOSITE: "composite",
  GROUP: "group",
  TEXTBOX: "textbox",
  MENU: "menu"
};

function useActiveDescendantListFocus({
  focusedElementRef, // the reference for the component that listens to keyboard
  itemsIds,
  isItemSelectable,
  onItemClick,
  defaultVisualFocusFirstItem = false,
  focusedElementRole = ROLES.GROUP,
  isHorizontalList = false,
  useDocumentEventListeners = false,
  isIgnoreSpaceAsItemSelection = false
}) {
  const pressKeys = useMemo(
    () => (isIgnoreSpaceAsItemSelection ? [ENTER_KEY] : [ENTER_KEY, SPACE_KEY]),
    [isIgnoreSpaceAsItemSelection]
  );
  const itemsCount = itemsIds.length;
  const previousFocusedElementRef = usePrevious(focusedElementRef);
  const nextArrow = isHorizontalList ? ARROW_DIRECTIONS.RIGHT : ARROW_DIRECTIONS.DOWN;
  const backArrow = isHorizontalList ? ARROW_DIRECTIONS.LEFT : ARROW_DIRECTIONS.UP;

  const [visualFocusItemIndex, setVisualFocusItemIndex] = useState(-1);
  const visualFocusItemId = itemsIds[visualFocusItemIndex];
  const previousItemIds = usePrevious(itemsIds);
  const previousVisualFocusItemIndex = usePrevious(visualFocusItemIndex);
  const prevVisualFocusItemId = usePrevious(itemsIds[visualFocusItemIndex]);

  const getFirstSelectable = useMemo(
    () => () => {
      for (let idx = 0; idx < itemsIds.length; idx++) {
        if (isItemSelectable(idx)) {
          return idx;
        }
      }
    },
    [itemsIds]
  );

  useEffect(() => {
    if (defaultVisualFocusFirstItem) {
      const itemsChanged = previousItemIds !== itemsIds;
      const itemFocusedChanged = visualFocusItemId !== prevVisualFocusItemId;
      const itemPlacementTheSame = previousVisualFocusItemIndex === visualFocusItemIndex;
      if (itemsChanged && itemFocusedChanged && itemPlacementTheSame) {
        const foundIndex = itemsIds.indexOf(prevVisualFocusItemId);
        if (foundIndex >= 0 && isItemSelectable(foundIndex)) {
          setVisualFocusItemIndex(foundIndex);
        } else {
          setVisualFocusItemIndex(getFirstSelectable());
        }
      }
    }
  }, [
    previousVisualFocusItemIndex,
    prevVisualFocusItemId,
    visualFocusItemId,
    visualFocusItemIndex,
    defaultVisualFocusFirstItem,
    itemsIds,
    getFirstSelectable,
    previousItemIds
  ]);

  const triggerByKeyboard = useRef(false);
  const onArrowKeyEvent = useCallback(
    direction => {
      // we desire to change the visual focus item only if the user pressed on the keyboard arrows keys while
      // the focusedElementRef is naturally focus
      if (document.activeElement === focusedElementRef.current) {
        let newIndex;
        triggerByKeyboard.current = true;

        if (direction === nextArrow) {
          if (visualFocusItemIndex > itemsCount - 1) return;
          // Go over all the next items until found one which is selectable
          for (let offset = 1; offset <= itemsCount; offset++) {
            const nextIndex = (visualFocusItemIndex + offset) % itemsCount;
            if (isItemSelectable(nextIndex)) {
              newIndex = nextIndex;
              break;
            }
          }
        } else if (direction === backArrow) {
          for (let offset = 1; offset <= itemsCount - 1; offset++) {
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

        if (newIndex > -1 && newIndex !== visualFocusItemIndex) setVisualFocusItemIndex(newIndex);
      }
    },
    [focusedElementRef, nextArrow, backArrow, visualFocusItemIndex, itemsCount, isItemSelectable]
  );
  const onArrowBack = useCallback(() => {
    onArrowKeyEvent(backArrow);
  }, [backArrow, onArrowKeyEvent]);

  const onArrowNext = useCallback(() => {
    onArrowKeyEvent(nextArrow);
  }, [nextArrow, onArrowKeyEvent]);

  const baseOnClickCallback = useCallback(
    (event, itemIndex) => {
      const hasValidIndex = itemIndex >= 0 && itemIndex < itemsCount;
      if (!onItemClick || !hasValidIndex || !isItemSelectable(itemIndex)) return;
      if (visualFocusItemIndex !== itemIndex) setVisualFocusItemIndex(itemIndex);
      onItemClick(event, itemIndex);
      triggerByKeyboard.current = event instanceof MouseEvent;
      // If click is triggered by keyboard return focus on the input again
      if (!triggerByKeyboard.current) {
        requestAnimationFrame(() => focusedElementRef.current?.focus());
      }
    },
    [itemsCount, onItemClick, isItemSelectable, visualFocusItemIndex, focusedElementRef]
  );

  const keyboardOnSelectCallback = useCallback(
    event => {
      // we desire to change the trigger the active item on click callback only if the user pressed on the keyboard arrows keys while
      // the focusedElementRef is naturally focus
      if (focusedElementRef.current.contains(document.activeElement)) {
        baseOnClickCallback(event, visualFocusItemIndex);
      }
    },
    [baseOnClickCallback, focusedElementRef, visualFocusItemIndex]
  );
  const createOnItemClickCallback = useCallback(
    itemIndex => event => baseOnClickCallback(event, itemIndex),
    [baseOnClickCallback]
  );

  const onBlurCallback = useCallback(() => {
    if (visualFocusItemIndex !== -1) {
      setVisualFocusItemIndex(-1);
    }
  }, [visualFocusItemIndex]);

  const onFocusCallback = useCallback(() => {
    if (visualFocusItemIndex === -1 && defaultVisualFocusFirstItem) {
      triggerByKeyboard.current = true;
      setVisualFocusItemIndex(getFirstSelectable());
    }
  }, [setVisualFocusItemIndex, getFirstSelectable, defaultVisualFocusFirstItem, visualFocusItemIndex]);

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
    keys: pressKeys,
    callback: keyboardOnSelectCallback,
    ...listenerOptions
  });

  useEventListener({
    eventName: "blur",
    ref: focusedElementRef,
    callback: onBlurCallback
  });

  useEventListener({
    eventName: "focus",
    ref: focusedElementRef,
    callback: onFocusCallback
  });

  // if element unmount act like element got blur event
  useEffect(() => {
    // if element unmount
    if (focusedElementRef?.current === null && previousFocusedElementRef?.current !== null) {
      onBlurCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedElementRef.current, previousFocusedElementRef, onBlurCallback]);

  return {
    visualFocusItemIndex: triggerByKeyboard.current ? visualFocusItemIndex : undefined,
    visualFocusItemId: triggerByKeyboard.current ? visualFocusItemId : undefined,
    createOnItemClickCallback,
    onItemClickCallback: baseOnClickCallback,
    focusedElementProps: { "aria-activedescendant": visualFocusItemId, role: focusedElementRole }
  };
}

useActiveDescendantListFocus.roles = ROLES;

export default useActiveDescendantListFocus;
