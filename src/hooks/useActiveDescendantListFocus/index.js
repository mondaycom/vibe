import { useMemo, useState, useCallback } from "react";
import {
  useSupportArrowsKeyboardNavigation,
  useSupportPressItemKeyboardNavigation,
  SetDefaultItemOnFocusEvent,
  useKeepFocusOnItemWhenListChanged
} from "hooks/useActiveDescendantListFocus/useActiveDescendantListFocusHooks";
import { useListenFocusTriggers } from "hooks/useListenFocusTriggers";

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
  defaultVisualFocusItemIndex = -1,
  focusedElementRole = ROLES.GROUP,
  isHorizontalList = false,
  useDocumentEventListeners = false,
  isIgnoreSpaceAsItemSelection = false
}) {
  const itemsCount = itemsIds.length;
  const [visualFocusItemIndex, setVisualFocusItemIndex] = useState(defaultVisualFocusItemIndex);
  const visualFocusItemId = itemsIds[visualFocusItemIndex];

  // For only display visual focus when the focus trigger is not from mouse
  const listenerOptions = useMemo(() => {
    if (useDocumentEventListeners) return undefined;

    return {
      ref: focusedElementRef,
      preventDefault: true,
      stopPropagation: true
    };
  }, [useDocumentEventListeners, focusedElementRef]);
  const [triggerByKeyboard, setTriggerByKeyboard] = useState(false);
  const onFocusByKeyboard = useCallback(() => !triggerByKeyboard && setTriggerByKeyboard(true), [triggerByKeyboard]);
  const onFocusByMouse = useCallback(() => triggerByKeyboard && setTriggerByKeyboard(false), [triggerByKeyboard]);
  useListenFocusTriggers({ ref: focusedElementRef, onFocusByKeyboard, onFocusByMouse });

  useSupportArrowsKeyboardNavigation({
    itemsCount,
    focusedElementRef,
    visualFocusItemIndex,
    setVisualFocusItemIndex,
    triggerByKeyboard,
    setTriggerByKeyboard,
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

  SetDefaultItemOnFocusEvent({
    focusedElementRef,
    isItemSelectable,
    visualFocusItemIndex,
    setVisualFocusItemIndex,
    itemsCount,
    triggerByKeyboard,
    defaultVisualFocusItemIndex
  });

  useKeepFocusOnItemWhenListChanged({
    visualFocusItemIndex,
    itemsIds,
    isItemSelectable,
    setVisualFocusItemIndex
  });

  // this callback function is not needed anymore (the developer not need to replace is element on click with this callback)
  // and we keep returning it only for backward compatibility
  const createOnItemClickCallback = useCallback(itemIndex => event => onItemClick(event, itemIndex), [onItemClick]);

  return {
    visualFocusItemIndex: triggerByKeyboard ? visualFocusItemIndex : undefined,
    visualFocusItemId: triggerByKeyboard ? visualFocusItemId : undefined,
    focusedElementProps: {
      "aria-activedescendant": triggerByKeyboard ? visualFocusItemId : undefined,
      role: focusedElementRole,
      // this callback function is not needed anymore (the developer not need to replace is element on click with this callback)
      // and we keep returning it only for backward compatibility
      onItemClickCallback: onItemClick,
      createOnItemClickCallback
    }
  };
}

useActiveDescendantListFocus.roles = ROLES;

export default useActiveDescendantListFocus;
