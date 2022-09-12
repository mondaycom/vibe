const LAST_ITEM_ID = "~~~lastItem~~~";
const EMPTY_OBJECT = {};
export const getNormalizedItems = (items, idGetter, sizeGetter) => {
  const normalizedItems = {};
  let offset = 0;

  const lastIndex = items.length - 1;
  items.forEach((item, index) => {
    const size = sizeGetter(item, index);
    const uniqueId = idGetter(item, index);
    // keep height/offsetTop for backward compatibility
    normalizedItems[uniqueId] = { item, index, height: size, size, offsetTop: offset, offset };
    if (lastIndex === index) {
      normalizedItems[LAST_ITEM_ID] = normalizedItems[uniqueId];
    }
    offset += size;
  });

  return normalizedItems;
};

export const isItemInView = (item, scrollTop, offsetHeight) => {
  const isItemUnderTheViewableArea = item.offsetTop > scrollTop + offsetHeight;
  const isItemAboveTheViewableArea = item.offsetTop < scrollTop;

  return !isItemUnderTheViewableArea && !isItemAboveTheViewableArea;
};

export const getMaxOffset = (offsetSize, normalizedItems) => {
  const lastItem = normalizedItems[LAST_ITEM_ID];
  if (!lastItem) return 0;
  const { size, offset } = lastItem;
  return offset + size - offsetSize; // max offset
};

export const easeInOutQuint = time => {
  let t = time;
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
};

function findItemAtOffset(items, normalizedItems, idGetter, fromIndex, offset) {
  for (let i = fromIndex; i < items.length; i++) {
    const itemId = idGetter(items[i], i);
    const normalizedItem = normalizedItems[itemId];
    const { height, offsetTop } = normalizedItem || EMPTY_OBJECT;
    if (height + offsetTop > offset) {
      return itemId;
    }
  }
  return null;
}

// for vertical layout - this returns true when vertical scrollbar visible
// for horizontal layout - this returns true when horizontal scrollbar visible
export const isLayoutDirectionScrollbarVisible = (items, normalizedItems, idGetter, componentSize) => {
  if (!componentSize) return false;
  const lastExistingItem = items[items.length - 1] || EMPTY_OBJECT;
  const lastExistingItemId = idGetter(lastExistingItem, items.length - 1);
  const normalizedItem = normalizedItems[lastExistingItemId];
  if (!normalizedItem) return false;
  const { offset: lastExistingItemIdOffset, size: lastExistingItemSize } = normalizedItems[lastExistingItemId];
  const maxOffset = lastExistingItemIdOffset + lastExistingItemSize;
  const isVisible = maxOffset > componentSize;
  return isVisible;
};

function isEmptyObject(obj) {
  return obj === EMPTY_OBJECT;
}

export const getOnItemsRenderedData = (
  items,
  normalizedItems,
  idGetter,
  visibleStartIndex,
  visibleStopIndex,
  listSize,
  currentOffsetTop
) => {
  const firstVisibleItem = items[visibleStartIndex] || EMPTY_OBJECT;
  const secondVisibleItem = items[visibleStartIndex + 1] || EMPTY_OBJECT;
  const lastVisibleItem = items[visibleStopIndex] || EMPTY_OBJECT;
  const firstItemId = isEmptyObject(firstVisibleItem) ? undefined : idGetter(firstVisibleItem, visibleStartIndex);
  const secondItemId = isEmptyObject(secondVisibleItem)
    ? undefined
    : idGetter(secondVisibleItem, visibleStartIndex + 1);
  const lastItemId = isEmptyObject(lastVisibleItem) ? undefined : idGetter(lastVisibleItem, visibleStopIndex);
  const centerOffset = currentOffsetTop + listSize / 2;
  const { offsetTop: firstItemOffsetTop, height: firstItemHeight } = normalizedItems[firstItemId] || EMPTY_OBJECT;
  const firstItemOffsetEnd = firstItemOffsetTop + firstItemHeight;
  const centerItemId = findItemAtOffset(items, normalizedItems, idGetter, visibleStartIndex, centerOffset);

  return {
    firstItemId,
    secondItemId,
    lastItemId,
    centerItemId,
    firstItemOffsetEnd,
    currentOffsetTop
  };
};
