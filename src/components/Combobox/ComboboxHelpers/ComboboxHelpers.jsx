import React from "react";
import cx from "classnames";
import ComboboxOption from "../components/ComboboxOption/ComboboxOption";
import ComboboxCategory from "../components/ComboboxCategory/ComboboxCategory";
import Divider from "../../Divider/Divider";
import { COMBOBOX_DIVIDER_ITEM, COMBOBOX_CATEGORY_ITEM, COMBOBOX_OPTION_ITEM } from "../components/ComboboxConstants";
import styles from "./ComboboxHelpers.module.scss";

const DIVIDER_HEIGHT = 17;
const CATEGORY_HEIGHT = 32;

export function getOptionId(id, index) {
  return id !== undefined ? `combobox-item-${id}` : `combobox-item-${index}`;
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
