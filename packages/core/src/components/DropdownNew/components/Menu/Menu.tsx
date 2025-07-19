import React from "react";
import cx from "classnames";
import { DialogContentContainer } from "../../../DialogContentContainer";
import { BaseList } from "../../../BaseList";
import { useDropdownContext } from "../../context/DropdownContext";
import { BaseListItemData } from "../../../BaseListItem";
import styles from "./Menu.module.scss";

const Menu = <Item extends BaseListItemData<Record<string, unknown>>>() => {
  const {
    isOpen,
    filteredOptions,
    highlightedIndex,
    getMenuProps,
    getItemProps,
    optionRenderer,
    menuRenderer,
    size,
    withGroupDivider,
    stickyGroupTitle,
    dir,
    noOptionsMessage,
    maxMenuHeight,
    onScroll,
    menuAriaLabel,
    selectedItem,
    selectedItems,
    menuWrapperClassName
  } = useDropdownContext<Item>();

  const currentSelection = selectedItems?.length > 0 ? selectedItems : selectedItem ? [selectedItem] : [];

  return (
    <DialogContentContainer
      className={cx({ [styles.menuVisible]: isOpen, [styles.menuHidden]: !isOpen }, menuWrapperClassName)}
    >
      <BaseList<Item>
        size={size}
        options={filteredOptions}
        selectedItems={currentSelection}
        highlightedIndex={highlightedIndex}
        menuAriaLabel={menuAriaLabel}
        getMenuProps={getMenuProps}
        getItemProps={getItemProps}
        withGroupDivider={withGroupDivider}
        stickyGroupTitle={stickyGroupTitle}
        dir={dir}
        itemRenderer={optionRenderer}
        noOptionsMessage={noOptionsMessage}
        renderOptions={isOpen}
        onScroll={onScroll}
        maxMenuHeight={maxMenuHeight}
        menuRenderer={menuRenderer}
      />
    </DialogContentContainer>
  );
};

export default Menu;
