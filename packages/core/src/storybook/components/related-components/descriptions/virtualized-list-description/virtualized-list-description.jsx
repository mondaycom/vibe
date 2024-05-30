import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import VirtualizedList from "../../../../../components/VirtualizedList/VirtualizedList";
import { generateItems } from "../../../../../components/VirtualizedList/__stories__/VirtualizedList.stories.helpers";
import styles from "./virtualized-list.module.scss";

export const VirtualizedListDescription = () => {
  const component = useMemo(() => {
    const itemRenderer = (item, index, style) => {
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
    };

    return (
      <VirtualizedList
        items={generateItems(30, 1000, "vertical")}
        itemRenderer={itemRenderer}
        getItemSize={item => item.size}
      />
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="VirtualizedList"
      href="/?path=/docs/navigation-virtualizedlist--docs"
      description="VirtualizedList is a component which only renders visible list items, it is a logic component and doesn't change and look and feel."
    />
  );
};
