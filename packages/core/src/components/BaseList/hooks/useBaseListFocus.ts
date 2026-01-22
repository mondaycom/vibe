import { useCallback, useEffect, useRef, useState } from "react";
import { findSelectedItemIndex, getItemId } from "../utils/BaseListUtils";

export interface UseBaseListFocusProps {
  defaultFocusIndex: number;
  onFocusChange?: (index: number, id?: string) => void;
  listId: string | undefined;
  disabled: boolean;
}

export interface UseBaseListFocusResult {
  focusIndex: number;
  activeDescendantId: string | undefined;
  updateFocusedItem: (itemId: string, index: number) => void;
  registerItem: (itemRef: HTMLElement | null, index: number) => void;
  childrenRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const useBaseListFocus = ({
  defaultFocusIndex,
  onFocusChange,
  listId,
  disabled
}: UseBaseListFocusProps): UseBaseListFocusResult => {
  const childrenRefs = useRef<(HTMLElement | null)[]>([]);
  const [focusIndex, setFocusIndex] = useState(defaultFocusIndex);
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
    if (disabled || !listId) return;

    const refs = childrenRefs.current;
    const selectedIndex = findSelectedItemIndex(refs);
    const targetIndex = selectedIndex !== -1 ? selectedIndex : defaultFocusIndex;
    const element = refs[targetIndex];

    if (element) {
      const itemId = getItemId(listId, targetIndex, element.id);
      updateFocusedItem(itemId, targetIndex);
    }
  }, [listId, disabled, defaultFocusIndex, updateFocusedItem]);

  return {
    focusIndex,
    activeDescendantId,
    updateFocusedItem,
    registerItem,
    childrenRefs
  };
};
