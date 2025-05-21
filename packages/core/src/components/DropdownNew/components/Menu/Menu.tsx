import React from "react";
import { DialogContentContainer } from "../../../DialogContentContainer";
import { BaseList } from "../../../BaseList";
import { useDropdownContext } from "../../context/DropdownContext";
import { BaseListItemData } from "../../../BaseListItem";

const Menu = <Item extends BaseListItemData<Record<string, unknown>>>() => {
  const {
    isOpen,
    filteredOptions,
    highlightedIndex,
    getMenuProps,
    getItemProps,
    optionRenderer,
    size,
    withGroupDivider,
    stickyGroupTitle,
    dir,
    noOptionsMessage,
    maxMenuHeight,
    onScroll,
    menuAriaLabel,
    selectedItem,
    selectedItems
  } = useDropdownContext<Item>();

  const currentSelection = selectedItems?.length > 0 ? selectedItems : selectedItem ? [selectedItem] : [];

  return (
    <DialogContentContainer>
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
      />
    </DialogContentContainer>
  );
};

export default Menu;
