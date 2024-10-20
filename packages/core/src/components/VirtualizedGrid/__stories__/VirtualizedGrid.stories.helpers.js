import React from "react";
import { Text } from "../../Text";

export const generateItems = (height = 30, width = "100%", itemsCount) => {
  const items = [];
  for (let i = 0; i < itemsCount; i++) {
    items.push({ value: `Item ${i}`, height, width, id: i });
  }
  return items;
};

export const itemRenderer = (item, index, style) => {
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
