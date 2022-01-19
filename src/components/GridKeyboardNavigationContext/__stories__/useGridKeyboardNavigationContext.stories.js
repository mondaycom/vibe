import range from "lodash/range";
import { forwardRef, useMemo, useCallback, useRef } from "react";
import cx from "classnames";
import { action } from "@storybook/addon-actions";
import { Button, Flex } from "../..";
import useGridKeyboardNavigation from "../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import "./useGridKeyboardNavigationContext.stories.scss";
import { GridKeyboardNavigationContext, useGridKeyboardNavigationContext } from "../GridKeyboardNavigationContext";

const ELEMENT_WIDTH_PX = 72;
const PADDING_PX = 24;

const ON_CLICK = action("Selected");

export const DummyNavigableGrid = forwardRef(({ itemsCount, numberOfItemsInLine, itemPrefix }, ref) => {
  const width = useMemo(() => numberOfItemsInLine * ELEMENT_WIDTH_PX + 2 * PADDING_PX, [numberOfItemsInLine]);
  const items = useMemo(() => range(itemsCount).map(num => `${itemPrefix} ${num}`), [itemPrefix, itemsCount]);
  const getItemByIndex = useCallback(index => items[index], [items]);
  const { activeIndex, onSelectionAction } = useGridKeyboardNavigation({
    ref,
    numberOfItemsInLine,
    itemsCount,
    getItemByIndex,
    onItemClicked: ON_CLICK
  });
  const onClickByIndex = useCallback(index => () => onSelectionAction(index), [onSelectionAction]);
  return (
    <div
      className="use-grid-keyboard-dummy-grid-wrapper"
      style={{ width }}
      ref={ref}
      tabIndex={-1}
    >
      {items.map((item, index) => (
        <Button
          key={item}
          kind={Button.kinds.SECONDARY}
          onClick={onClickByIndex(index)}
          className={cx("use-grid-keyboard-dummy-grid-item", { "active-item": index === activeIndex })}
        >
          {item}
        </Button>
      ))}
    </div>
  );
});

export const LayoutWithInnerKeyboardNavigation = forwardRef((_ignored, ref) => {
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
  return (
    <GridKeyboardNavigationContext.Provider value={keyboardContext}>
      <Flex ref={ref} direction={Flex.directions.COLUMN} align={Flex.align.START} className="use-grid-keyboard-dummy-grid-wrapper">
        <Flex>
          <DummyNavigableGrid ref={leftElRef} itemsCount={6} numberOfItemsInLine={3} itemPrefix="L " />
          <DummyNavigableGrid ref={rightElRef} itemsCount={6} numberOfItemsInLine={2} itemPrefix="R " />
        </Flex>
        <DummyNavigableGrid ref={bottomElRef} itemsCount={6} numberOfItemsInLine={2} itemPrefix="B " />
      </Flex>
    </GridKeyboardNavigationContext.Provider>
  );
});
