import React, { useCallback, useMemo } from "react";
import BaseList from "../DropdownBaseList/DropdownBaseList";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "@vibe/base-list";

const MenuList = <Item extends BaseItemData<Record<string, unknown>>>() => {
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

  const currentSelection = useMemo(
    () => (selectedItems?.length > 0 ? selectedItems : selectedItem ? [selectedItem] : []),
    [selectedItems, selectedItem]
  );

  const enhancedGetMenuProps = useCallback(
    (props?: Record<string, unknown>) => {
      const baseProps = getMenuProps?.(props) || {};
      return multi ? { ...baseProps, "aria-multiselectable": "true" } : baseProps;
    },
    [getMenuProps, multi]
  );

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
