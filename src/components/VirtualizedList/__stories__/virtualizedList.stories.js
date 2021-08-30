import React, { useState, useMemo, useCallback } from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import VirtualizedList from "../VirtualizedList";
import Button from "../../Button/Button";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";

const generateItems = () => {
  const items = [];
  for (let i = 0; i < 10000; i++) {
    const height = (i > 0 && i % 15) === 0 ? 60 : 30;
    items.push({ value: `Item ${i}`, height, id: i });
  }
  return items;
};

const itemRenderer = (item, index, style) => {
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

const VirtualizedListWrapper = () => {
  const [scrollToId, setScrollToId] = useState(null);
  const [scrollToDisabled, setScrollToDisabled] = useState(false);
  const [lastScrolledId, setLastScrolledId] = useState(null);
  const [nextScrollToId, setNextScrollToId] = useState(9999);
  const items = useMemo(() => generateItems());
  const onClickToScroll = useCallback(() => {
    setScrollToId(nextScrollToId);
    setLastScrolledId("");
    setScrollToDisabled(true);
  }, [setScrollToId, setScrollToDisabled, items, nextScrollToId]);
  const onScrollToFinished = useCallback(() => {
    setLastScrolledId(nextScrollToId);
    setNextScrollToId(Math.round(Math.random() * items.length));
    setScrollToDisabled(false);
  }, [nextScrollToId, items, setNextScrollToId, setLastScrolledId]);

  return (
    <div
      style={{
        width: 430,
        height: number("containerHeight", 300),
        border: "1px solid black",
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div style={{ width: 200, height: "100%", marginRight: "40px" }}>
        <VirtualizedList
          items={items}
          itemRenderer={itemRenderer}
          scrollToId={scrollToId}
          id="Knobs"
          scrollDuration={number("scrollDuration", 300)}
          onScrollToFinished={onScrollToFinished}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Button
          size={Button.sizes.MEDIUM}
          kind={Button.kinds.PRIMARY}
          onClick={onClickToScroll}
          disabled={scrollToDisabled}
        >
          {`Scroll to Item ${nextScrollToId}`}
        </Button>
        <div style={{ marginTop: 16, opacity: lastScrolledId ? 1 : 0 }}>{`Scrolled to Item ${lastScrolledId}`}</div>
      </div>
    </div>
  );
};

export const Sandbox = () => <VirtualizedListWrapper />;

export default {
  title: "Components/VirtualizedList",
  component: VirtualizedList,
  decorators: [withPerformance]
};
