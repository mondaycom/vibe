import React from "react";
import ComboboxOption from "components/Combobox/components/ComboboxOption/ComboboxOption";
import ComboboxCategory from "components/Combobox/components/ComboboxCategory/ComboboxCategory";
import Divider from "../../../Divider/Divider";
import { COMBOBOX_DIVIDER_ITEM, COMBOBOX_CATEGORY_ITEM, COMBOBOX_OPTION_ITEM } from "../ComboboxConstants";
import styles from "./ComboboxRenderers.module.scss";

export function comboboxItemRenderer(item, _index, style) {
  const { type, ...otherArgs } = item;
  let innerElement;
  switch (type) {
    case COMBOBOX_DIVIDER_ITEM: {
      innerElement = dividerRenderer(otherArgs);
      break;
    }
    case COMBOBOX_CATEGORY_ITEM: {
      innerElement = categoryRenderer(otherArgs);
      break;
    }
    case COMBOBOX_OPTION_ITEM: {
      innerElement = optionRenderer(otherArgs);
      break;
    }
  }

  return (
    <div key={otherArgs.id} className={styles.comboboxItemContainer} style={style}>
      {innerElement}
    </div>
  );
}

export function dividerRenderer({ id, height }) {
  return (
    <div className={styles.dividerContainer} style={{ height: height }}>
      <Divider className={styles.divider} key={id} />
    </div>
  );
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
