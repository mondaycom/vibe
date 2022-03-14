import React from "react";
import cx from "classnames";
import ComboboxOption from "components/Combobox/components/ComboboxOption/ComboboxOption";
import ComboboxCategory from "components/Combobox/components/ComboboxCategory/ComboboxCategory";
import Divider from "../../../Divider/Divider";
import { COMBOBOX_DIVIDER_ITEM, COMBOBOX_CATEGORY_ITEM, COMBOBOX_OPTION_ITEM } from "../ComboboxConstants";
import styles from "./ComboboxRenderers.module.scss";

const DIVIDER_HEIGHT = 17;
const CATEGORY_HEIGHT = 32;

export function createDividerItemObject({ categoryId }) {
  return { type: COMBOBOX_DIVIDER_ITEM, height: DIVIDER_HEIGHT, id: `${categoryId}-divider` };
}

export function createCategoryItemObject({ withDivider, categoryId, categoryData }) {
  return {
    height: CATEGORY_HEIGHT,
    type: COMBOBOX_CATEGORY_ITEM,
    category: categoryData,
    id: categoryId,
    withDivider
  };
}

export function createOptionItemObject({
  option,
  height,
  index,
  optionRenderer,
  isActive,
  isActiveByKeyboard,
  onOptionClick,
  onOptionEnter,
  onOptionLeave,
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
    isActiveByKeyboard,
    onOptionClick,
    onOptionEnter,
    onOptionLeave,
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
      innerElement = categoryItemRenderer({ isVirtualized, ...otherArgs });
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

export function categoryItemRenderer({ id, category, className, isVirtualized }) {
  return <ComboboxCategory key={id} category={category} className={className} sticky={!isVirtualized} />;
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
  shouldScrollToSelectedItem,
  activeItemIndex,
  belongToCategory,
  isActiveByKeyboard
}) {
  return (
    <ComboboxOption
      index={index}
      key={id}
      option={option}
      optionRenderer={optionRenderer}
      isActive={activeItemIndex === index}
      isActiveByKeyboard={isActiveByKeyboard}
      onOptionClick={onOptionClick}
      onOptionHover={onOptionEnter}
      onOptionLeave={onOptionLeave}
      optionLineHeight={optionLineHeight}
      belongToCategory={belongToCategory}
      shouldScrollWhenActive={shouldScrollToSelectedItem}
    />
  );
}
