import React, { useState } from "react";
import { type DropdownSingleControllerProps } from "../Dropdown.types";
import useDropdownCombobox from "../hooks/useDropdownCombobox";
import { type BaseListItemData } from "../../../BaseListItem";
import { type DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

const DropdownComboboxController = <Item extends BaseListItemData<Record<string, unknown>>>(
  props: DropdownSingleControllerProps<Item>
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
    showSelectedOptions = true,
    clearable = true,
    searchable = true,
    multi = false,
    dropdownRef,
    onFocus,
    onBlur,
    onKeyDown,
    onClear,
    loading = false,
    size = "medium",
    id,
    readOnly,
    disabled,
    boxMode = false
  } = props;

  const isMenuOpen = boxMode ? true : isMenuOpenProp;

  const [isFocused, setIsFocused] = useState(false);

  const handleOptionSelect = (item: Item | null) => {
    onOptionSelect?.(item);
    if (item) {
      setIsFocused(false);
    }
  };

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
    selectedItem: hookSelectedItem,
    toggleMenu
  } = useDropdownCombobox<Item>(
    options,
    isMenuOpen,
    autoFocus,
    closeMenuOnSelect,
    defaultValue,
    value,
    inputValueProp,
    onChange,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    handleOptionSelect,
    filterOption,
    showSelectedOptions,
    id
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
      onClear?.();
    },
    contextOnOptionRemove: () => {},
    addSelectedItem: undefined,
    removeSelectedItem: undefined,
    isFocused,
    clearable,
    searchable,
    multi,
    closeMenuOnSelect,
    size,
    toggleMenu,
    loading
  };
  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} />;
};

export default DropdownComboboxController;
