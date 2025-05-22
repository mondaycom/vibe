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
  onChange?: (options: T[]) => void,
  onMenuOpen?: () => void,
  onMenuClose?: () => void,
  onOptionSelect?: (option: T) => void,
  showSelectedOptions?: boolean,
  filterOption?: (option: T, inputValue: string) => boolean
) {
  const { filteredOptions } = useDropdownFiltering<T>(options, filterOption, showSelectedOptions, selectedItems);

  const flatOptions = useMemo(() => filteredOptions.flatMap(group => group.options), [filteredOptions]);

  const { getSelectedItemProps, addSelectedItem, removeSelectedItem, getDropdownProps } = useMultipleSelection<T>({
    selectedItems,
    initialSelectedItems: defaultValue,
    onSelectedItemsChange: ({ selectedItems: newSelected }) => {
      setSelectedItems(newSelected || []);
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
      const itemWasSelected = selectedItems.some(item => item.value === newSelectedItem.value);
      if (itemWasSelected) {
        removeSelectedItem(newSelectedItem);
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
    setSelectedItems([]);
    downshiftReset();
    onChange?.([]);
  }, [setSelectedItems, downshiftReset, onChange]);

  const getInputProps = () => ({});

  return {
    isOpen,
    inputValue: "",
    highlightedIndex,
    selectedItems,
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
