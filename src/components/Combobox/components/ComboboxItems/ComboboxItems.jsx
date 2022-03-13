import React, { useCallback, useMemo, useState } from "react";
import cx from "classnames";
import { getOptionsByCategories } from "components/Combobox/ComboboxService";
import {
  comboboxItemRenderer,
  createCategoryItemObject,
  createDividerItemObject,
  createOptionItemObject
} from "components/Combobox/components/ComboboxRenderers/ComboboxRenderers";
import { VirtualizedList } from "components";
import styles from "./ComboboxItems.modules.scss";
import { usePrevious } from "hooks";

export const ComboboxItems = ({
  categories,
  options,
  filterValue,
  withCategoriesDivider,
  optionRenderer,
  activeItemIndex,
  isActiveByKeyboard,
  onOptionClick,
  onOptionEnter,
  onOptionLeave,
  optionLineHeight,
  shouldScrollToSelectedItem,
  renderOnlyVisibleOptions,
  onActiveCategoryChanged
}) => {
  const prevFirstItem = useRef();
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
          isActiveByKeyboard,
          activeItemIndex,
          shouldScrollToSelectedItem
        }
      }),
    [
      onOptionClick,
      onOptionEnter,
      onOptionLeave,
      optionLineHeight,
      optionRenderer,
      isActiveByKeyboard,
      activeItemIndex,
      shouldScrollToSelectedItem
    ]
  );

  let { items, categoriesMap } = useMemo(() => {
    let items = [];
    const categoriesMap = new Map();

    if (categories) {
      const optionsByCategories = getOptionsByCategories(options, categories, filterValue);
      let optionIndex = 0;
      Object.keys(optionsByCategories).forEach((categoryId, categoryIndex) => {
        const withDivider = withCategoriesDivider && categoryIndex !== 0;
        if (withDivider) {
          items.push(createDividerItemObject({ categoryId }));
        }

        const categoryObject = createCategoryItemObject({
          categoryId,
          categoryData: categories[categoryId],
          withDivider
        });

        // save category object in both items array and categories map
        items.push(categoryObject);
        categoriesMap.set(categoryId, categoryObject);

        optionsByCategories[categoryId].forEach(option => {
          const itemObject = createOptionItemObject({
            height: optionLineHeight,
            option,
            index: optionIndex
          });

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
    return { items, categoriesMap };
  }, [categories, options, filterValue, withCategoriesDivider, optionLineHeight]);

  const onItemsRender = useCallback(
    ({ firstItemId, secondItemId }) => {
      window.requestAnimationFrame(() => {
        const isScrollDirectionForward = secondItemId !== prevFirstItem;
        if (isScrollDirectionForward) {
          // check if prev first item is a category item
          const prevItemCategoryData = categoriesMap.get(prevFirstItem.current);
          if (prevItemCategoryData) {
            onActiveCategoryChanged(prevItemCategoryData);
          }
        } else {
        }
      });
    },
    [activeCategory, categoriesMap, firstCategory, onActiveCategoryChanged]
  );

  let itemsElements;

  // If we request to render only the items which visible in a given moment (optimization for very large lists)
  if (renderOnlyVisibleOptions) {
    itemsElements = (
      <VirtualizedList
        items={items}
        itemRenderer={createItemElementRenderer}
        id="Knobs"
        role="treegrid"
        scrollableClassName={styles.scrollableContainer}
        onItemsRendered={onItemsRender}
      />
    );
  } else {
    itemsElements = (
      <div className={cx(styles.scrollableContainer, styles.optionsContainer)} role="treegrid">
        {items.map(itemData => createItemElementRenderer(itemData))}
      </div>
    );
  }

  return itemsElements;
};
