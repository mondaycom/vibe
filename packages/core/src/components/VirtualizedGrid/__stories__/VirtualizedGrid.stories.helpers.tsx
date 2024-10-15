import React, { ComponentType } from "react";
import { GridChildComponentProps } from "react-window";
import { VirtualizedListItem } from "/workspaces/vibe/packages/core/src/components/VirtualizedList/VirtualizedList"

export const generateItems = (height = 30, width = 100, itemsCount: number): VirtualizedListItem[] => {
  const items: VirtualizedListItem[] = [];
  for (let i = 0; i < itemsCount; i++) {
    items.push({ value: `Item ${i}`, height, width, id: `${i}` });
  }
  return items;
};

export const itemRenderer = (
  item: VirtualizedListItem,
  index: number,
  style: React.CSSProperties
): JSX.Element | ComponentType<GridChildComponentProps<VirtualizedListItem>> => {
  if (item) {
    const backgroundColor = index % 2 === 0 ? "#e1e1e1" : "#f8f8f0";
    return (
      <div key={index} style={style}>
        <div
          style={{
            backgroundColor,
            height: item.height,
            width: item.width,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {item.value}
        </div>
      </div>
    );
  }
  return <div key={index} style={style} />;
};
