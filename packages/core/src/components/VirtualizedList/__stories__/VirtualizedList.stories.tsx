import React, { useCallback } from "react";
import VirtualizedList from "../VirtualizedList";
import { generateItems } from "./VirtualizedList.stories.helpers";
import { Flex } from "../../";
import styles from "./VirtualizedList.module.scss";

interface Item {
  height: number;
  value: string;
  size: number;
}

interface VirtualizedListProps {
  items: Item[];
  itemRenderer: (item: Item, index: number, style: React.CSSProperties) => JSX.Element;
  getItemSize: (item: Item) => number;
  layout?: "vertical" | "horizontal";
}

// Defining the component type properly
const VirtualizedListTemplate: React.FC<VirtualizedListProps> = (args: unknown) => {
  const itemRenderer = useCallback(
    (item: Item, index: number, style: React.CSSProperties): JSX.Element => {
      const backgroundColor = index % 2 === 0 ? "#e1e1e1" : "#f8f8f0";
      return (
        <div key={index} style={style}>
          <div
            className={styles.virtualizedListItem}
            style={{
              backgroundColor,
              height: item.height
            }}
          >
            {item.value}
          </div>
        </div>
      );
    },
    []
  );

  return (
    <Flex align="start" gap="large" style={{ width: "100%" }} direction="row">
      <div
        style={{
          width: 330,
          height: 300,
          overflow: "hidden",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div style={{ width: 200, height: "100%" }}>
          <h3>Vertical List</h3>
          <VirtualizedList
            {...args}
            items={generateItems(30, 1000, "vertical")}
            itemRenderer={itemRenderer}
            getItemSize={(item: Item) => item.size}
          />
        </div>
      </div>
      <div
        style={{
          flexGrow: 1,
          height: 300,
          overflow: "hidden",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div style={{ height: "100%", width: "100%" }}>
          <h3>Horizontal List</h3>
          <VirtualizedList
            {...args}
            items={generateItems(100, 1000, "horizontal")}
            itemRenderer={itemRenderer}
            getItemSize={(item: Item) => item.size}
            layout="horizontal"
          />
        </div>
      </div>
    </Flex>
  );
};

// Fixing the export type
export const Overview = {
  render: VirtualizedListTemplate.bind({}),
  name: "Overview"
};