const LAST_ITEM_ID = "~~~lastItem~~~";

export const getNormalizedItems = (items, idGetter, heightGetter) => {
  const normalizedItems = {};
  let offsetTop = 0;

  const lastIndex = items.length - 1;
  items.forEach((item, index) => {
    const height = heightGetter(item);
    const uniqueId = idGetter(item);
    normalizedItems[uniqueId] = { item, index, height, offsetTop };
    if (lastIndex === index) {
      normalizedItems[LAST_ITEM_ID] = normalizedItems[uniqueId];
    }
    offsetTop += height;
  });

  return normalizedItems;
};

export const isItemInView = (item, scrollTop, offsetHeight) => {
  const isItemUnderTheViewableArea = item.offsetTop > scrollTop + offsetHeight;
  const isItemAboveTheViewableArea = item.offsetTop < scrollTop;

  return !isItemUnderTheViewableArea && !isItemAboveTheViewableArea;
};

export const getMaxOffset = (offsetHeight, normalizedItems) => {
  const lastItem = normalizedItems[LAST_ITEM_ID];
  if (!lastItem) return 0;
  const { height, offsetTop } = lastItem;
  const maxOffset = offsetTop + height - offsetHeight;
  return maxOffset;
};

export function easeInOutQuint(time) {
  let t = time;
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
}
