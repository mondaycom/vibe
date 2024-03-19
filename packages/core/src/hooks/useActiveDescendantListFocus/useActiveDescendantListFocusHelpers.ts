type ActiveDependentHelper = {
  isItemSelectable: (index: number) => boolean;
  visualFocusItemIndex: number;
  itemsCount: number;
};

export function getNextSelectableIndex({ isItemSelectable, visualFocusItemIndex, itemsCount }: ActiveDependentHelper) {
  if (visualFocusItemIndex > itemsCount - 1) return;
  // Go over all the next items until found one which is selectable
  for (let offset = 1; offset <= itemsCount; offset++) {
    const nextIndex = (visualFocusItemIndex + offset) % itemsCount;
    if (isItemSelectable(nextIndex)) {
      return nextIndex;
    }
  }
}
export function getPreviousSelectableIndex({
  isItemSelectable,
  visualFocusItemIndex,
  itemsCount
}: ActiveDependentHelper) {
  for (let offset = 1; offset <= itemsCount - 1; offset++) {
    let prevIndex = visualFocusItemIndex - offset;
    if (prevIndex < 0) {
      prevIndex = itemsCount + prevIndex;
    }
    if (isItemSelectable(prevIndex)) {
      return prevIndex;
    }
  }
}
