import React, { createContext, useContext } from "react";
import { ListGroup } from "../../BaseList";
import { BaseListItemData } from "../../BaseListItem";
import { BaseDropdownProps, DropdownSizes } from "../Dropdown.types";
import { DropdownContextProps } from "./DropdownContext.types"; // Import the renamed type

// This will hold types for Downshift prop getters. They are quite generic.
// We can refine them if needed, but this is a common pattern.
type PropGetter = (options?: any) => Record<string, any>;
type ItemPropGetter<Item> = (options: { item: Item; index: number }) => Record<string, any>;

export interface DropdownContextValue<Item extends BaseListItemData<Record<string, unknown>> = any> {
  // State & Values from Downshift hooks & Dropdown props
  isOpen: boolean;
  inputValue: string | null;
  highlightedIndex: number | null;
  selectedItem: Item | null | undefined;
  selectedItems: Item[];
  filteredOptions: ListGroup<Item>[];

  // Prop Getters from Downshift
  getToggleButtonProps: PropGetter;
  getLabelProps: PropGetter;
  getMenuProps: PropGetter;
  getInputProps: PropGetter;
  getItemProps: ItemPropGetter<Item>;

  // Callbacks from Downshift & Dropdown
  reset: () => void;
  onClear?: () => void;
  onOptionSelect?: (option: Item) => void;
  onOptionRemove?: (option: Item) => void;
  addSelectedItem?: (item: Item) => void;
  removeSelectedItem?: (item: Item) => void;
  setSelectedItems?: (items: Item[]) => void;

  // Relevant props from BaseDropdownProps for sub-components
  searchable?: boolean;
  multi?: boolean;
  multiline?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  size?: DropdownSizes;
  optionRenderer?: BaseDropdownProps<Item>["optionRenderer"];
  valueRenderer?: BaseDropdownProps<Item>["valueRenderer"];
  noOptionsMessage?: BaseDropdownProps<Item>["noOptionsMessage"];
  placeholder?: BaseDropdownProps<Item>["placeholder"];
  withGroupDivider?: BaseDropdownProps<Item>["withGroupDivider"];
  stickyGroupTitle?: BaseDropdownProps<Item>["stickyGroupTitle"];
  maxMenuHeight?: BaseDropdownProps<Item>["maxMenuHeight"];
  clearable?: boolean;
  autoFocus?: boolean;
  isFocused?: boolean; // If needed for styling from context
  inputAriaLabel?: string;
  menuAriaLabel?: string;
  closeMenuOnSelect?: boolean;
  dir?: BaseDropdownProps<Item>["dir"];
  originalOnFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  originalOnBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  originalOnKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  originalOnScroll?: (event: React.UIEvent<HTMLUListElement>) => void;
}

export const DropdownContext = createContext<DropdownContextProps<any> | undefined>(undefined);

export function useDropdownContext<Item extends BaseListItemData<Record<string, unknown>>>() {
  const context = useContext(DropdownContext) as DropdownContextProps<Item>; // Cast here for specific Item type
  if (context === undefined) {
    throw new Error("useDropdownContext must be used within a DropdownProvider");
  }
  return context;
}
