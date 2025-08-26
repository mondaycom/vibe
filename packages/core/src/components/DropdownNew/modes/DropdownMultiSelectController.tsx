import React, { useState } from "react";
import { type DropdownMultiControllerProps } from "../Dropdown.types";
import useDropdownMultiSelect from "../hooks/useDropdownMultiSelect";
import { type BaseListItemData } from "../../BaseListItem";
import { type DropdownContextProps } from "../context/DropdownContext.types";
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
    onFocus,
    onBlur,
    size = "medium"
  } = props;

  const initialMultiSelectedItems = Array.isArray(defaultValue) ? defaultValue : [];
  const [multiSelectedItemsState, setMultiSelectedItemsState] = useState<Item[]>(initialMultiSelectedItems);
  const [isFocused, setIsFocused] = useState(false);

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
    getToggleButtonProps: (toggleOptions?: Record<string, any>) => {
      return getToggleButtonProps({
        ...(toggleOptions || {}),
        disabled: props.readOnly || props.disabled,
        onFocus: (event: React.FocusEvent<HTMLDivElement>) => {
          setIsFocused(true);
          onFocus?.(event);
        },
        onBlur: () => {
          setIsFocused(false);
          onBlur?.();
        }
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
    toggleMenu,
    isFocused
  };

  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} />;
};

export default DropdownMultiSelectController;
