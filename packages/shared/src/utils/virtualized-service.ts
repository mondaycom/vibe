const LAST_ITEM_ID = "~~~lastItem~~~";
const EMPTY_OBJECT: Record<string, never> = {};

type NormalizedItem<T> = {
  item: T;
  index: number;
  height: number;
  size: number;
  offsetTop: number;
  offset: number;
};

type NormalizedItems<T> = Record<string, NormalizedItem<T>>;
type IdGetter<T> = (item: T, index: number) => string;
type SizeGetter<T> = (item: T, index: number) => number;

export const getNormalizedItems = <T>(items: T[], idGetter: IdGetter<T>, sizeGetter: SizeGetter<T>) => {
  const normalizedItems: NormalizedItems<T> = {};
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

export const isItemInView = (item: { offsetTop: number }, scrollTop: number, offsetHeight: number) => {
  const isItemUnderTheViewableArea = item.offsetTop > scrollTop + offsetHeight;
  const isItemAboveTheViewableArea = item.offsetTop < scrollTop;

  return !isItemUnderTheViewableArea && !isItemAboveTheViewableArea;
};

export const getMaxOffset = <T>(offsetSize: number, normalizedItems: NormalizedItems<T>) => {
  const lastItem = normalizedItems[LAST_ITEM_ID];
  if (!lastItem) return 0;
  const { size, offset } = lastItem;
  return offset + size - offsetSize; // max offset
};

export const easeInOutQuint = (time: number) => {
  let t = time;
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
};

function findItemAtOffset<T>(
  items: T[],
  normalizedItems: NormalizedItems<T>,
  idGetter: IdGetter<T>,
  fromIndex: number,
  offset: number
) {
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
export const isLayoutDirectionScrollbarVisible = <T>(
  items: T[],
  normalizedItems: NormalizedItems<T>,
  idGetter: IdGetter<T>,
  componentSize: number
) => {
  if (!componentSize) return false;
  const lastExistingItem = items[items.length - 1] || EMPTY_OBJECT;
  const lastExistingItemId = idGetter(lastExistingItem as T, items.length - 1);
  const normalizedItem = normalizedItems[lastExistingItemId];
  if (!normalizedItem) return false;
  const { offset: lastExistingItemIdOffset, size: lastExistingItemSize } = normalizedItems[lastExistingItemId];
  const maxOffset = lastExistingItemIdOffset + lastExistingItemSize;
  const isVisible = maxOffset > componentSize;
  return isVisible;
};

function isEmptyObject(obj: unknown) {
  return obj === EMPTY_OBJECT;
}

export const getOnItemsRenderedData = <T>(
  items: T[],
  normalizedItems: NormalizedItems<T>,
  idGetter: IdGetter<T>,
  visibleStartIndex: number,
  visibleStopIndex: number,
  listSize: number,
  currentOffsetTop: number
) => {
  const firstVisibleItem = items[visibleStartIndex] || EMPTY_OBJECT;
  const secondVisibleItem = items[visibleStartIndex + 1] || EMPTY_OBJECT;
  const lastVisibleItem = items[visibleStopIndex] || EMPTY_OBJECT;
  const firstItemId = isEmptyObject(firstVisibleItem) ? undefined : idGetter(firstVisibleItem as T, visibleStartIndex);
  const secondItemId = isEmptyObject(secondVisibleItem)
    ? undefined
    : idGetter(secondVisibleItem as T, visibleStartIndex + 1);
  const lastItemId = isEmptyObject(lastVisibleItem) ? undefined : idGetter(lastVisibleItem as T, visibleStopIndex);
  const centerOffset = currentOffsetTop + listSize / 2;
  const { offsetTop: firstItemOffsetTop, height: firstItemHeight } = normalizedItems[firstItemId!] || EMPTY_OBJECT;
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
