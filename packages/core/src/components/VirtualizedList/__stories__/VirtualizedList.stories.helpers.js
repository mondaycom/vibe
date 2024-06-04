// eslint-disable-next-line default-param-last
import React from "react";
import { Tip } from "vibe-storybook-components";

export const generateItems = (defaultItemSize = 30, itemsCount, layout) => {
  const items = [];
  const isVertical = layout !== "horizontal";
  for (let i = 0; i < itemsCount; i++) {
    const size = (i > 0 && i % 15) === 0 ? defaultItemSize * 2 : defaultItemSize;
    items.push({ value: `Item ${i}`, size, id: i, height: isVertical ? size : 30 });
  }
  return items;
};

export const TipItemRenderer = () => (
  <Tip title="Are your list items not rendered correctly?">
    Please make sure you inject the style parameter of the <code>itemRenderer</code> function to the item {"element's"}
    wrapper style.
  </Tip>
);
