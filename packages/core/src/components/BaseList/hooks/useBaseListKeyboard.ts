import { useCallback } from "react";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { keyCodes } from "../../../constants/keyCodes";
import {
  findAdjacentFocusableIndex,
  findFirstFocusableIndex,
  findLastFocusableIndex,
  isFocusableListItem
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

const PAGE_JUMP_SIZE = 10;

/**
 * Finds the best focusable index for PageUp.
 * Searches from target toward current position, returning the first focusable item found.
 * Falls back to first focusable item if none found in the jump range.
 */
const findPageUpIndex = (refs: (HTMLElement | null)[], currentIndex: number): number | undefined => {
  const targetIndex = Math.max(0, currentIndex - PAGE_JUMP_SIZE);

  // Search forward from target toward current position
  for (let i = targetIndex; i < currentIndex; i++) {
    if (isFocusableListItem(refs[i])) {
      return i;
    }
  }

  // No focusable item in jump range - go to first focusable item
  const firstFocusableIndex = findFirstFocusableIndex(refs);
  return firstFocusableIndex !== -1 ? firstFocusableIndex : undefined;
};

/**
 * Finds the best focusable index for PageDown.
 * Searches from target toward current position, returning the first focusable item found.
 * Falls back to last focusable item if none found in the jump range.
 */
const findPageDownIndex = (refs: (HTMLElement | null)[], currentIndex: number): number | undefined => {
  const targetIndex = Math.min(refs.length - 1, currentIndex + PAGE_JUMP_SIZE);

  // Search backward from target toward current position
  for (let i = targetIndex; i > currentIndex; i--) {
    if (isFocusableListItem(refs[i])) {
      return i;
    }
  }

  // No focusable item in jump range - go to last focusable item
  const lastFocusableIndex = findLastFocusableIndex(refs);
  return lastFocusableIndex !== -1 ? lastFocusableIndex : undefined;
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

        case keyCodes.PAGE_UP:
          event.preventDefault();
          newFocusIndex = findPageUpIndex(refs, focusIndex);
          break;

        case keyCodes.PAGE_DOWN:
          event.preventDefault();
          newFocusIndex = findPageDownIndex(refs, focusIndex);
          break;

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
