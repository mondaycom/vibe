import { useMemo, useState } from "react";
import { useSelect } from "downshift";
import useDropdownFiltering from "./useDropdownFiltering";
import { BaseListItemData } from "../../BaseListItem";
import { DropdownGroupOption } from "../Dropdown.types";

function useDropdownSelect<T extends BaseListItemData<Record<string, unknown>>>(
  options: DropdownGroupOption<T>,
  autoFocus?: boolean,
  isMenuOpen?: boolean,
  defaultValue?: T,
  onChange?: (option: T | T[] | null) => void,
  onMenuOpen?: () => void,
  onMenuClose?: () => void,
  onOptionSelect?: (option: T) => void,
  showSelectedOptions?: boolean,
  filterOption?: (option: T, inputValue: string) => boolean
) {
  const [currentSelectedItem, setCurrentSelectedItem] = useState<T | null>(defaultValue || null);

  const memoizedSelectedItemForFiltering = useMemo(() => {
    return currentSelectedItem ? [currentSelectedItem] : [];
  }, [currentSelectedItem]);

  const { filteredOptions } = useDropdownFiltering<T>(
    options,
    filterOption,
    showSelectedOptions,
    memoizedSelectedItemForFiltering
  );

  const flatOptions = useMemo(() => filteredOptions.flatMap(group => group.options), [filteredOptions]);

  const {
    isOpen,
    highlightedIndex,
    selectedItem,
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
    isOpen: isMenuOpen,
    initialIsOpen: autoFocus,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      setCurrentSelectedItem(newSelectedItem || null);
      if (newSelectedItem) {
        onOptionSelect?.(newSelectedItem);
      }
      onChange?.(newSelectedItem || null);
    },
    onIsOpenChange: ({ isOpen }) => {
      isOpen ? onMenuClose?.() : onMenuOpen?.();
    }
  });

  const reset = () => {
    setCurrentSelectedItem(null);
    downshiftReset();
    onChange?.(null);
  };

  const getInputProps = () => ({});

  return {
    isOpen,
    inputValue: "",
    highlightedIndex,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    reset,
    filteredOptions,
    openMenu,
    toggleMenu,
    closeMenu
  };
}

export default useDropdownSelect;
