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

  const { triggeredByKeyboard, setTriggeredByKeyboard } = useSetDefaultItemOnFocusEvent({
    focusedElementRef,
    isItemSelectable,
    visualFocusItemIndex,
    setVisualFocusItemIndex,
    itemsCount,
    defaultVisualFocusItemIndex
  });

  console.log(triggeredByKeyboard, visualFocusItemId, visualFocusItemIndex);

  const setVisualFocusItemId = useCallback(
    (visualFocusItemId, isTriggeredByKeyboard) => {
      setTriggeredByKeyboard(isTriggeredByKeyboard);
      if (visualFocusItemId == null || undefined) {
        setVisualFocusItemIndex(-1);
      } else {
        const itemIndex = itemsIds.indexOf(visualFocusItemId);

        if (itemIndex > -1 && itemIndex !== visualFocusItemIndex) {
          console.log("change to ---!", visualFocusItemId, itemIndex, itemsIds, visualFocusItemIndex);
          setVisualFocusItemIndex(itemIndex);
        }
      }
    },
    [
      itemsIds,
      setTriggeredByKeyboard,
      setVisualFocusItemIndex,
      triggeredByKeyboard,
      visualFocusItemIndex,
      visualFocusItemIndex
    ]
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

  useKeepFocusOnItemWhenListChanged({
    visualFocusItemIndex,
    itemsIds,
    isItemSelectable,
    setVisualFocusItemIndex
  });

  useCleanVisualFocusOnBlur({
    focusedElementRef,
    visualFocusItemIndex,
    setVisualFocusItemIndex,
    triggeredByKeyboard,
    setTriggeredByKeyboard
  });

  // this callback function is not needed anymore (the developer does not need to replace  the element's on click with this callback).
  // we keep it for backward compatibility
  const backwardCompatibilityCreateOnClickCallback = useCallback(
    itemIndex => event => onItemClick(event, itemIndex),
    [onItemClick]
  );
  return {
    visualFocusItemIndex: triggeredByKeyboard ? visualFocusItemIndex : undefined,
    visualFocusItemId: triggeredByKeyboard ? visualFocusItemId : undefined,
    focusedElementProps: {
      "aria-activedescendant": triggeredByKeyboard ? visualFocusItemId : undefined,
      role: focusedElementRole
    },
    // this callback function is not needed anymore (the developer does not need to replace  the element's on click with this callback).
    // we keep it for backward compatibility
    onItemClickCallback: onItemClick,
    createOnItemClickCallback: backwardCompatibilityCreateOnClickCallback,
    setVisualFocusItemId,
    setTriggeredByKeyboard
  };
}

useActiveDescendantListFocus.roles = ROLES;

export default useActiveDescendantListFocus;
