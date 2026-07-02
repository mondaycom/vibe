import { useCallback, useMemo, useRef, useState } from "react";
import { useCombobox } from "downshift";
import useDropdownFiltering from "./useDropdownFiltering";
import { type BaseItemData } from "../../BaseItem";
import { type DropdownGroupOption } from "../Dropdown.types";

function useDropdownCombobox<T extends BaseItemData<Record<string, unknown>>>(
  options: DropdownGroupOption<T>,
  isMenuOpen?: boolean,
  autoFocus?: boolean,
  closeMenuOnSelect?: boolean,
  defaultValue?: T,
  value?: T,
  inputValueProp?: string,
  onChange?: (option: T | T[] | null) => void,
  onInputChange?: (value: string | null) => void,
  onMenuOpen?: () => void,
  onMenuClose?: () => void,
  onOptionSelect?: (option: T) => void,
  filterOption?: (option: T, inputValue: string) => boolean,
  showSelectedOptions?: boolean,
  id?: string
) {
  const [currentSelectedItem, setCurrentSelectedItem] = useState<T | null>(defaultValue || null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Use controlled value if provided, otherwise use internal state
  const selectedItem = value !== undefined ? value : currentSelectedItem;

  const memoizedSelectedItemForFiltering = useMemo(() => {
    return selectedItem ? [selectedItem] : [];
  }, [selectedItem]);

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
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    reset,
    openMenu,
    toggleMenu,
    closeMenu,
    selectItem
  } = useCombobox<T>({
    items: flatOptions,
    itemToString: item => item?.label ?? "",
    itemToKey: item => (item?.value !== undefined ? String(item.value) : ""),
    isItemDisabled: item => Boolean(item.disabled),
    // Seed the input with the selected item's label so a defaultValue/value is visible (and exposed to
    // assistive technologies) on mount, now that the selection lives inside the input rather than in an overlay.
    initialInputValue: inputValueProp || selectedItem?.label || "",
    selectedItem: selectedItem,
    isOpen: isMenuOpen,
    initialIsOpen: autoFocus,
    id,
    onIsOpenChange: ({ isOpen }) => {
      // Reset the text filter when the menu closes so reopening always shows the full option list,
      // even though the input keeps displaying the selected item's label.
      if (!isOpen) {
        filterOptions("");
      }
      isOpen ? onMenuClose?.() : onMenuOpen?.();
    },

    onInputValueChange: useCallback(
      ({ inputValue, type }) => {
        // Only filter on actual user typing. Downshift also writes the selected item's label into the
        // input on selection/blur — those changes must not filter the list.
        if (type === useCombobox.stateChangeTypes.InputChange) {
          filterOptions(inputValue || "");
        }
        onInputChange?.(inputValue);
      },
      [onInputChange, filterOptions]
    ),
    onSelectedItemChange: useCallback(
      ({ selectedItem }) => {
        if (value === undefined) {
          setCurrentSelectedItem(selectedItem || null);
        }
        if (selectedItem) {
          onOptionSelect?.(selectedItem);
          onChange?.(selectedItem);
          filterOptions("");
        } else {
          onChange?.(null);
          filterOptions("");
        }
      },
      [value, onOptionSelect, filterOptions, onChange]
    ),
    onStateChange: useCallback(
      ({ type }) => {
        // Keep focus on the input after selecting via click or Enter so focus is never lost
        // (the menu still closes through the stateReducer's isOpen change).
        if (
          closeMenuOnSelect &&
          (type === useCombobox.stateChangeTypes.ItemClick || type === useCombobox.stateChangeTypes.InputKeyDownEnter)
        ) {
          inputRef.current?.focus();
        }
      },
      [closeMenuOnSelect]
    ),
    stateReducer: (state, actionAndChanges) => {
      switch (actionAndChanges.type) {
        // FunctionSelectItem (Space selecting the highlighted option, see getInputProps below) is
        // handled the same as Enter/click selection.
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.FunctionSelectItem:
          // Keep Downshift's default inputValue (the selected item's label) so the selection lives inside
          // the input and is exposed to assistive technologies. Only override the open state.
          return { ...actionAndChanges.changes, isOpen: !closeMenuOnSelect };

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
    getInputProps: (options?: Parameters<typeof getInputProps>[0]) =>
      getInputProps({
        ...options,
        ref: inputRef,
        onKeyDown: event => {
          options?.onKeyDown?.(event);
          // Space selects the highlighted option instead of typing a literal space. It only applies
          // when the user has arrowed to an option (highlightedIndex set, i.e. aria-activedescendant
          // is set); while typing/filtering there is no highlight, so Space types normally.
          if (event.key === " " && !event.defaultPrevented && isOpen && highlightedIndex >= 0) {
            const item = flatOptions[highlightedIndex];
            if (item && !item.disabled) {
              event.preventDefault();
              selectItem(item);
            }
          }
        }
      }),
    getItemProps,
    reset: () => {
      if (value === undefined) {
        setCurrentSelectedItem(null);
      }
      reset();
      filterOptions("");
    },
    filteredOptions,
    openMenu,
    toggleMenu,
    closeMenu
  };
}

export default useDropdownCombobox;
