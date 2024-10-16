import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import VirtualizedList from "../../../../../components/VirtualizedList/VirtualizedList";
import { generateItems } from "../../../../../components/VirtualizedList/__stories__/VirtualizedList.stories.helpers";
import styles from "./virtualized-list.module.scss";
import { Text } from "../../../../../components/Text";

export const VirtualizedListDescription = () => {
  const component = useMemo(() => {
    const itemRenderer = (item, index, style) => {
      const backgroundColor = index % 2 === 0 ? "#e1e1e1" : "#f8f8f0";
      return (
        <div key={index} style={style}>
          <Text
            className={styles.virtualizedListItem}
            color={Text.colors.FIXED_DARK}
            style={{
              backgroundColor,
              height: item.height
            }}
          >
            {item.value}
          </Text>
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
