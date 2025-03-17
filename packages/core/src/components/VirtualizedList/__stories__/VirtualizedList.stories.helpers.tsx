import React from "react";
import { Tip } from "vibe-storybook-components";
import { VirtualizedListItem } from "../VirtualizedList.types";

export const generateItems = (defaultItemSize = 30, itemsCount: number, layout: string) => {
  const items: VirtualizedListItem[] = [];
  const isVertical = layout !== "horizontal";

  for (let i = 0; i < itemsCount; i++) {
    const width = (i > 0 && i % 15) === 0 ? defaultItemSize * 2 : defaultItemSize;
    items.push({ value: `Item ${i}`, width, id: i.toString(), height: isVertical ? width : 30 });
  }

  return items;
};

export const TipItemRenderer: React.FC = () => (
  <Tip title="Are your list items not rendered correctly?">
    Please make sure you inject the style parameter of the <code>itemRenderer</code> function to the item {"element's"}
    wrapper style.
  </Tip>
);
