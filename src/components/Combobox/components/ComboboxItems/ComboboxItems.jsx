import React, { useMemo } from "react";
import { getOptionsByCategories } from "components/Combobox/ComboboxService";
import cx from "classnames";
import {
  COMBOBOX_CATEGORY_ITEM,
  COMBOBOX_DIVIDER_ITEM,
  COMBOBOX_OPTION_ITEM
} from "components/Combobox/components/ComboboxConstants";
import { comboboxItemRenderer } from "components/Combobox/components/ComboboxRenderers";
import { VirtualizedList } from "components";

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
        if (withDivider) items.push({ type: COMBOBOX_DIVIDER_ITEM, height: "17px", id: `${categoryId}-divider` });
        items.push({
          height: "28px",
          type: COMBOBOX_CATEGORY_ITEM,
          category: categories[categoryId],
          id: categoryId,
          withDivider
        });
        const isActive = activeItemIndex === optionIndex;
        const options = optionsByCategories[categoryId].map(option => {
          const renderedOption = {
            type: COMBOBOX_OPTION_ITEM,
            height: `${optionLineHeight + 16}px`,
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
          option,
          optionRenderer,
          id: option.id || optionIndex,
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
      <VirtualizedList items={items} itemRenderer={comboboxItemRenderer} id="Knobs" scrollDuration={200} />
    );
  } else {
    itemsElements = items.map(itemData => comboboxItemRenderer(itemData));
  }

  return (
    <div role="treegrid" style={{ width: "100%", height: "100%" }}>
      {itemsElements}
    </div>
  );
};
