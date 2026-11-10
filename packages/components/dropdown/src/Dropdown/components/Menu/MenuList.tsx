import React from "react";
import BaseList from "../DropdownBaseList/DropdownBaseList";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "@vibe/base-list";

interface MenuListProps {
  /**
   * Listbox props already obtained from downshift's getMenuProps (used when the menu ref lives on a wrapper).
   */
  listboxProps?: Record<string, unknown>;
}

const MenuList = <Item extends BaseItemData<Record<string, unknown>>>({ listboxProps }: MenuListProps = {}) => {
  const {
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
    multi,
    isOpen,
    boxMode
  } = useDropdownContext<Item>();

  const currentSelection = selectedItems?.length > 0 ? selectedItems : selectedItem ? [selectedItem] : [];

  const enhancedGetMenuProps = (props?: Record<string, unknown>) => {
    const baseProps = listboxProps ?? (getMenuProps?.(props) || {});
    return multi ? { ...baseProps, "aria-multiselectable": "true" } : baseProps;
  };

  return (
    <BaseList<Item>
      size={size}
      options={filteredOptions}
      selectedItems={currentSelection}
      highlightedIndex={highlightedIndex}
      menuAriaLabel={menuAriaLabel}
      getMenuProps={enhancedGetMenuProps}
      getItemProps={getItemProps}
      withGroupDivider={withGroupDivider}
      stickyGroupTitle={stickyGroupTitle}
      dir={dir}
      itemRenderer={optionRenderer}
      noOptionsMessage={noOptionsMessage}
      renderOptions={boxMode ? true : isOpen}
      onScroll={onScroll}
      maxMenuHeight={maxMenuHeight}
      menuRenderer={menuRenderer}
    />
  );
};

export default MenuList;
