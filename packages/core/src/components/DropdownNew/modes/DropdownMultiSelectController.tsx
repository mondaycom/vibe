import React, { useState } from "react";
import { DropdownControllerProps } from "../Dropdown.types";
import useDropdownMultiSelect from "../hooks/useDropdownMultiSelect";
import { BaseListItemData } from "../../BaseListItem";
import { DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

const DropdownMultiSelectController = <Item extends BaseListItemData<Record<string, unknown>>>(
  props: DropdownControllerProps<Item>
) => {
  const {
    options,
    isMenuOpen: isMenuOpenProp,
    autoFocus,
    defaultValue,
    onChange,
    onMenuOpen,
    onMenuClose,
    onOptionSelect,
    showSelectedOptions = false,
    filterOption,
    tooltipProps,
    className,
    id,
    "data-testid": dataTestId,
    label,
    required,
    helperText,
    error,
    disabled,
    readOnly,
    dir,
    size,
    optionRenderer,
    valueRenderer,
    noOptionsMessage,
    placeholder,
    withGroupDivider,
    stickyGroupTitle,
    maxMenuHeight,
    clearable = true,
    searchable = false,
    ariaLabel,
    menuAriaLabel,
    onBlur,
    onClear,
    onFocus,
    onKeyDown,
    onOptionRemove,
    onScroll,
    multi = true,
    multiline,
    dropdownRef,
    inputAriaLabel: propInputAriaLabel,
    closeMenuOnSelect: propCloseMenuOnSelect
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
    filteredOptions,
    selectedItems: hookSelectedItems,
    addSelectedItem: hookAddSelectedItem,
    removeSelectedItem: hookRemoveSelectedItem
  } = useDropdownMultiSelect<Item>(
    options,
    multiSelectedItemsState,
    setMultiSelectedItemsState,
    isMenuOpenProp,
    autoFocus,
    defaultValue as Item[],
    onChange,
    onMenuOpen,
    onMenuClose,
    onOptionSelect,
    showSelectedOptions,
    filterOption
  );

  const contextValue: DropdownContextProps<Item> = {
    label,
    required,
    className,
    id,
    "data-testid": dataTestId,
    ariaLabel,
    error,
    helperText,
    isOpen,
    inputValue: null,
    highlightedIndex,
    selectedItem: undefined,
    selectedItems: hookSelectedItems || [],
    filteredOptions,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    reset: hookReset,
    contextOnClear: () => {
      hookReset();
      setMultiSelectedItemsState([]);
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
    searchable,
    multi,
    multiline,
    disabled,
    readOnly,
    size,
    optionRenderer,
    valueRenderer,
    noOptionsMessage,
    placeholder,
    withGroupDivider,
    stickyGroupTitle,
    maxMenuHeight,
    clearable,
    autoFocus,
    inputAriaLabel: propInputAriaLabel,
    menuAriaLabel,
    closeMenuOnSelect: propCloseMenuOnSelect,
    dir,
    onFocus,
    onBlur,
    onKeyDown,
    onScroll,
    onClear,
    tooltipProps
  };

  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} />;
};

export default DropdownMultiSelectController;
