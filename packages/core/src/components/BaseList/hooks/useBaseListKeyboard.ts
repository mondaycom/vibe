import { useCallback } from "react";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { keyCodes } from "../../../constants/keyCodes";
import {
  findAdjacentFocusableIndex,
  findFirstFocusableIndex,
  findLastFocusableIndex,
  isListItem
} from "../utils/BaseListUtils";

export interface UseBaseListKeyboardProps {
  focusIndex: number;
  childrenRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  listId: string | undefined;
  updateFocusedItem: (itemId: string, index: number) => void;
  componentRef: React.RefObject<HTMLElement>;
  disabled: boolean;
}

const NAVIGATION_KEYS: string[] = [
  keyCodes.UP_ARROW,
  keyCodes.DOWN_ARROW,
  keyCodes.HOME,
  keyCodes.END,
  keyCodes.PAGE_UP,
  keyCodes.PAGE_DOWN
];

const findPageNavigationIndex = (
  refs: (HTMLElement | null)[],
  currentIndex: number,
  targetIndex: number,
  direction: "up" | "down",
  fallbackFn: (refs: (HTMLElement | null)[]) => number
): number | undefined => {
  const step = direction === "up" ? 1 : -1;
  const condition = direction === "up" ? (i: number) => i < currentIndex : (i: number) => i > currentIndex;

  for (let i = targetIndex; condition(i); i += step) {
    if (isListItem(refs[i])) {
      return i;
    }
  }

  const fallbackIndex = fallbackFn(refs);
  return fallbackIndex !== -1 ? fallbackIndex : undefined;
};

export const useBaseListKeyboard = ({
  focusIndex,
  childrenRefs,
  listId,
  updateFocusedItem,
  componentRef,
  disabled
}: UseBaseListKeyboardProps): void => {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (disabled) return;

      const { key } = event;
      const refs = childrenRefs.current;
      let newFocusIndex: number | undefined;

      switch (key) {
        case keyCodes.UP_ARROW:
          event.preventDefault();
          newFocusIndex = findAdjacentFocusableIndex(refs, focusIndex, "prev");
          break;

        case keyCodes.DOWN_ARROW:
          event.preventDefault();
          newFocusIndex = findAdjacentFocusableIndex(refs, focusIndex, "next");
          break;

        case keyCodes.HOME:
          event.preventDefault();
          newFocusIndex = findFirstFocusableIndex(refs);
          if (newFocusIndex === -1) newFocusIndex = undefined;
          break;

        case keyCodes.END:
          event.preventDefault();
          newFocusIndex = findLastFocusableIndex(refs);
          if (newFocusIndex === -1) newFocusIndex = undefined;
          break;

        case keyCodes.PAGE_UP: {
          event.preventDefault();
          const targetIndex = Math.max(0, focusIndex - 10);
          newFocusIndex = findPageNavigationIndex(refs, focusIndex, targetIndex, "up", findFirstFocusableIndex);
          break;
        }

        case keyCodes.PAGE_DOWN: {
          event.preventDefault();
          const targetIndex = Math.min(refs.length - 1, focusIndex + 10);
          newFocusIndex = findPageNavigationIndex(refs, focusIndex, targetIndex, "down", findLastFocusableIndex);
          break;
        }

        default:
          return;
      }

      if (newFocusIndex !== undefined) {
        const element = refs[newFocusIndex];
        if (element) {
          const itemId = element.id || `${listId}-item-${newFocusIndex}`;
          updateFocusedItem(itemId, newFocusIndex);
          element.focus();
        }
      }
    },
    [focusIndex, childrenRefs, listId, updateFocusedItem, disabled]
  );

  useKeyEvent({
    keys: NAVIGATION_KEYS,
    callback: onKeyDown,
    ref: componentRef
  });
};
