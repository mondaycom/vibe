import React, { useCallback } from "react";
import VirtualizedList from "../VirtualizedList";
import { generateItems } from "./VirtualizedList.stories.helpers";
import { Flex } from "../../";
import styles from "./VirtualizedList.module.scss";

export default {
  title: "Navigation/VirtualizedList",
  component: VirtualizedList
};

const virtualizedListTemplate = args => {
  const itemRenderer = useCallback((item, index, style) => {
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
  }, []);
  return (
    <Flex align={Flex.align.START} gap={Flex.gaps.LARGE} style={{ width: "100%" }} direction={Flex.directions.ROW}>
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
            getItemSize={item => item.size}
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
            getItemSize={item => item.size}
            layout="horizontal"
          />
        </div>
      </div>
    </Flex>
  );
};

export const Overview = {
  render: virtualizedListTemplate.bind({}),
  name: "Overview"
};
