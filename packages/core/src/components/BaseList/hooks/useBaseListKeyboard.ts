import { useCallback } from "react";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { keyCodes } from "../../../constants/keyCodes";
import {
  findAdjacentFocusableIndex,
  findFirstFocusableIndex,
  findLastFocusableIndex,
  getItemId,
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

const findPageUpIndex = (refs: (HTMLElement | null)[], currentIndex: number): number | undefined => {
  const targetIndex = Math.max(0, currentIndex - PAGE_JUMP_SIZE);

  for (let i = targetIndex; i < currentIndex; i++) {
    if (isFocusableListItem(refs[i])) {
      return i;
    }
  }

  const firstFocusableIndex = findFirstFocusableIndex(refs);
  return firstFocusableIndex !== -1 ? firstFocusableIndex : undefined;
};

const findPageDownIndex = (refs: (HTMLElement | null)[], currentIndex: number): number | undefined => {
  const targetIndex = Math.min(refs.length - 1, currentIndex + PAGE_JUMP_SIZE);

  for (let i = targetIndex; i > currentIndex; i--) {
    if (isFocusableListItem(refs[i])) {
      return i;
    }
  }

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
          const itemId = getItemId(listId, newFocusIndex, element.id);
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
