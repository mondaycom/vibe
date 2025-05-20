import React from "react";
import { DropdownControllerProps } from "../Dropdown.types";
import useDropdownSelect from "../hooks/useDropdownSelect";
import { BaseListItemData } from "../../BaseListItem";
import { DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

const DropdownSelectController = <Item extends BaseListItemData<Record<string, unknown>>>(
  props: DropdownControllerProps<Item>
) => {
  const {
    options,
    autoFocus,
    isMenuOpen: isMenuOpenProp,
    defaultValue,
    onChange,
    onMenuOpen,
    onMenuClose,
    onOptionSelect,
    showSelectedOptions = false,
    filterOption,
    clearable = true,
    searchable = false,
    multi = false,
    dropdownRef,
    onClear,
    onOptionRemove
  } = props;

  const {
    isOpen,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    reset: hookReset,
    filteredOptions,
    selectedItem: hookSelectedItem
  } = useDropdownSelect<Item>(
    options,
    autoFocus,
    isMenuOpenProp,
    defaultValue as Item,
    onChange,
    onMenuOpen,
    onMenuClose,
    onOptionSelect,
    showSelectedOptions,
    filterOption
  );

  const contextValue: DropdownContextProps<Item> = {
    ...props,
    isOpen,
    highlightedIndex,
    selectedItem: hookSelectedItem,
    filteredOptions,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    reset: hookReset,
    inputValue: null,
    selectedItems: [],
    addSelectedItem: undefined,
    removeSelectedItem: undefined,
    contextOnClear: () => {
      hookReset();
      onClear?.();
    },
    contextOnOptionRemove: (option: Item) => {
      onOptionRemove?.(option);
    },
    clearable,
    searchable,
    multi,
    autoFocus,
    onClear
  };

  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} />;
};

export default DropdownSelectController;
