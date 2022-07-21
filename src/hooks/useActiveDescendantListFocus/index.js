import { useMemo, useState, useCallback } from "react";
import {
  useSupportArrowsKeyboardNavigation,
  useSupportPressItemKeyboardNavigation,
  useSetDefaultItemOnFocusEvent,
  useKeepFocusOnItemWhenListChanged,
  useIsTriggeredByKeyboard
} from "hooks/useActiveDescendantListFocus/useActiveDescendantListFocusHooks";

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
  const [visualFocusItemIndex, setVisualFocusItemIndex] = useState(defaultVisualFocusItemIndex);
  const visualFocusItemId = itemsIds[visualFocusItemIndex];

  const listenerOptions = useMemo(() => {
    if (useDocumentEventListeners) return undefined;

    return {
      ref: focusedElementRef,
      preventDefault: true,
      stopPropagation: true
    };
  }, [useDocumentEventListeners, focusedElementRef]);
  const { triggeredByKeyboard, setTriggeredByKeyboard } = useIsTriggeredByKeyboard({ focusedElementRef });
  const setVisualFocusItemId = useCallback(
    (visualFocusItemId, isTriggeredByKeyboard) => {
      if (!triggeredByKeyboard) setTriggeredByKeyboard(isTriggeredByKeyboard);
      const itemIndex = itemsIds.indexOf(visualFocusItemId);
      if (itemIndex > -1 && itemIndex !== visualFocusItemIndex) {
        setVisualFocusItemIndex(itemIndex);
      }
    },
    [itemsIds, setTriggeredByKeyboard, triggeredByKeyboard, visualFocusItemIndex]
  );
  useSupportArrowsKeyboardNavigation({
    itemsCount,
    focusedElementRef,
    visualFocusItemIndex,
    setVisualFocusItemIndex,
    triggeredByKeyboard,
    setTriggeredByKeyboard,
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

  useSetDefaultItemOnFocusEvent({
    focusedElementRef,
    isItemSelectable,
    visualFocusItemIndex,
    setVisualFocusItemIndex,
    itemsCount,
    triggeredByKeyboard,
    defaultVisualFocusItemIndex
  });

  useKeepFocusOnItemWhenListChanged({
    visualFocusItemIndex,
    itemsIds,
    isItemSelectable,
    setVisualFocusItemIndex
  });

  // this callback function is not needed anymore (the developer does not need to replace  the element's on click with this callback)  - we keep it for backward compatibility
  // and we keep returning it only for backward compatibility
  const createOnItemClickCallback = useCallback(itemIndex => event => onItemClick(event, itemIndex), [onItemClick]);

  return {
    visualFocusItemIndex: triggeredByKeyboard ? visualFocusItemIndex : undefined,
    visualFocusItemId: triggeredByKeyboard ? visualFocusItemId : undefined,
    focusedElementProps: {
      "aria-activedescendant": triggeredByKeyboard ? visualFocusItemId : undefined,
      role: focusedElementRole
    },
    // this callback function is not needed anymore (the developer not need to replace is element on click with this callback)
    // and we keep returning it only for backward compatibility
    onItemClickCallback: onItemClick,
    createOnItemClickCallback,
    setVisualFocusItemId
  };
}

useActiveDescendantListFocus.roles = ROLES;

export default useActiveDescendantListFocus;
