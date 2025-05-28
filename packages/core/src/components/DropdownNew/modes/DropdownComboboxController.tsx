import React, { useState } from "react";
import { DropdownControllerProps } from "../Dropdown.types";
import useDropdownCombobox from "../hooks/useDropdownCombobox";
import { BaseListItemData } from "../../BaseListItem";
import { DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

const DropdownComboboxController = <Item extends BaseListItemData<Record<string, unknown>>>(
  props: DropdownControllerProps<Item>
) => {
  const {
    options,
    isMenuOpen: isMenuOpenProp,
    autoFocus,
    closeMenuOnSelect = true,
    defaultValue,
    value,
    inputValue: inputValueProp,
    onChange,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    onOptionSelect,
    filterOption,
    showSelectedOptions = false,
    clearable = true,
    searchable = true,
    multi = false,
    dropdownRef,
    onFocus,
    onBlur,
    onKeyDown,
    onClear,
    onOptionRemove,
    size = "medium",
    readOnly,
    disabled
  } = props;

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
    filteredOptions,
    selectedItem: hookSelectedItem
  } = useDropdownCombobox<Item>(
    options,
    isMenuOpenProp,
    autoFocus,
    closeMenuOnSelect,
    defaultValue as Item,
    value as Item,
    inputValueProp,
    onChange,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    onOptionSelect,
    filterOption,
    showSelectedOptions
  );

  const contextValue: DropdownContextProps<Item> = {
    ...props,
    isOpen,
    inputValue: hookInputValue ?? null,
    highlightedIndex,
    selectedItem: hookSelectedItem,
    selectedItems: [],
    filteredOptions,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    getInputProps: (inputOptions?: any) => {
      return hookGetInputProps!({
        ...(inputOptions || {}),
        disabled: readOnly || disabled,
        onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
          setIsFocused(true);
          onFocus?.(event as any);
          inputOptions?.onFocus?.(event);
        },
        onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
          setIsFocused(false);
          onBlur?.();
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
      onClear?.();
    },
    contextOnOptionRemove: (option: Item) => {
      onOptionRemove?.(option);
    },
    addSelectedItem: undefined,
    removeSelectedItem: undefined,
    isFocused,
    clearable,
    searchable,
    multi,
    closeMenuOnSelect,
    size
  };
  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} />;
};

export default DropdownComboboxController;
