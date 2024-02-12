import { ReactElement, useCallback } from "react";
import { isMenuChildSelectable } from "../utils/utils";

export const useAdjacentSelectableMenuIndex = ({ children }: { children: ReactElement[] }) => {
  const getNextSelectableIndex = useCallback(
    (currentActiveItemIndex: number) => {
      let newIndex;
      for (let offset = 1; offset <= children.length; offset++) {
        newIndex = (currentActiveItemIndex + offset) % children.length;
        if (isMenuChildSelectable(children[newIndex])) {
          return newIndex;
        }
      }
      return null;
    },
    [children]
  );

  const getPreviousSelectableIndex = useCallback(
    (currentActiveItemIndex: number) => {
      let newIndex;
      for (let offset = children.length - 1; offset > 0; offset--) {
        newIndex = (currentActiveItemIndex + offset) % children.length;
        if (isMenuChildSelectable(children[newIndex])) {
          return newIndex;
        }
      }
      return null;
    },
    [children]
  );

  return { getNextSelectableIndex, getPreviousSelectableIndex };
};
