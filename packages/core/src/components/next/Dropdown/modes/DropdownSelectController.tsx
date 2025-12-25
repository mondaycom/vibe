import React, { useState } from "react";
import { type DropdownSingleControllerProps } from "../Dropdown.types";
import useDropdownSelect from "../hooks/useDropdownSelect";
import { type BaseItemData } from "../../../BaseItem";
import { type DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

const DropdownSelectController = <Item extends BaseItemData<Record<string, unknown>>>(
  props: DropdownSingleControllerProps<Item>
) => {
  const {
    options,
    autoFocus,
    isMenuOpen: isMenuOpenProp,
    defaultValue,
    value,
    onChange,
    onMenuOpen,
    onMenuClose,
    onOptionSelect,
    showSelectedOptions = true,
    filterOption,
    clearable = true,
    searchable = false,
    multi = false,
    dropdownRef,
    onClear,
    onFocus,
    onBlur,
    loading = false,
    size = "medium",
    id
  } = props;

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
    selectedItem: hookSelectedItem
  } = useDropdownSelect<Item>(
    options,
    autoFocus,
    isMenuOpenProp,
    defaultValue,
    value,
    onChange,
    onMenuOpen,
    onMenuClose,
    onOptionSelect,
    showSelectedOptions,
    filterOption,
    id
  );

  const contextValue: DropdownContextProps<Item> = {
    ...props,
    isOpen,
    highlightedIndex,
    selectedItem: hookSelectedItem,
    filteredOptions,
    getToggleButtonProps: (toggleOptions?: Record<string, any>) => {
      return getToggleButtonProps({
        ...(toggleOptions || {}),
        disabled: props.readOnly || props.disabled,
        onFocus: (event: React.FocusEvent<HTMLDivElement>) => {
          setIsFocused(true);
          onFocus?.(event);
        },
        onBlur: (event: React.FocusEvent<HTMLDivElement>) => {
          setIsFocused(false);
          onBlur?.(event);
        }
      });
    },
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
    contextOnOptionRemove: () => {},
    clearable,
    searchable,
    multi,
    autoFocus,
    onClear,
    size,
    toggleMenu,
    isFocused,
    loading
  };

  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} />;
};

export default DropdownSelectController;
