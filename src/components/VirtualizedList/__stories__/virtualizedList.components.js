import React from "react";

export const generateItems = (defaultItemHeight = 30, itemsCount) => {
  const items = [];
  for (let i = 0; i < itemsCount; i++) {
    const height = (i > 0 && i % 15) === 0 ? 60 : defaultItemHeight;
    items.push({ value: `Item ${i}`, height, id: i });
  }
  return items;
};

export const itemRenderer = (item, index, style) => {
  const backgroundColor = index % 2 === 0 ? "white" : "#f8f8f0";
  return (
    <div key={index} style={style}>
      <div
        style={{
          backgroundColor,
          height: item.height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {item.value}
      </div>
    </div>
  );
};
