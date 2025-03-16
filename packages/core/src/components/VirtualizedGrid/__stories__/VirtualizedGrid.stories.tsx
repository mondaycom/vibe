import React, { useCallback, useMemo, useState } from "react";
import VirtualizedGrid, { VirtualizedGridProps } from "../VirtualizedGrid";
import Button from "../../Button/Button";
import { generateItems, itemRenderer } from "./VirtualizedGrid.stories.helpers";

export default {
  title: "Components/VirtualizedGrid",
  component: VirtualizedGrid
};

const ITEMS_COUNT = 100;

const virtualizedGridTemplate = (args: VirtualizedGridProps) => {
  const [scrollToId, setScrollToId] = useState(null);
  const [lastScrolledId, setLastScrolledId] = useState(null);
  const [scrollToDisabled, setScrollToDisabled] = useState(false);
  const [nextScrollToId, setNextScrollToId] = useState(ITEMS_COUNT - 1);
  const getColumnWidth = useCallback(() => {
    return 100;
  }, []);
  const getRowHeight = useCallback(() => {
    return 50;
  }, []);
  const items = useMemo(() => {
    return generateItems(50, 100, ITEMS_COUNT);
  }, []);
  const onClickToScroll = useCallback(() => {
    setScrollToId(nextScrollToId);
    setLastScrolledId("");
    setScrollToDisabled(true);
  }, [setScrollToId, setScrollToDisabled, nextScrollToId]);
  const onScrollToFinished = useCallback(() => {
    setLastScrolledId(nextScrollToId);
    setScrollToId(null);
    setNextScrollToId(Math.round(Math.random() * items.length));
    setScrollToDisabled(false);
  }, [nextScrollToId, items, setNextScrollToId, setLastScrolledId]);
  return (
    <div style={{ width: 430, height: 300, overflow: "hidden", display: "flex", alignItems: "center" }}>
      <div style={{ width: "430px", height: "100%" }}>
        <VirtualizedGrid
          scrollToId={scrollToId}
          items={items}
          itemRenderer={itemRenderer}
          getColumnWidth={getColumnWidth}
          getRowHeight={getRowHeight}
          onScrollToFinished={onScrollToFinished}
          {...args}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Button size="medium" kind="primary" onClick={onClickToScroll} disabled={scrollToDisabled}>
          {`Scroll to Item ${nextScrollToId}`}
        </Button>
        <div style={{ marginTop: 16, opacity: lastScrolledId ? 1 : 0 }}>{`Scrolled to Item ${lastScrolledId}`}</div>
      </div>
    </div>
  );
};

export const Overview = {
  render: virtualizedGridTemplate.bind({}),
  name: "Overview"
};
