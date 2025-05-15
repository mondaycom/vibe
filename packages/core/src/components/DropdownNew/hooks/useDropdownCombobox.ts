import { useCallback, useMemo, useState } from "react";
import { useCombobox } from "downshift";
import useDropdownFiltering from "./useDropdownFiltering";
import { BaseListItemData } from "../../BaseListItem";
import { DropdownGroupOption } from "../Dropdown.types";

function useDropdownCombobox<T extends BaseListItemData<Record<string, unknown>>>(
  options: DropdownGroupOption<T>,
  autoFocus?: boolean,
  isMenuOpen?: boolean,
  closeMenuOnSelect?: boolean,
  onChange?: (option: T | null) => void,
  onInputChange?: (value: string) => void,
  onMenuOpen?: () => void,
  onMenuClose?: () => void,
  onOptionSelect?: (option: T) => void,
  filterOption?: (option: T, inputValue: string) => boolean,
  showSelectedOptions?: boolean
) {
  const [currentSelectedItem, setCurrentSelectedItem] = useState<T | null>(null);

  const memoizedSelectedItemForFiltering = useMemo(() => {
    return currentSelectedItem ? [currentSelectedItem] : [];
  }, [currentSelectedItem]);

  const { filteredOptions, filterOptions } = useDropdownFiltering<T>(
    options,
    filterOption,
    showSelectedOptions,
    memoizedSelectedItemForFiltering
  );

  const flatOptions = useMemo(() => filteredOptions.flatMap(group => group.options), [filteredOptions]);

  const {
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    reset
  } = useCombobox<T>({
    items: flatOptions,
    itemToString: item => item?.label ?? "",
    isItemDisabled: item => Boolean(item.disabled),
    isOpen: isMenuOpen,
    initialIsOpen: autoFocus,
    onIsOpenChange: useCallback(
      ({ isOpen }) => {
        isOpen ? onMenuClose?.() : onMenuOpen?.();
      },
      [onMenuClose, onMenuOpen]
    ),

    onInputValueChange: useCallback(
      ({ inputValue }) => {
        filterOptions(inputValue || "");
        onInputChange?.(inputValue || "");
      },
      [onInputChange, filterOptions]
    ),

    onSelectedItemChange: useCallback(
      ({ selectedItem }) => {
        setCurrentSelectedItem(selectedItem || null);
        if (selectedItem) {
          onOptionSelect?.(selectedItem);
          onChange?.(selectedItem);
          filterOptions("");
        } else {
          onChange?.(null);
          filterOptions("");
          onChange?.(selectedItem);
        }
      },
      [onOptionSelect, filterOptions, onChange]
    ),

    stateReducer: (state, actionAndChanges) => {
      switch (actionAndChanges.type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return { ...actionAndChanges.changes, inputValue: "", isOpen: !closeMenuOnSelect };
        default:
          return actionAndChanges.changes;
      }
    }
  });

  return {
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    reset: () => {
      setCurrentSelectedItem(null);
      reset();
      filterOptions("");
    },
    filteredOptions
  };
}

export default useDropdownCombobox;
