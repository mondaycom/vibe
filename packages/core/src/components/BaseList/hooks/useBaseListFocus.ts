import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { findSelectedItemIndex } from "../utils/BaseListUtils";

export interface UseBaseListFocusProps {
  controlledFocusIndex?: number;
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
  controlledFocusIndex,
  defaultFocusIndex,
  onFocusChange,
  listId,
  componentRef,
  disabled
}: UseBaseListFocusProps): UseBaseListFocusResult => {
  const childrenRefs = useRef<(HTMLElement | null)[]>([]);
  const isControlled = useMemo(() => controlledFocusIndex !== undefined, [controlledFocusIndex]);
  const [internalFocusIndex, setInternalFocusIndex] = useState(defaultFocusIndex);
  const focusIndex = isControlled ? controlledFocusIndex : internalFocusIndex;

  const updateFocusedItem = useCallback(
    (itemId: string, index: number) => {
      if (disabled) return;

      if (!isControlled) {
        setInternalFocusIndex(index);
      }
      onFocusChange?.(index, itemId);
      componentRef.current?.setAttribute("aria-activedescendant", itemId);
    },
    [isControlled, onFocusChange, componentRef, disabled]
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
