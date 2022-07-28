// eslint-disable-next-line default-param-last
export const generateItems = (defaultItemHeight = 30, itemsCount) => {
  const items = [];
  for (let i = 0; i < itemsCount; i++) {
    const height = (i > 0 && i % 15) === 0 ? 60 : defaultItemHeight;
    items.push({ value: `Item ${i}`, height, id: i });
  }
  return items;
};
