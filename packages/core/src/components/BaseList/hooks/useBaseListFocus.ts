import { useCallback, useEffect, useRef, useState } from "react";
import { findSelectedItemIndex } from "../utils/BaseListUtils";

export interface UseBaseListFocusProps {
  defaultFocusIndex: number;
  onFocusChange?: (index: number, id?: string) => void;
  listId: string | undefined;
  componentRef: React.RefObject<HTMLElement>;
  disabled: boolean;
}

export interface UseBaseListFocusResult {
  focusIndex: number;
  updateFocusedItem: (itemId: string, index: number) => void;
  registerItem: (itemRef: HTMLElement | null, index: number) => void;
  childrenRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const useBaseListFocus = ({
  defaultFocusIndex,
  onFocusChange,
  listId,
  componentRef,
  disabled
}: UseBaseListFocusProps): UseBaseListFocusResult => {
  const childrenRefs = useRef<(HTMLElement | null)[]>([]);
  const [focusIndex, setFocusIndex] = useState(defaultFocusIndex);

  const updateFocusedItem = useCallback(
    (itemId: string, index: number) => {
      if (disabled) return;

      setFocusIndex(index);
      onFocusChange?.(index, itemId);
      componentRef.current?.setAttribute("aria-activedescendant", itemId);
    },
    [onFocusChange, componentRef, disabled]
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
      const itemId = element.id || `${listId}-item-${targetIndex}`;
      updateFocusedItem(itemId, targetIndex);
    }
  }, [listId, disabled, defaultFocusIndex, updateFocusedItem]);

  return {
    focusIndex,
    updateFocusedItem,
    registerItem,
    childrenRefs
  };
};
