import React, { useMemo } from "react";
import cx from "classnames";
import ComboboxOption from "../components/ComboboxOption/ComboboxOption";
import ComboboxCategory from "../components/ComboboxCategory/ComboboxCategory";
import Divider from "../../Divider/Divider";
import { COMBOBOX_DIVIDER_ITEM, COMBOBOX_CATEGORY_ITEM, COMBOBOX_OPTION_ITEM } from "../components/ComboboxConstants";
import useActiveDescendantListFocus from "../../../hooks/useActiveDescendantListFocus";
import { getOptionsByCategories } from "../ComboboxService";
import styles from "./ComboboxHelpers.module.scss";

const DIVIDER_HEIGHT = 17;
const CATEGORY_HEIGHT = 32;

export function useItemsData({ categories, options, filterValue, withCategoriesDivider, optionLineHeight }) {
  return useMemo(() => {
    let items = [];
    let selectableItems = [];
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
          selectableItems.push(option);
          optionIndex++;
        });
      });
    } else {
      selectableItems = options;
      items = options.map((option, index) => {
        return createOptionItemObject({
          height: optionLineHeight,
          option,
          index
        });
      });
    }
    return { items, itemsMap, selectableItems };
  }, [categories, options, filterValue, withCategoriesDivider, optionLineHeight]);
}

export function useKeyboardNavigation({
  defaultVisualFocusFirstIndex,
  inputRef,
  resultsContainerRef,
  onClick,
  isChildSelectable,
  options,
  getOptionId
}) {
  const filteredOptionsIds = useMemo(
    () => options.map((option, index) => getOptionId(option?.id, index)),
    [getOptionId, options]
  );

  const {
    visualFocusItemIndex,
    visualFocusItemId,
    onItemClickCallback: onOptionClick
  } = useActiveDescendantListFocus({
    defaultVisualFocusFirstIndex,
    focusedElementRef: inputRef,
    containerElementRef: resultsContainerRef,
    focusedElementRole: useActiveDescendantListFocus.roles.COMBOBOX,
    itemsIds: filteredOptionsIds,
    onItemClick: onClick,
    isItemSelectable: isChildSelectable,
    isIgnoreSpaceAsItemSelection: true
  });

  return { visualFocusItemIndex, visualFocusItemId, onOptionClick };
}
export function createDividerItemObject({ categoryId }) {
  return { type: COMBOBOX_DIVIDER_ITEM, height: DIVIDER_HEIGHT, id: `${categoryId}-divider` };
}

export function createCategoryItemObject({ withDivider, categoryId, categoryData, className }) {
  return {
    height: CATEGORY_HEIGHT,
    type: COMBOBOX_CATEGORY_ITEM,
    category: categoryData,
    id: categoryId,
    withDivider,
    className
  };
}

export function createOptionItemObject({
  option,
  height,
  index,
  optionRenderer,
  isActive,
  optionLineHeight,
  shouldScrollToSelectedItem,
  categoryId
}) {
  return {
    type: COMBOBOX_OPTION_ITEM,
    height,
    belongToCategory: true,
    index,
    option,
    id: option.id || index,
    optionRenderer,
    isActive,
    optionLineHeight,
    shouldScrollToSelectedItem,
    categoryId
  };
}

export function comboboxItemRenderer({ item, _index, style, optionEvents, optionRenderData, isVirtualized }) {
  const { type, ...otherArgs } = item;
  let customClassNames;
  let innerElement;
  switch (type) {
    case COMBOBOX_DIVIDER_ITEM: {
      innerElement = dividerItemRenderer(otherArgs);
      break;
    }
    case COMBOBOX_CATEGORY_ITEM: {
      innerElement = categoryItemRenderer(otherArgs);
      if (!isVirtualized) {
        customClassNames = styles.sticky;
      }
      break;
    }
    case COMBOBOX_OPTION_ITEM: {
      innerElement = optionItemRenderer({
        ...otherArgs,
        ...optionEvents,
        ...optionRenderData
      });
      break;
    }
  }

  return (
    <div key={otherArgs.id} className={cx(styles.comboboxItemContainer, customClassNames)} style={style}>
      {innerElement}
    </div>
  );
}

export function dividerItemRenderer({ id, height }) {
  return (
    <div className={styles.dividerContainer} style={{ height: height }}>
      <Divider className={styles.divider} key={id} />
    </div>
  );
}

export function categoryItemRenderer({ id, category, className }) {
  return <ComboboxCategory key={id} category={category} className={className} />;
}

export function optionItemRenderer({
  id,
  index,
  option,
  className,
  onOptionClick,
  onOptionEnter,
  onOptionLeave,
  optionLineHeight,
  optionRenderer,
  scrollRef,
  shouldScrollToSelectedItem,
  activeItemIndex,
  belongToCategory,
  forceUndoScrollNullCheck,
  visualFocusItemIndex
}) {
  return (
    <ComboboxOption
      className={className}
      index={index}
      key={id}
      option={option}
      optionRenderer={optionRenderer}
      scrollRef={scrollRef}
      isActive={activeItemIndex === index}
      visualFocus={index === visualFocusItemIndex}
      onOptionClick={onOptionClick}
      onOptionHover={onOptionEnter}
      onOptionLeave={onOptionLeave}
      optionLineHeight={optionLineHeight}
      belongToCategory={belongToCategory}
      shouldScrollWhenActive={shouldScrollToSelectedItem}
      forceUndoScrollNullCheck={forceUndoScrollNullCheck}
    />
  );
}
