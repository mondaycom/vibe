import { useMemo, useState } from "react";
import { useSelect } from "downshift";
import useDropdownFiltering from "./useDropdownFiltering";
import { type BaseItemData } from "../../../BaseItem";
import { type DropdownGroupOption } from "../Dropdown.types";

function useDropdownSelect<T extends BaseItemData<Record<string, unknown>>>(
  options: DropdownGroupOption<T>,
  autoFocus?: boolean,
  isMenuOpen?: boolean,
  defaultValue?: T,
  value?: T,
  onChange?: (option: T | T[] | null) => void,
  onMenuOpen?: () => void,
  onMenuClose?: () => void,
  onOptionSelect?: (option: T) => void,
  showSelectedOptions?: boolean,
  filterOption?: (option: T, inputValue: string) => boolean,
  id?: string
) {
  const [currentSelectedItem, setCurrentSelectedItem] = useState<T | null>(defaultValue || null);

  const selectedItem = value !== undefined ? value : currentSelectedItem;

  const memoizedSelectedItemForFiltering = useMemo(() => {
    return selectedItem ? [selectedItem] : [];
  }, [selectedItem]);

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
    itemToKey: item => (item?.value !== undefined ? String(item.value) : ""),
    isItemDisabled: item => Boolean(item.disabled),
    isOpen: isMenuOpen,
    initialIsOpen: autoFocus,
    selectedItem: selectedItem,
    id,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (value === undefined) {
        setCurrentSelectedItem(newSelectedItem || null);
      }
      if (newSelectedItem) {
        onOptionSelect?.(newSelectedItem);
      }
      onChange?.(newSelectedItem || null);
    },
    onIsOpenChange: ({ isOpen }) => {
      isOpen ? onMenuOpen?.() : onMenuClose?.();
    }
  });

  const reset = () => {
    if (value === undefined) {
      setCurrentSelectedItem(null);
    }
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
