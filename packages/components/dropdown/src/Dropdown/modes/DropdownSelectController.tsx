import React, { useState, useCallback, useMemo } from "react";
import { type DropdownSingleControllerProps } from "../Dropdown.types";
import useDropdownSelect from "../hooks/useDropdownSelect";
import { type BaseItemData } from "@vibe/base-list";
import { type DropdownContextProps } from "../context/DropdownContext.types";
import DropdownWrapperUI from "../components/DropdownWrapperUI";

const noop = () => {};

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
    id,
    label,
    required,
    className,
    "aria-label": ariaLabel,
    "data-testid": dataTestId,
    error,
    helperText,
    dir,
    disabled,
    readOnly,
    optionRenderer,
    valueRenderer,
    menuRenderer,
    noOptionsMessage,
    placeholder,
    withGroupDivider,
    stickyGroupTitle,
    maxMenuHeight,
    inputAriaLabel,
    menuAriaLabel,
    clearAriaLabel,
    closeMenuOnSelect,
    menuWrapperClassName,
    boxMode,
    borderless,
    onKeyDown,
    onScroll,
    tooltipProps
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

  const wrappedGetToggleButtonProps = useCallback(
    (toggleOptions?: Record<string, any>) => {
      return getToggleButtonProps({
        ...(toggleOptions || {}),
        disabled: readOnly || disabled,
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
    [getToggleButtonProps, readOnly, disabled, onFocus, onBlur]
  );

  const contextOnClear = useCallback(() => {
    hookReset();
    onClear?.();
  }, [hookReset, onClear]);

  const contextValue = useMemo<DropdownContextProps<Item>>(
    () => ({
      label,
      required,
      className,
      "aria-label": ariaLabel,
      "data-testid": dataTestId,
      error,
      helperText,
      dir,
      disabled,
      readOnly,
      optionRenderer,
      valueRenderer,
      menuRenderer,
      noOptionsMessage,
      placeholder,
      withGroupDivider,
      stickyGroupTitle,
      maxMenuHeight,
      inputAriaLabel,
      menuAriaLabel,
      clearAriaLabel,
      closeMenuOnSelect,
      menuWrapperClassName,
      boxMode,
      borderless,
      onKeyDown,
      onScroll,
      onClear,
      onFocus,
      onBlur,
      tooltipProps,
      searchable,
      multi,
      autoFocus,
      clearable,
      size,
      loading,
      id,
      isOpen,
      highlightedIndex,
      selectedItem: hookSelectedItem,
      filteredOptions,
      getToggleButtonProps: wrappedGetToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getItemProps,
      reset: hookReset,
      inputValue: null,
      selectedItems: [],
      addSelectedItem: undefined,
      removeSelectedItem: undefined,
      contextOnClear,
      contextOnOptionRemove: noop,
      toggleMenu,
      isFocused
    }),
    [
      label, required, className, ariaLabel, dataTestId, error, helperText, dir,
      disabled, readOnly, optionRenderer, valueRenderer, menuRenderer, noOptionsMessage,
      placeholder, withGroupDivider, stickyGroupTitle, maxMenuHeight, inputAriaLabel,
      menuAriaLabel, clearAriaLabel, closeMenuOnSelect, menuWrapperClassName, boxMode,
      borderless, onKeyDown, onScroll, onClear, onFocus, onBlur, tooltipProps,
      searchable, multi, autoFocus, clearable, size, loading, id,
      isOpen, highlightedIndex, hookSelectedItem, filteredOptions,
      wrappedGetToggleButtonProps, getLabelProps, getMenuProps, getItemProps, hookReset,
      contextOnClear, toggleMenu, isFocused
    ]
  );

  return <DropdownWrapperUI contextValue={contextValue} dropdownRef={dropdownRef} />;
};

export default DropdownSelectController;
