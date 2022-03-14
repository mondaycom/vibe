import React, { useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import { getOptionsByCategories } from "components/Combobox/ComboboxService";
import {
  comboboxItemRenderer,
  createCategoryItemObject,
  createDividerItemObject,
  createOptionItemObject
} from "components/Combobox/components/ComboboxRenderers/ComboboxRenderers";
import { VirtualizedList } from "components";
import { COMBOBOX_CATEGORY_ITEM, COMBOBOX_OPTION_ITEM } from "components/Combobox/components/ComboboxConstants";
import styles from "./ComboboxItems.modules.scss";

export const ComboboxItems = ({
  className,
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
  const activeCategory = useRef();
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
        },
        isVirtualized: renderOnlyVisibleOptions
      }),
    [
      onOptionClick,
      onOptionEnter,
      onOptionLeave,
      optionLineHeight,
      optionRenderer,
      isActiveByKeyboard,
      activeItemIndex,
      shouldScrollToSelectedItem,
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

        const categoryObject = createCategoryItemObject({
          categoryId,
          categoryData: categories[categoryId],
          withDivider
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
          const newActiveCategory =
            itemData.type === COMBOBOX_OPTION_ITEM && itemData.categoryId ? itemData.categoryId : itemData.id;

          if (newActiveCategory !== activeCategory.current) {
            activeCategory.current = newActiveCategory;
            const categoryObject = itemsMap.get(activeCategory.current);
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
        className={className}
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
      <div className={cx(styles.scrollableContainer, styles.optionsContainer, className)} role="treegrid">
        {items.map(itemData => createItemElementRenderer(itemData))}
      </div>
    );
  }

  return itemsElements;
};
