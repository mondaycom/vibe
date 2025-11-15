import React, { useState } from "react";
import { type DropdownMultiControllerProps } from "../Dropdown.types";
import useDropdownMultiCombobox from "../hooks/useDropdownMultiCombobox";
import { type BaseListItemData } from "../../../BaseListItem";
import { type DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

const DropdownMultiComboboxController = <Item extends BaseListItemData<Record<string, unknown>>>(
  props: DropdownMultiControllerProps<Item>
) => {
  const {
    options,
    isMenuOpen: isMenuOpenProp,
    autoFocus,
    defaultValue,
    value,
    inputValue: inputValueProp,
    onChange,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    onOptionSelect,
    filterOption,
    showSelectedOptions = true,
    clearable = true,
    searchable = true,
    multi = true,
    closeMenuOnSelect = true,
    dropdownRef,
    onFocus,
    onBlur,
    onKeyDown,
    onClear,
    onOptionRemove,
    loading = false,
    size = "medium",
    id,
    boxMode = false
  } = props;

  const initialMultiSelectedItems = Array.isArray(defaultValue) ? defaultValue : [];
  const [multiSelectedItemsState, setMultiSelectedItemsState] = useState<Item[]>(initialMultiSelectedItems);
  const [isFocused, setIsFocused] = useState(false);

  const {
    isOpen,
    inputValue: hookInputValue,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    getInputProps: hookGetInputProps,
    reset: hookReset,
    toggleMenu,
    filteredOptions,
    selectedItems: hookSelectedItems,
    addSelectedItem: hookAddSelectedItem,
    removeSelectedItem: hookRemoveSelectedItem,
    getDropdownProps
  } = useDropdownMultiCombobox<Item>(
    options,
    multiSelectedItemsState,
    setMultiSelectedItemsState,
    boxMode ? undefined : isMenuOpenProp,
    autoFocus,
    defaultValue,
    value,
    inputValueProp,
    onChange,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    onOptionSelect,
    filterOption,
    showSelectedOptions,
    id
  );

  const contextValue: DropdownContextProps<Item> = {
    ...props,
    isOpen: boxMode ? true : isOpen,
    inputValue: hookInputValue ?? null,
    highlightedIndex,
    selectedItems: hookSelectedItems || [],
    filteredOptions,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    getInputProps: (inputOptions?: any) => {
      return hookGetInputProps!({
        ...(inputOptions || {}),
        disabled: props.readOnly || props.disabled,
        onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
          setIsFocused(true);
          onFocus?.(event as any);
          inputOptions?.onFocus?.(event);
        },
        onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
          setIsFocused(false);
          onBlur?.(event);
          inputOptions?.onBlur?.(event);
        },
        onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
          onKeyDown?.(event);
          inputOptions?.onKeyDown?.(event);
        }
      });
    },
    reset: hookReset,
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
    isFocused,
    clearable,
    searchable,
    multi,
    closeMenuOnSelect,
    size,
    getDropdownProps,
    toggleMenu,
    loading
  };

  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} />;
};

export default DropdownMultiComboboxController;
