import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import { getOptionsByCategories } from "../../ComboboxService";
import {
  comboboxItemRenderer,
  createCategoryItemObject,
  createDividerItemObject,
  createOptionItemObject
} from "../../ComboboxHelpers/ComboboxHelpers";
import VirtualizedList from "../../../../components/VirtualizedList/VirtualizedList";
import { COMBOBOX_CATEGORY_ITEM, COMBOBOX_OPTION_ITEM } from "../../components/ComboboxConstants";
import styles from "./ComboboxItems.module.scss";

export const ComboboxItems = forwardRef(
  (
    {
      className,
      categories,
      options,
      filterValue,
      withCategoriesDivider,
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
      forceUndoScrollNullCheck
    },
    ref
  ) => {
    const activeCategoryId = useRef();
    const style = useMemo(() => {
      if (maxOptionsWithoutScroll) {
        // Adding 0.5 to show next option to indicate scroll is available
        const maxCount = Math.min(options.length, maxOptionsWithoutScroll + 0.5);
        return { height: optionLineHeight * maxCount };
      }
      return undefined;
    }, [maxOptionsWithoutScroll, optionLineHeight, options]);

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
        optionLineHeight,
        optionRenderer,
        ref,
        visualFocusItemIndex,
        activeItemIndex,
        shouldScrollToSelectedItem,
        forceUndoScrollNullCheck,
        renderOnlyVisibleOptions
      ]
    );

    let { items, itemsMap } = useMemo(() => {
      let items = [];
      const itemsMap = new Map();

      if (categories) {
        const optionsByCategories = getOptionsByCategories(options, categories, filterValue);
        let optionIndex = 0;
        Object.keys(optionsByCategories).forEach((categoryId, categoryIndex) => {
          const withDivider = withCategoriesDivider && categoryIndex !== 0;
          if (withDivider) {
            items.push(createDividerItemObject({ categoryId }));
          }

          const isCategoryWithOptions = optionsByCategories[categoryId].length > 0;
          const isFirstCategory = categoryIndex === 0;

          const categoryObject = createCategoryItemObject({
            categoryId,
            categoryData: categories[categoryId],
            withDivider,
            className: cx({
              [styles.categoryWithOptions]: isCategoryWithOptions,
              [styles.categoryWithoutOptions]: !isCategoryWithOptions,
              [styles.firstCategory]: isFirstCategory
            })
          });

          // save category object in both items array and categories map
          items.push(categoryObject);
          itemsMap.set(categoryId, categoryObject);

          optionsByCategories[categoryId].forEach(option => {
            const itemObject = createOptionItemObject({
              height: optionLineHeight,
              option,
              index: optionIndex,
              categoryId: categoryObject.id
            });

            itemsMap.set(itemObject.id, itemObject);
            items.push(itemObject);
            optionIndex++;
          });
        });
      } else {
        items = options.map((option, index) => {
          return createOptionItemObject({
            height: optionLineHeight,
            option,
            index
          });
        });
      }
      return { items, itemsMap };
    }, [categories, options, filterValue, withCategoriesDivider, optionLineHeight]);

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
          items={items}
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
          {items.map(itemData => createItemElementRenderer(itemData))}
        </div>
      );
    }

    return itemsElements;
  }
);
