import { ReactElement, useCallback } from "react";

export const useAdjacentSelectableMenuIndex = ({ children }: { children: ReactElement[] }) => {
  const isChildSelectable = useCallback(
    (newIndex: number) => {
      const child = children[newIndex];
      // @ts-ignore
      return child.type.isSelectable && !child.props.disabled;
    },
    [children]
  );

  const getNextSelectableIndex = useCallback(
    (currentActiveItemIndex: number) => {
      let newIndex;
      for (let offset = 1; offset <= children.length; offset++) {
        newIndex = (currentActiveItemIndex + offset) % children.length;
        if (isChildSelectable(newIndex)) {
          return newIndex;
        }
      }
      return null;
    },
    [children, isChildSelectable]
  );

  const getPreviousSelectableIndex = useCallback(
    (currentActiveItemIndex: number) => {
      let newIndex;
      for (let offset = children.length - 1; offset > 0; offset--) {
        newIndex = (currentActiveItemIndex + offset) % children.length;
        if (isChildSelectable(newIndex)) {
          return newIndex;
        }
      }
      return null;
    },
    [children, isChildSelectable]
  );

  return { getNextSelectableIndex, getPreviousSelectableIndex };
};
