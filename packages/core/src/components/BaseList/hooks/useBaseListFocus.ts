import { useCallback, useEffect, useRef, useState } from "react";
import { findSelectedItemIndex, getItemId } from "../utils/baseListUtils";

export interface UseBaseListFocusProps {
  /**
   * Index of the item that should be focused initially.
   */
  defaultFocusIndex: number;
  /**
   * Callback fired when the focused item changes.
   */
  onFocusChange?: (index: number, id?: string) => void;
  /**
   * The unique identifier for the list.
   */
  listId: string | undefined;
  /**
   * If true, disables focus management.
   */
  disabled: boolean;
}

export interface UseBaseListFocusResult {
  /**
   * The index of the currently focused item.
   */
  focusIndex: number;
  /**
   * The ID of the active descendant for aria-activedescendant.
   */
  activeDescendantId: string | undefined;
  /**
   * Callback to update the focused item.
   */
  updateFocusedItem: (itemId: string, index: number) => void;
  /**
   * Callback to register an item ref.
   */
  registerItem: (itemRef: HTMLElement | null, index: number) => void;
  /**
   * Ref array containing all item DOM elements.
   */
  childrenRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const useBaseListFocus = ({
  defaultFocusIndex,
  onFocusChange,
  listId,
  disabled
}: UseBaseListFocusProps): UseBaseListFocusResult => {
  const childrenRefs = useRef<(HTMLElement | null)[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-1);
  const [activeDescendantId, setActiveDescendantId] = useState<string | undefined>(undefined);

  const updateFocusedItem = useCallback(
    (itemId: string, index: number) => {
      if (disabled) return;

      setFocusIndex(index);
      setActiveDescendantId(itemId);
      onFocusChange?.(index, itemId);
    },
    [onFocusChange, disabled]
  );

  const registerItem = useCallback((itemRef: HTMLElement | null, index: number) => {
    childrenRefs.current[index] = itemRef;
  }, []);

  useEffect(() => {
    if (disabled || isInitialized) return;

    const refs = childrenRefs.current;
    // Wait until refs are populated
    if (refs.length === 0 || refs.every(ref => ref === null)) return;

    const selectedIndex = findSelectedItemIndex(refs);
    const targetIndex = selectedIndex !== -1 ? selectedIndex : defaultFocusIndex;
    const element = refs[targetIndex];

    if (element) {
      const itemId = getItemId(listId, targetIndex, element.id);
      updateFocusedItem(itemId, targetIndex);
      setIsInitialized(true);
    }
  }, [listId, disabled, defaultFocusIndex, updateFocusedItem, isInitialized]);

  return {
    focusIndex,
    activeDescendantId,
    updateFocusedItem,
    registerItem,
    childrenRefs
  };
};
