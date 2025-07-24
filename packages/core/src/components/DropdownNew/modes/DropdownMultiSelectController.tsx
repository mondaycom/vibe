import React, { useState } from "react";
import { DropdownMultiControllerProps } from "../Dropdown.types";
import useDropdownMultiSelect from "../hooks/useDropdownMultiSelect";
import { BaseListItemData } from "../../BaseListItem";
import { DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

const DropdownMultiSelectController = <Item extends BaseListItemData<Record<string, unknown>>>(
  props: DropdownMultiControllerProps<Item>
) => {
  const {
    options,
    isMenuOpen: isMenuOpenProp,
    autoFocus,
    defaultValue,
    value,
    onChange,
    onMenuOpen,
    onMenuClose,
    onOptionSelect,
    clearable = true,
    showSelectedOptions = true,
    filterOption,
    dropdownRef,
    onClear,
    onOptionRemove,
    size = "medium"
  } = props;

  const initialMultiSelectedItems = Array.isArray(defaultValue) ? defaultValue : [];
  const [multiSelectedItemsState, setMultiSelectedItemsState] = useState<Item[]>(initialMultiSelectedItems);

  const {
    isOpen,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    reset: hookReset,
    toggleMenu,
    filteredOptions,
    selectedItems: hookSelectedItems,
    addSelectedItem: hookAddSelectedItem,
    removeSelectedItem: hookRemoveSelectedItem,
    getDropdownProps
  } = useDropdownMultiSelect<Item>(
    options,
    multiSelectedItemsState,
    setMultiSelectedItemsState,
    isMenuOpenProp,
    autoFocus,
    defaultValue,
    value,
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
    inputValue: null,
    highlightedIndex,
    selectedItem: undefined,
    selectedItems: hookSelectedItems || [],
    filteredOptions,
    clearable,
    getToggleButtonProps: (toggleOptions?: any) => {
      return getToggleButtonProps({
        ...(toggleOptions || {}),
        disabled: props.readOnly || props.disabled
      });
    },
    getLabelProps,
    getMenuProps,
    getItemProps,
    reset: hookReset,
    getDropdownProps,
    contextOnClear: () => {
      hookReset();
      if (value === undefined) {
        setMultiSelectedItemsState([]);
      }
      onClear?.();
    },
    contextOnOptionRemove: (option: Item) => {
      if (hookRemoveSelectedItem) {
        hookRemoveSelectedItem(option);
      }
      onOptionRemove?.(option);
    },
    addSelectedItem: hookAddSelectedItem,
    removeSelectedItem: hookRemoveSelectedItem,
    size,
    toggleMenu
  };

  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} />;
};

export default DropdownMultiSelectController;
