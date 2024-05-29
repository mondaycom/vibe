import React, { useCallback, useMemo, useState } from "react";
import VirtualizedGrid from "../VirtualizedGrid";
import Button from "../../Button/Button";
import { generateItems, itemRenderer } from "./VirtualizedGrid.stories.helpers";

export default {
  title: "Navigation/VirtualizedGrid",
  component: VirtualizedGrid
};

const virtualizedGridTemplate = args => {
  const [scrollToId, setScrollToId] = useState(null);
  const [lastScrolledId, setLastScrolledId] = useState(null);
  const [scrollToDisabled, setScrollToDisabled] = useState(false);
  const [nextScrollToId, setNextScrollToId] = useState(args.itemsCount - 1);
  const getColumnWidth = useCallback(() => {
    return 100;
  }, []);
  const getRowHeight = useCallback(() => {
    return 50;
  }, []);
  const items = useMemo(() => {
    return generateItems(50, 100, args.itemsCount);
  }, [args.itemsCount]);
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
    <div style={args.wrapperStyle}>
      <div style={{ width: "430px", height: "100%" }}>
        <VirtualizedGrid
          id={args.wrapperId}
          scrollToId={scrollToId}
          items={items}
          itemRenderer={itemRenderer}
          getColumnWidth={getColumnWidth}
          getRowHeight={getRowHeight}
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

export const Overview = {
  render: virtualizedGridTemplate.bind({}),
  name: "Overview",
  args: {
    wrapperStyle: {
      width: 430,
      height: 300,
      overflow: "hidden",
      display: "flex",
      alignItems: "center"
    },
    itemsCount: 100
  }
};
