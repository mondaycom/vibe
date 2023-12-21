import { NavDirections } from "../useFullKeyboardListeners";

export function getActiveIndexFromInboundNavigation({
  direction,
  numberOfItemsInLine,
  itemsCount
}: {
  direction: NavDirections;
  numberOfItemsInLine: number;
  itemsCount: number;
}) {
  const getRawIndex = () => {
    const firstLineMiddleIndex = Math.floor(numberOfItemsInLine / 2);
    if (direction === NavDirections.UP) {
      // last line, middle
      const rowCount = Math.ceil(itemsCount / numberOfItemsInLine);
      return (rowCount - 1) * numberOfItemsInLine + firstLineMiddleIndex;
    }
    if (direction === NavDirections.DOWN) {
      // first line, middle
      return firstLineMiddleIndex;
    }
    if (direction === NavDirections.LEFT) {
      // middle line, last item
      let result = numberOfItemsInLine - 1;
      const midIndex = Math.floor((itemsCount - 1) / 2);
      while (result < midIndex) {
        result += numberOfItemsInLine;
      }
      return result;
    }
    if (direction === NavDirections.RIGHT) {
      // middle line, first item
      let result = 0;
      const midIndex = Math.floor((itemsCount - 1) / 2);
      while (result + numberOfItemsInLine < midIndex) {
        result += numberOfItemsInLine;
      }
      return result;
    }
  };

  const rawIndex = getRawIndex();
  return Math.max(0, Math.min(rawIndex, itemsCount - 1));
}

function calcRawNewIndexAfterArrowNavigation({
  activeIndex,
  itemsCount,
  numberOfItemsInLine,
  direction
}: {
  activeIndex: number;
  itemsCount: number;
  numberOfItemsInLine: number;
  direction: NavDirections;
}) {
  const getIndexLine = (index: number) => Math.ceil((index + 1) / numberOfItemsInLine);

  const horizontalChange = (isIndexIncrease: boolean) => {
    const nextIndex = activeIndex + (isIndexIncrease ? 1 : -1);
    if (nextIndex < 0 || itemsCount <= nextIndex) {
      return { isOutbound: true };
    }
    const currentLine = getIndexLine(activeIndex);
    const nextIndexLine = getIndexLine(nextIndex);
    if (currentLine !== nextIndexLine) {
      return { isOutbound: true };
    }

    return { isOutbound: false, nextIndex };
  };

  const verticalChange = (isIndexIncrease: boolean) => {
    const nextIndex = activeIndex + numberOfItemsInLine * (isIndexIncrease ? 1 : -1);
    if (nextIndex < 0 || itemsCount <= nextIndex) {
      return { isOutbound: true };
    }
    return { isOutbound: false, nextIndex };
  };

  switch (direction) {
    case NavDirections.RIGHT:
      return horizontalChange(true);
    case NavDirections.LEFT:
      return horizontalChange(false);
    case NavDirections.DOWN:
      return verticalChange(true);
    case NavDirections.UP:
      return verticalChange(false);
  }
}

export function calcActiveIndexAfterArrowNavigation({
  activeIndex,
  itemsCount,
  numberOfItemsInLine,
  direction,
  disabledIndexes = []
}: {
  activeIndex: number;
  itemsCount: number;
  numberOfItemsInLine: number;
  direction: NavDirections;
  disabledIndexes?: number[];
}) {
  let result = calcRawNewIndexAfterArrowNavigation({ activeIndex, itemsCount, numberOfItemsInLine, direction });
  while (!result.isOutbound && disabledIndexes.includes(result.nextIndex)) {
    result = calcRawNewIndexAfterArrowNavigation({
      activeIndex: result.nextIndex,
      itemsCount,
      numberOfItemsInLine,
      direction
    });
  }

  return result;
}
