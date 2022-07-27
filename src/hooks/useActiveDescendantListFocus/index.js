import { useMemo, useState, useCallback } from "react";
import {
  useSupportArrowsKeyboardNavigation,
  useSupportPressItemKeyboardNavigation,
  useSetDefaultItemOnFocusEvent,
  useKeepFocusOnItemWhenListChanged,
  useCleanVisualFocusOnBlur
} from "./useActiveDescendantListFocusHooks";

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
  defaultVisualFocusFirstIndex = false,
  focusedElementRole = ROLES.GROUP,
  isHorizontalList = false,
  useDocumentEventListeners = false,
  isIgnoreSpaceAsItemSelection = false
}) {
  const defaultVisualFocusItemIndex = defaultVisualFocusFirstIndex ? 0 : -1;
  const itemsCount = itemsIds.length;
  const [visualFocusItemIndex, setVisualFocusItemIndex] = useState(-1);
  const visualFocusItemId = itemsIds[visualFocusItemIndex];

  const listenerOptions = useMemo(() => {
    if (useDocumentEventListeners) return undefined;

    return {
      ref: focusedElementRef,
      preventDefault: true,
      stopPropagation: true
    };
  }, [useDocumentEventListeners, focusedElementRef]);

  const { triggeredByKeyboard } = useSetDefaultItemOnFocusEvent({
    focusedElementRef,
    isItemSelectable,
    visualFocusItemIndex,
    setVisualFocusItemIndex,
    itemsCount,
    defaultVisualFocusItemIndex
  });

  const setVisualFocusItemId = useCallback(
    (visualFocusItemId, isTriggeredByKeyboard) => {
      triggeredByKeyboard.current = isTriggeredByKeyboard;
      const itemIndex = itemsIds.indexOf(visualFocusItemId);
      if (itemIndex > -1 && itemIndex !== visualFocusItemIndex) {
        setVisualFocusItemIndex(itemIndex);
      }
    },
    [itemsIds, triggeredByKeyboard, visualFocusItemIndex]
  );

  useSupportArrowsKeyboardNavigation({
    itemsCount,
    focusedElementRef,
    visualFocusItemIndex,
    setVisualFocusItemIndex,
    triggeredByKeyboard,
    isHorizontalList,
    isItemSelectable,
    listenerOptions
  });

  useSupportPressItemKeyboardNavigation({
    visualFocusItemIndex,
    itemsCount,
    focusedElementRef,
    setVisualFocusItemIndex,
    onItemClick,
    isItemSelectable,
    listenerOptions,
    isIgnoreSpaceAsItemSelection
  });

  useKeepFocusOnItemWhenListChanged({
    visualFocusItemIndex,
    itemsIds,
    isItemSelectable,
    setVisualFocusItemIndex
  });

  useCleanVisualFocusOnBlur({ focusedElementRef, visualFocusItemIndex, setVisualFocusItemIndex });

  // this callback function is not needed anymore (the developer does not need to replace  the element's on click with this callback).
  // we keep it for backward compatibility
  const backwardCompatibilityCreateOnClickCallback = useCallback(
    itemIndex => event => onItemClick(event, itemIndex),
    [onItemClick]
  );
  console.log(triggeredByKeyboard);
  return {
    visualFocusItemIndex: triggeredByKeyboard.current ? visualFocusItemIndex : undefined,
    visualFocusItemId: triggeredByKeyboard.current ? visualFocusItemId : undefined,
    focusedElementProps: {
      "aria-activedescendant": triggeredByKeyboard.current ? visualFocusItemId : undefined,
      role: focusedElementRole
    },
    // this callback function is not needed anymore (the developer does not need to replace  the element's on click with this callback).
    // we keep it for backward compatibility
    onItemClickCallback: onItemClick,
    createOnItemClickCallback: backwardCompatibilityCreateOnClickCallback,
    setVisualFocusItemId
  };
}

useActiveDescendantListFocus.roles = ROLES;

export default useActiveDescendantListFocus;
