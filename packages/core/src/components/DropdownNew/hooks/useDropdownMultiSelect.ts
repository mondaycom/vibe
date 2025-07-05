import { useMemo, useCallback } from "react";
import { useMultipleSelection, useSelect } from "downshift";
import useDropdownFiltering from "./useDropdownFiltering";
import { DropdownGroupOption } from "../Dropdown.types";
import { BaseListItemData } from "../../BaseListItem";

function useDropdownMultiSelect<T extends BaseListItemData<Record<string, unknown>>>(
  options: DropdownGroupOption<T>,
  selectedItems: T[],
  setSelectedItems: (items: T[]) => void,
  isMenuOpen: boolean,
  autoFocus?: boolean,
  defaultValue?: T[],
  value?: T[],
  onChange?: (options: T[]) => void,
  onMenuOpen?: () => void,
  onMenuClose?: () => void,
  onOptionSelect?: (option: T) => void,
  showSelectedOptions?: boolean,
  filterOption?: (option: T, inputValue: string) => boolean
) {
  const currentSelectedItems = value !== undefined ? value : selectedItems;

  const { filteredOptions } = useDropdownFiltering<T>(options, filterOption, showSelectedOptions, currentSelectedItems);

  const flatOptions = useMemo(() => filteredOptions.flatMap(group => group.options), [filteredOptions]);

  const { getSelectedItemProps, addSelectedItem, removeSelectedItem, getDropdownProps } = useMultipleSelection<T>({
    selectedItems: currentSelectedItems,
    initialSelectedItems: defaultValue,
    onSelectedItemsChange: ({ selectedItems: newSelected }) => {
      if (value === undefined) {
        setSelectedItems(newSelected || []);
      }
      onChange?.(newSelected || []);
    }
  });

  const {
    isOpen,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    reset: downshiftReset,
    openMenu,
    toggleMenu,
    closeMenu
  } = useSelect<T>({
    items: flatOptions,
    itemToString: item => item?.label ?? "",
    isItemDisabled: item => Boolean(item.disabled),
    selectedItem: null,
    isOpen: isMenuOpen,
    initialIsOpen: autoFocus,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (!newSelectedItem) return;
      const existingItem = currentSelectedItems.find(item => item.value === newSelectedItem.value);
      if (existingItem) {
        removeSelectedItem(existingItem);
      } else {
        addSelectedItem(newSelectedItem);
      }
      onOptionSelect?.(newSelectedItem);
    },
    stateReducer: (state, actionAndChanges) => {
      const { type, changes } = actionAndChanges;
      switch (type) {
        case useSelect.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true
          };
        default:
          return changes;
      }
    },
    onIsOpenChange: ({ isOpen }) => {
      isOpen ? onMenuOpen?.() : onMenuClose?.();
    }
  });

  const reset = useCallback(() => {
    if (value === undefined) {
      setSelectedItems([]);
    }
    downshiftReset();
    onChange?.([]);
  }, [value, setSelectedItems, downshiftReset, onChange]);

  const getInputProps = () => ({});

  return {
    isOpen,
    inputValue: "",
    highlightedIndex,
    selectedItems: currentSelectedItems,
    getSelectedItemProps,
    addSelectedItem,
    removeSelectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    reset,
    filteredOptions,
    openMenu,
    toggleMenu,
    closeMenu,
    getDropdownProps
  };
}

export default useDropdownMultiSelect;
