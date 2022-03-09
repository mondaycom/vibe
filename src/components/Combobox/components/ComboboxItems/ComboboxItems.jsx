import React, { useMemo } from "react";
import cx from "classnames";
import { getOptionsByCategories } from "components/Combobox/ComboboxService";
import {
  COMBOBOX_CATEGORY_ITEM,
  COMBOBOX_DIVIDER_ITEM,
  COMBOBOX_OPTION_ITEM
} from "components/Combobox/components/ComboboxConstants";
import { comboboxItemRenderer } from "components/Combobox/components/ComboboxRenderers/ComboboxRenderers";
import { VirtualizedList } from "components";
import styles from "./ComboboxItems.modules.scss";

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
  renderOnlyVisibleOptions
}) => {
  let items = useMemo(() => {
    let items = [];
    if (categories) {
      const optionsByCategories = getOptionsByCategories(options, categories, filterValue);
      let optionIndex = 0;
      Object.keys(optionsByCategories).forEach((categoryId, categoryIndex) => {
        const withDivider = withCategoriesDivider && categoryIndex !== 0;
        if (withDivider) items.push({ type: COMBOBOX_DIVIDER_ITEM, height: 17, id: `${categoryId}-divider` });
        items.push({
          height: 32,
          type: COMBOBOX_CATEGORY_ITEM,
          category: categories[categoryId],
          id: categoryId,
          withDivider
        });
        const isActive = activeItemIndex === optionIndex;
        const options = optionsByCategories[categoryId].map(option => {
          const renderedOption = {
            type: COMBOBOX_OPTION_ITEM,
            height: optionLineHeight,
            belongToCategory: true,
            index: { optionIndex },
            option,
            id: option.id || optionIndex,
            optionRenderer,
            isActive,
            isActiveByKeyboard,
            onOptionClick,
            onOptionEnter,
            onOptionLeave,
            optionLineHeight,
            shouldScrollToSelectedItem
          };
          optionIndex++;
          return renderedOption;
        });
        items.push(...options);
      });
    } else {
      items = options.map((option, index) => {
        return {
          type: COMBOBOX_OPTION_ITEM,
          index,
          height: optionLineHeight,
          option,
          optionRenderer,
          id: option.id || index,
          isActive: activeItemIndex === index,
          isActiveByKeyboard,
          onOptionClick,
          onOptionEnter,
          onOptionLeave,
          optionLineHeight,
          shouldScrollToSelectedItem
        };
      });
    }

    return items;
  }, [
    categories,
    options,
    filterValue,
    withCategoriesDivider,
    activeItemIndex,
    optionRenderer,
    isActiveByKeyboard,
    onOptionClick,
    onOptionEnter,
    onOptionLeave,
    optionLineHeight,
    shouldScrollToSelectedItem
  ]);

  let itemsElements;

  // If we request to render only the items which visible in a given moment (optimization for very large lists)
  if (renderOnlyVisibleOptions) {
    itemsElements = (
      <VirtualizedList
        items={items}
        itemRenderer={comboboxItemRenderer}
        id="Knobs"
        role="treegrid"
        scrollableClassName={styles.scrollableContainer}
      />
    );
  } else {
    itemsElements = (
      <div className={cx(styles.scrollableContainer, styles.optionsContainer)} role="treegrid">
        {items.map(itemData => comboboxItemRenderer(itemData))}
      </div>
    );
  }

  return itemsElements;
};
