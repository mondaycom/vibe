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
    multi = false,
    multiline,
    dropdownRef,
    inputAriaLabel: propInputAriaLabel,
    closeMenuOnSelect: propCloseMenuOnSelect,
    tooltipProps
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
    selectedItem: hookSelectedItem,
    selectedItems: [],
    filteredOptions,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
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

export default DropdownSelectController;
