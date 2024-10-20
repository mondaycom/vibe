import React, { useRef, useCallback, useState, useMemo } from "react";
import { action } from "@storybook/addon-actions";
import cx from "classnames";
import { range } from "lodash-es";
import useGridKeyboardNavigation from "../useGridKeyboardNavigation";
import Button from "../../../../src/components/Button/Button";
import "./useGridKeyboardNavigation.stories.scss";

const ELEMENT_WIDTH_PX = 72;
const PADDING_PX = 24;
const ON_CLICK = action("item selected");

export default {
  title: "Hooks/useGridKeyboardNavigation"
};

export const Overview = {
  render: () => {
    const ref = useRef(null);
    const disabledIndexes = [2, 4, 6];
    const [itemsCount, setItemsCount] = useState<number>(15);
    const [numberOfItemsInLine, setNumberOfItemsInLine] = useState<number>(4);

    const width = useMemo(() => numberOfItemsInLine * ELEMENT_WIDTH_PX + 2 * PADDING_PX, [numberOfItemsInLine]);

    const items: string[] = useMemo(() => range(itemsCount).map((num: number) => `${num}.`), [itemsCount]);
    const getItemByIndex = useCallback((index: number) => items[index], [items]);

    const { activeIndex, onSelectionAction } = useGridKeyboardNavigation({
      ref,
      numberOfItemsInLine,
      itemsCount,
      getItemByIndex,
      onItemClicked: ON_CLICK,
      disabledIndexes
    });

    const onClickByIndex = useCallback((index: number) => () => onSelectionAction(index), [onSelectionAction]);

    return (
      <div>
        <div
          className="use-grid-keyboard-nav-comp-wrapper"
          style={{
            width
          }}
          ref={ref}
          tabIndex={-1}
        >
          {items.map((item, index) => (
            <Button
              key={item}
              disabled={disabledIndexes.includes(index)}
              onClick={onClickByIndex(index)}
              kind="secondary"
              className={cx("use-grid-keyboard-nav-item", {
                "active-item": index === activeIndex
              })}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="use-grid-keyboard-nav-controls">
          <div>
            Items count:{" "}
            <input value={itemsCount} onChange={e => setItemsCount(Number(e.target.value))} type="number" min={1} />
          </div>
          <div>
            Number of items in line:{" "}
            <input
              value={numberOfItemsInLine}
              onChange={e => setNumberOfItemsInLine(Number(e.target.value))}
              type="number"
              min={1}
            />
          </div>
        </div>
      </div>
    );
  },

  name: "Overview"
};
