import { useEffect } from "react";
import { ReactElement } from "react";
import { isMenuChildSelectable } from "../utils/utils";

export interface UseFocusOnMountProps {
  focusItemIndexOnMount: number;
  focusChildOnMount: ReactElement;
  getNextSelectableIndex: (index: number) => number | null;
  updateActiveItemIndex: (index: number) => void;
  setIsInitialFocusSet: (state: boolean) => void;
}

export const useFocusOnMount = ({
  focusItemIndexOnMount,
  focusChildOnMount,
  getNextSelectableIndex,
  updateActiveItemIndex,
  setIsInitialFocusSet
}: UseFocusOnMountProps) => {
  useEffect(() => {
    if (focusItemIndexOnMount === -1) {
      return;
    }

    const indexToFocusOnMount = isMenuChildSelectable(focusChildOnMount)
      ? focusItemIndexOnMount
      : getNextSelectableIndex(focusItemIndexOnMount);

    if (indexToFocusOnMount !== null) {
      requestAnimationFrame(() => {
        updateActiveItemIndex(indexToFocusOnMount);
        setIsInitialFocusSet(true);
      });
    }
  }, [focusChildOnMount, focusItemIndexOnMount, getNextSelectableIndex, setIsInitialFocusSet, updateActiveItemIndex]);
};
