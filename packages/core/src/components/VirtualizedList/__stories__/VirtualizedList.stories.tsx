import React, { useCallback } from "react";
import VirtualizedList from "../VirtualizedList";
import { generateItems } from "./VirtualizedList.stories.helpers";
import { Flex, VirtualizedListItem } from "../..";
import Heading from "../../Heading/Heading";

export default {
  title: "Components/VirtualizedList",
  component: VirtualizedList
};

const virtualizedListTemplate = (args: VirtualizedListItem) => {
  const itemRenderer = useCallback((item: VirtualizedListItem, index: number, style: React.CSSProperties) => {
    const backgroundColor = index % 2 === 0 ? "#e1e1e1" : "#f8f8f0";
    return (
      <div key={index} style={style}>
        <Flex
          style={{
            backgroundColor,
            height: item.height
          }}
        >
          {item.value as React.ReactNode}
        </Flex>
      </div>
    );
  }, []);
  return (
    <Flex align="start" gap="large" style={{ width: "100%" }} direction="row">
      <Flex
        align="center"
        style={{
          width: 330,
          height: 300,
          overflow: "hidden"
        }}
      >
        <div style={{ width: 200, height: "100%" }}>
          <Heading type="h3">Vertical List</Heading>
          <VirtualizedList
            {...args}
            items={generateItems(30, 1000, "vertical")}
            itemRenderer={itemRenderer}
            getItemSize={item => item.height}
          />
        </div>
      </Flex>
      <Flex
        align="center"
        style={{
          flexGrow: 1,
          height: 300,
          overflow: "hidden"
        }}
      >
        <div style={{ height: "100%", width: "100%" }}>
          <Heading type="h3">Horizontal List</Heading>
          <VirtualizedList
            {...args}
            items={generateItems(100, 1000, "horizontal")}
            itemRenderer={itemRenderer}
            getItemSize={item => item.width}
            layout="horizontal"
          />
        </div>
      </Flex>
    </Flex>
  );
};

export const Overview = {
  render: virtualizedListTemplate.bind({}),
  name: "Overview"
};
