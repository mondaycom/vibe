import { NAV_DIRECTIONS } from "../useFullKeyboardListeners";

export function getActiveIndexFromInboundNavigation({ direction, numberOfItemsInLine, itemsCount }) {
  const getRawIndex = () => {
    const firstLineMiddleIndex = Math.floor(numberOfItemsInLine / 2);
    if (direction === NAV_DIRECTIONS.UP) {
      // last line, middle
      const rowCount = Math.ceil(itemsCount / numberOfItemsInLine);
      return (rowCount - 1) * numberOfItemsInLine + firstLineMiddleIndex;
    }
    if (direction === NAV_DIRECTIONS.DOWN) {
      // first line, middle
      return firstLineMiddleIndex;
    }
    if (direction === NAV_DIRECTIONS.LEFT) {
      // middle line, last item
      let result = numberOfItemsInLine - 1;
      const midIndex = Math.floor((itemsCount - 1) / 2);
      while (result < midIndex) {
        result += numberOfItemsInLine;
      }
      return result;
    }
    if (direction === NAV_DIRECTIONS.RIGHT) {
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

function calcRawNewIndexAfterArrowNavigation({ activeIndex, itemsCount, numberOfItemsInLine, direction }) {
  const getIndexLine = index => Math.ceil((index + 1) / numberOfItemsInLine);

  const horizontalChange = isIndexIncrease => {
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

  const verticalChange = isIndexIncrease => {
    const nextIndex = activeIndex + numberOfItemsInLine * (isIndexIncrease ? 1 : -1);
    if (nextIndex < 0 || itemsCount <= nextIndex) {
      return { isOutbound: true };
    }
    return { isOutbound: false, nextIndex };
  };

  switch (direction) {
    case NAV_DIRECTIONS.RIGHT:
      return horizontalChange(true);
    case NAV_DIRECTIONS.LEFT:
      return horizontalChange(false);
    case NAV_DIRECTIONS.DOWN:
      return verticalChange(true);
    case NAV_DIRECTIONS.UP:
      return verticalChange(false);
  }
}

export function calcActiveIndexAfterArrowNavigation({
  activeIndex,
  itemsCount,
  numberOfItemsInLine,
  direction,
  disabledIndexes = []
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
