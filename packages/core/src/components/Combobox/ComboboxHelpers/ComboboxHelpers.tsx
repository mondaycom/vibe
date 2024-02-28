import React, { CSSProperties, MutableRefObject, useMemo } from "react";
import cx from "classnames";
import ComboboxOption from "../components/ComboboxOption/ComboboxOption";
import ComboboxCategory from "../components/ComboboxCategory/ComboboxCategory";
import Divider from "../../Divider/Divider";
import {
  COMBOBOX_DIVIDER_ITEM,
  COMBOBOX_CATEGORY_ITEM,
  COMBOBOX_OPTION_ITEM,
  IComboboxCategory,
  IComboboxOption,
  IComboboxCategoryMap,
  IComboboxItem,
  IOptionItemRendererArgs,
  IComboboxOptionEvents
} from "../components/ComboboxConstants";
import useActiveDescendantListFocus from "../../../hooks/useActiveDescendantListFocus";
import { getOptionsByCategories } from "../ComboboxService";
import comboboxItemsStyles from "../components/ComboboxItems/ComboboxItems.module.scss";
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
  categories: IComboboxCategoryMap;
  options: IComboboxOption[];
  filterValue: string;
  withCategoriesDivider: boolean;
  optionLineHeight: number;
}) {
  return useMemo(() => {
    let items: IComboboxItem[] = [];
    let selectableItems: IComboboxOption[] = [];
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

        optionsByCategories[categoryId].forEach((option: IComboboxOption) => {
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
  onClick: (event: React.KeyboardEvent | React.MouseEvent, index: number) => void;
  isChildSelectable: (index: number) => boolean;
  options: IComboboxOption[];
  getOptionId: (optionId: string, index: number) => string;
}) {
  const filteredOptionsIds = useMemo(
    () => options.map((option: IComboboxOption, index: number) => getOptionId(option?.id, index)),
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
export function createDividerItemObject({ categoryId }: { categoryId: string }): IComboboxItem {
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
  categoryData: IComboboxCategory;
  className: string;
}): IComboboxItem {
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
  option?: IComboboxOption;
  height?: number;
  index?: number;
  optionRenderer?: (option: IComboboxOption) => JSX.Element;
  isActive?: boolean;
  optionLineHeight?: number;
  shouldScrollToSelectedItem?: boolean;
  categoryId?: string;
}): IComboboxItem {
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
  isVirtualized,
  stickyCategories
}: {
  item: IComboboxItem;
  style: CSSProperties;
  optionEvents: IComboboxOptionEvents;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  optionRenderData: any;
  isVirtualized: boolean;
  stickyCategories?: boolean;
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
      if (stickyCategories && !isVirtualized) {
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
  category: IComboboxCategory;
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
  visualFocusItemIndex
}: IOptionItemRendererArgs) {
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
      onOptionEnter={onOptionEnter}
      optionLineHeight={optionLineHeight}
      shouldScrollWhenActive={shouldScrollToSelectedItem}
    />
  );
}
