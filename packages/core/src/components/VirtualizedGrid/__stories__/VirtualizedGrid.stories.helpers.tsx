import React from "react";
import { Text } from "../../Text";

interface Item {
  value: string;
  height: number;
  width: string | number;
  id: number;
}

export const generateItems = (height = 30, width: string | number = "100%", itemsCount: number): Item[] => {
  const items: Item[] = [];
  for (let i = 0; i < itemsCount; i++) {
    items.push({ value: `Item ${i}`, height, width, id: i });
  }
  return items;
};

export const itemRenderer = (item: Item | undefined, index: number, style: React.CSSProperties) => {
  if (item) {
    const backgroundColor = index % 2 === 0 ? "#e1e1e1" : "#f8f8f0";
    return (
      <div key={index} style={style}>
        <Text
          color={Text.colors.FIXED_DARK}
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
        </Text>
      </div>
    );
  }
  return <div key={index} style={style} />;
};
