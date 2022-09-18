import { useMemo, useState, useCallback, MutableRefObject } from "react";
import {
  useSupportArrowsKeyboardNavigation,
  useSupportPressItemKeyboardNavigation,
  useSetDefaultItemOnFocusEvent,
  useKeepFocusOnItemWhenListChanged,
  useCleanVisualFocusOnBlur
} from "./useActiveDescendantListFocusHooks";

enum Role {
  APPLICATION = "application",
  COMBOBOX = "combobox",
  COMPOSITE = "composite",
  GROUP = "group",
  TEXTBOX = "textbox",
  MENU = "menu"
}

function useActiveDescendantListFocus({
  focusedElementRef, // the reference for the component that listens to keyboard
  itemsIds,
  isItemSelectable,
  onItemClick,
  defaultVisualFocusFirstIndex = false,
  focusedElementRole = Role.GROUP,
  isHorizontalList = false,
  useDocumentEventListeners = false,
  isIgnoreSpaceAsItemSelection = false
}: {
  focusedElementRef: MutableRefObject<HTMLElement>;
  itemsIds: string[];
  isItemSelectable: (index: number) => boolean;
  onItemClick: (event: KeyboardEvent | MouseEvent, index: number) => void;
  defaultVisualFocusFirstIndex?: boolean;
  focusedElementRole?: Role;
  isHorizontalList?: boolean;
  isIgnoreSpaceAsItemSelection?: boolean;
  useDocumentEventListeners?: boolean;
}) {
  const defaultVisualFocusItemIndex = defaultVisualFocusFirstIndex ? 0 : -1;
  const itemsCount = itemsIds.length;
  const [visualFocusItemIndex, setVisualFocusItemIndex] = useState<number>(-1);
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
    (visualFocusItemId: string, isTriggeredByKeyboard: boolean) => {
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
    (itemIndex: number) => (event: KeyboardEvent | MouseEvent) => onItemClick(event, itemIndex),
    [onItemClick]
  );
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

useActiveDescendantListFocus.roles = Role;

export default useActiveDescendantListFocus;
