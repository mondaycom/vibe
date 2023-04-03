import React, { CSSProperties, MutableRefObject, useMemo } from "react";
import cx from "classnames";
import ComboboxOption from "../components/ComboboxOption/ComboboxOption";
import ComboboxCategory from "../components/ComboboxCategory/ComboboxCategory";
import Divider from "../../Divider/Divider";
import {
  COMBOBOX_DIVIDER_ITEM,
  COMBOBOX_CATEGORY_ITEM,
  COMBOBOX_OPTION_ITEM,
  ComboboxCategoryType,
  ComboboxOptionType,
  ComboboxCategoryMap,
  ComboboxItem,
  ComboboxOptionEvents
} from "../components/ComboboxConstants";
import useActiveDescendantListFocus from "../../../hooks/useActiveDescendantListFocus";
import { getOptionsByCategories } from "../ComboboxService";
import comboboxItemsStyles from "../components/ComboboxItems/ComboboxItems.module.scss";
import { MutableRef } from "preact/hooks";
import styles from "./ComboboxHelpers.module.scss";

const DIVIDER_HEIGHT = 17;
const CATEGORY_HEIGHT = 32;

export function useItemsData({
  categories,
  options,
  filterValue,
  withCategoriesDivider,
  optionLineHeight
}: {
  categories: ComboboxCategoryMap;
  options: ComboboxOptionType[];
  filterValue: string;
  withCategoriesDivider: boolean;
  optionLineHeight: number;
}) {
  return useMemo(() => {
    let items: ComboboxItem[] = [];
    let selectableItems: ComboboxOptionType[] = [];
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
            [comboboxItemsStyles.categoryWithOptions]: isCategoryWithOptions,
            [comboboxItemsStyles.categoryWithoutOptions]: !isCategoryWithOptions,
            [comboboxItemsStyles.firstCategory]: isFirstCategory
          })
        });

        // save category object in both items array and categories map
        items.push(categoryObject);
        itemsMap.set(categoryId, categoryObject);

        optionsByCategories[categoryId].forEach((option: ComboboxOptionType) => {
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
  onClick,
  isChildSelectable,
  options,
  getOptionId
}: {
  defaultVisualFocusFirstIndex?: boolean;
  inputRef: MutableRefObject<HTMLElement>;
  onClick: (event: KeyboardEvent | MouseEvent, index: number) => void;
  isChildSelectable: (index: number) => boolean;
  options: ComboboxOptionType[];
  getOptionId: (optionId: string, index: number) => string;
}) {
  const filteredOptionsIds = useMemo(
    () => options.map((option: ComboboxOptionType, index: number) => getOptionId(option?.id, index)),
    [getOptionId, options]
  );

  const {
    visualFocusItemIndex,
    visualFocusItemId,
    onItemClickCallback: onOptionClick
  } = useActiveDescendantListFocus({
    defaultVisualFocusFirstIndex,
    focusedElementRef: inputRef,
    focusedElementRole: useActiveDescendantListFocus.roles.COMBOBOX,
    itemsIds: filteredOptionsIds,
    onItemClick: onClick,
    isItemSelectable: isChildSelectable,
    isIgnoreSpaceAsItemSelection: true
  });

  return { visualFocusItemIndex, visualFocusItemId, onOptionClick };
}
export function createDividerItemObject({ categoryId }: { categoryId: string }): ComboboxItem {
  return { type: COMBOBOX_DIVIDER_ITEM, height: DIVIDER_HEIGHT, id: `${categoryId}-divider` };
}

export function createCategoryItemObject({
  withDivider,
  categoryId,
  categoryData,
  className
}: {
  withDivider: boolean;
  categoryId: string;
  categoryData: ComboboxCategoryType;
  className: string;
}): ComboboxItem {
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
}: {
  option?: ComboboxOptionType;
  height?: number;
  index?: number;
  optionRenderer?: (option: ComboboxOptionType) => JSX.Element;
  isActive?: boolean;
  optionLineHeight?: number;
  shouldScrollToSelectedItem?: boolean;
  categoryId?: string;
}): ComboboxItem {
  return {
    type: COMBOBOX_OPTION_ITEM,
    height,
    belongToCategory: true,
    index,
    option,
    id: option.id || index.toString(),
    optionRenderer,
    isActive,
    optionLineHeight,
    shouldScrollToSelectedItem,
    categoryId
  };
}

export function comboboxItemRenderer({
  item,
  style,
  optionEvents,
  optionRenderData,
  isVirtualized
}: {
  item: ComboboxItem;
  style: CSSProperties;
  optionEvents: ComboboxOptionEvents;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  optionRenderData: any;
  isVirtualized: boolean;
}) {
  const { type, ...otherArgs } = item;
  let customClassNames;
  let innerElement;
  switch (type) {
    case COMBOBOX_DIVIDER_ITEM: {
      innerElement = dividerItemRenderer({ id: otherArgs.id, height: otherArgs.height });
      break;
    }
    case COMBOBOX_CATEGORY_ITEM: {
      innerElement = categoryItemRenderer({
        id: otherArgs.id,
        category: otherArgs.category,
        className: otherArgs.className
      });
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

export function dividerItemRenderer({ id, height }: { id: string; height: number }) {
  return (
    <div className={styles.dividerContainer} style={{ height: height }}>
      <Divider className={styles.divider} key={id} />
    </div>
  );
}

export function categoryItemRenderer({
  id,
  category,
  className
}: {
  id: string;
  category: ComboboxCategoryType;
  className: string;
}) {
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
  forceUndoScrollNullCheck,
  visualFocusItemIndex
}: {
  id?: string;
  index?: number;
  option?: ComboboxOptionType;
  className?: string;
  isActive?: boolean;
  visualFocus?: boolean;
  scrollRef?: MutableRef<HTMLElement>;
  scrollOffset?: number;
  onOptionClick?: (
    event: React.MouseEvent | React.KeyboardEvent,
    index: number,
    option: ComboboxOptionType,
    mouseTriggered: boolean
  ) => void;
  onOptionLeave?: (event: React.MouseEvent, index: number, option: ComboboxOptionType, mouseTriggered: boolean) => void;
  onOptionEnter?: (event: React.MouseEvent, index: number, option: ComboboxOptionType, mouseTriggered: boolean) => void;
  onOptionHover?: (event: React.MouseEvent, index: number, option: ComboboxOptionType, mouseTriggered: boolean) => void;
  optionLineHeight?: number;
  shouldScrollToSelectedItem?: boolean;
  shouldScrollWhenActive?: boolean;
  belongToCategory?: boolean;
  visualFocusItemIndex?: number;
  activeItemIndex?: number;
  optionRenderer?: (option: ComboboxOptionType) => JSX.Element;
  /**
   * temporary flag for investigate a bug - will remove very soon
   */
  forceUndoScrollNullCheck?: boolean;
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
      shouldScrollWhenActive={shouldScrollToSelectedItem}
      forceUndoScrollNullCheck={forceUndoScrollNullCheck}
    />
  );
}
