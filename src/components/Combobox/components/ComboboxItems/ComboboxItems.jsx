import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import { comboboxItemRenderer } from "../../ComboboxHelpers/ComboboxHelpers";
import VirtualizedList from "../../../../components/VirtualizedList/VirtualizedList";
import { COMBOBOX_CATEGORY_ITEM, COMBOBOX_OPTION_ITEM } from "../ComboboxConstants";
import styles from "./ComboboxItems.module.scss";

export const ComboboxItems = forwardRef(
  (
    {
      className,
      optionClassName,
      categories,
      options,
      optionRenderer,
      activeItemIndex,
      visualFocusItemIndex,
      onOptionClick,
      onOptionEnter,
      onOptionLeave,
      optionLineHeight,
      shouldScrollToSelectedItem,
      renderOnlyVisibleOptions,
      onActiveCategoryChanged,
      maxOptionsWithoutScroll,
      forceUndoScrollNullCheck,
      itemsMap
    },
    ref
  ) => {
    const activeCategoryId = useRef();
    const style = useMemo(() => {
      if (maxOptionsWithoutScroll) {
        // Adding 0.5 to show next option to indicate scroll is available
        const maxCount = Math.min(options.length + Object.keys(categories ?? {}).length, maxOptionsWithoutScroll + 0.5);
        return { height: optionLineHeight * maxCount };
      }
      return undefined;
    }, [maxOptionsWithoutScroll, optionLineHeight, options, categories]);

    const createItemElementRenderer = useCallback(
      (item, index, style) =>
        comboboxItemRenderer({
          item,
          index,
          style,
          optionEvents: {
            onOptionClick,
            onOptionEnter,
            onOptionLeave
          },
          optionRenderData: {
            className: optionClassName,
            optionLineHeight,
            optionRenderer,
            visualFocusItemIndex,
            scrollRef: renderOnlyVisibleOptions ? null : ref,
            activeItemIndex,
            shouldScrollToSelectedItem,
            forceUndoScrollNullCheck
          },
          isVirtualized: renderOnlyVisibleOptions
        }),
      [
        onOptionClick,
        onOptionEnter,
        onOptionLeave,
        optionClassName,
        optionLineHeight,
        optionRenderer,
        visualFocusItemIndex,
        renderOnlyVisibleOptions,
        ref,
        activeItemIndex,
        shouldScrollToSelectedItem,
        forceUndoScrollNullCheck
      ]
    );

    const onItemsRender = useCallback(
      ({ firstItemId }) => {
        window.requestAnimationFrame(() => {
          const itemData = itemsMap.get(firstItemId);
          if (itemData && (itemData.type === COMBOBOX_CATEGORY_ITEM || itemData.type === COMBOBOX_OPTION_ITEM)) {
            const newActiveCategoryId =
              itemData.type === COMBOBOX_OPTION_ITEM && itemData.categoryId ? itemData.categoryId : itemData.id;

            if (newActiveCategoryId !== activeCategoryId.current) {
              activeCategoryId.current = newActiveCategoryId;
              const categoryObject = itemsMap.get(activeCategoryId.current);
              onActiveCategoryChanged(categoryObject);
            }
          }
        }, [itemsMap, onActiveCategoryChanged]);
      },
      [itemsMap, onActiveCategoryChanged]
    );

    let itemsElements;

    // If we request to render only the items which visible in a given moment (optimization for very large lists)
    if (renderOnlyVisibleOptions) {
      itemsElements = (
        <VirtualizedList
          ref={ref}
          className={cx(styles.optionsContainer, className)}
          items={options}
          itemRenderer={createItemElementRenderer}
          role="treegrid"
          scrollableClassName={styles.scrollableContainer}
          onItemsRendered={onItemsRender}
          style={style}
        />
      );
    } else {
      itemsElements = (
        <div
          className={cx(styles.scrollableContainer, styles.optionsContainer, className)}
          role="treegrid"
          style={style}
          ref={ref}
        >
          {options.map(itemData => createItemElementRenderer(itemData))}
        </div>
      );
    }

    return itemsElements;
  }
);
