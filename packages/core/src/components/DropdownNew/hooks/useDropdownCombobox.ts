import { useCallback, useMemo } from "react";
import { useCombobox } from "downshift";
import useDropdownFiltering from "./useDropdownFiltering";
import { BaseListItemProps } from "../../BaseListItem";
import { ListGroup } from "../../BaseList";
import { DropdownGroupOption } from "../Dropdown.types";

function useDropdownCombobox<T extends BaseListItemProps>(
  options: DropdownGroupOption<T>,
  autoFocus?: boolean,
  isMenuOpen?: boolean,
  onChange?: (option: T | T[]) => void,
  onInputChange?: (value: string) => void,
  onMenuOpen?: () => void,
  onMenuClose?: () => void,
  onOptionSelect?: (option: T) => void
) {
  const { filteredOptions, filterOptions } = useDropdownFiltering<T>(options);
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
        if (selectedItem) {
          onOptionSelect?.(selectedItem);
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
          return { ...actionAndChanges.changes, inputValue: "" };
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
    reset,
    filteredOptions: filteredOptions as ListGroup<T>[]
  };
}

export default useDropdownCombobox;
