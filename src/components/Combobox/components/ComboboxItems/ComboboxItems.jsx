import React, { useCallback, useMemo } from "react";
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
      isActiveByKeyboard,
      onOptionClick,
      onOptionEnter,
      onOptionLeave,
      optionLineHeight,
      activeItemIndex,
      isActiveByKeyboard,
      shouldScrollToSelectedItem
    ]
  );

  let items = useMemo(() => {
    let items = [];

    if (categories) {
      const optionsByCategories = getOptionsByCategories(options, categories, filterValue);
      let optionIndex = 0;
      Object.keys(optionsByCategories).forEach((categoryId, categoryIndex) => {
        const withDivider = withCategoriesDivider && categoryIndex !== 0;
        if (withDivider) {
          items.push(createDividerItemObject({ categoryId }));
        }

        items.push(createCategoryItemObject({ categoryId, categoryData: categories[categoryId], withDivider }));
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
        itemRenderer={createItemElementRenderer}
        id="Knobs"
        role="treegrid"
        scrollableClassName={styles.scrollableContainer}
      />
    );
  } else {
    console.log(items);
    itemsElements = (
      <div className={cx(styles.scrollableContainer, styles.optionsContainer)} role="treegrid">
        {items.map(itemData => createItemElementRenderer(itemData))}
      </div>
    );
  }

  return itemsElements;
};
