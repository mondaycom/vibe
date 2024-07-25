import { range } from "lodash-es";
import React, { forwardRef, useMemo, useCallback, useRef, RefObject } from "react";
import cx from "classnames";
import { action } from "@storybook/addon-actions";
import { Button, Flex } from "../..";
import useGridKeyboardNavigation from "../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import "./useGridKeyboardNavigationContext.stories.scss";
import { GridKeyboardNavigationContext, useGridKeyboardNavigationContext } from "../GridKeyboardNavigationContext";
import { VibeComponent } from "src/types";
const ELEMENT_WIDTH_PX = 72;
const PADDING_PX = 24;

const ON_CLICK = action("Selected");

interface DummyNavigableGridProps {
  itemsCount: number;
  numberOfItemsInLine: number;
  itemPrefix?: string;
  disabled?: boolean;
  disabledIndexes?: number[];
  withoutBorder?: boolean;
}
export const DummyNavigableGrid: VibeComponent<DummyNavigableGridProps> = forwardRef(
  (
    { itemsCount, numberOfItemsInLine, itemPrefix = "", disabled = false, disabledIndexes = [], withoutBorder = false },
    ref: RefObject<HTMLDivElement>
  ) => {
    const width = useMemo(() => numberOfItemsInLine * ELEMENT_WIDTH_PX + 2 * PADDING_PX, [numberOfItemsInLine]);
    const items = useMemo(() => range(itemsCount).map(num => `${itemPrefix} ${num}`), [itemPrefix, itemsCount]);
    const getItemByIndex = useCallback((index: number) => items[index], [items]);
    const { activeIndex, onSelectionAction } = useGridKeyboardNavigation({
      ref,
      itemsCount,
      numberOfItemsInLine,
      getItemByIndex,
      onItemClicked: ON_CLICK,
      disabledIndexes
    });
    const onClickByIndex = useCallback((index: number) => () => onSelectionAction(index), [onSelectionAction]);
    return (
      <div
        className={cx("use-grid-keyboard-dummy-grid-wrapper", { "without-border": withoutBorder })}
        style={{ width }}
        data-disabled={disabled}
        ref={ref}
        tabIndex={-1}
      >
        {items.map((item, index) => (
          <Button
            key={item}
            kind={Button.kinds.SECONDARY}
            onClick={onClickByIndex(index)}
            disabled={disabled || disabledIndexes?.includes(index)}
            className={cx("use-grid-keyboard-dummy-grid-item", { "active-item": index === activeIndex })}
          >
            {item}
          </Button>
        ))}
      </div>
    );
  }
);

interface LayoutWithInnerKeyboardNavigationProps {
  id: string;
  itemPrefix: string;
}

export const LayoutWithInnerKeyboardNavigation = forwardRef<HTMLDivElement, LayoutWithInnerKeyboardNavigationProps>(
  ({ id, itemPrefix }, ref: RefObject<HTMLDivElement>) => {
    const leftElRef = useRef(null);
    const rightElRef = useRef(null);
    const bottomElRef = useRef(null);
    const keyboardContext = useGridKeyboardNavigationContext(
      [
        { leftElement: leftElRef, rightElement: rightElRef },
        { topElement: leftElRef, bottomElement: bottomElRef }
      ],
      ref
    );
    const innerPrefix = itemPrefix || "";
    return (
      <GridKeyboardNavigationContext.Provider value={keyboardContext}>
        <Flex
          ref={ref}
          id={id}
          direction={Flex.directions.COLUMN}
          align={Flex.align.START}
          className="use-grid-keyboard-dummy-grid-wrapper"
          tabIndex={-1}
        >
          <Flex>
            <DummyNavigableGrid ref={leftElRef} itemsCount={6} numberOfItemsInLine={3} itemPrefix={`${innerPrefix}L`} />
            <DummyNavigableGrid
              ref={rightElRef}
              itemsCount={6}
              numberOfItemsInLine={2}
              itemPrefix={`${innerPrefix}R`}
            />
          </Flex>
          <DummyNavigableGrid ref={bottomElRef} itemsCount={6} numberOfItemsInLine={2} itemPrefix={`${innerPrefix}B`} />
        </Flex>
      </GridKeyboardNavigationContext.Provider>
    );
  }
);
