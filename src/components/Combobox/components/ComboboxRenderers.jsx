import React from "react";
import cx from "classnames";
import ComboboxOption from "components/Combobox/components/ComboboxOption/ComboboxOption";
import ComboboxCategory from "components/Combobox/components/ComboboxCategory/ComboboxCategory";
import Divider from "../../Divider/Divider";
import { COMBOBOX_DIVIDER_ITEM, COMBOBOX_CATEGORY_ITEM, COMBOBOX_OPTION_ITEM } from "./ComboboxConstants";
export function comboboxItemRenderer({ type, ...otherArgs }) {
  switch (type) {
    case COMBOBOX_DIVIDER_ITEM: {
      return dividerRenderer(otherArgs);
    }
    case COMBOBOX_CATEGORY_ITEM: {
      return categoryRenderer(otherArgs);
    }
    case COMBOBOX_OPTION_ITEM: {
      return optionRenderer(otherArgs);
    }
  }
}

export function dividerRenderer({ id }) {
  return <Divider className="combobox_category-divider" key={id} />;
}

export function categoryRenderer({ id, category, className }) {
  return <ComboboxCategory key={id} category={category} className={className} />;
}

export function optionRenderer({
  id,
  index,
  option,
  onOptionClick,
  onOptionEnter,
  onOptionLeave,
  optionLineHeight,
  optionRenderer,
  shouldScrollToSelectedItem,
  isActive,
  belongToCategory,
  isActiveByKeyboard
}) {
  return (
    <ComboboxOption
      index={index}
      key={id}
      option={option}
      optionRenderer={optionRenderer}
      isActive={isActive}
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
