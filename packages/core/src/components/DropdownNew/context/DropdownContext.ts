import React, { createContext, useContext } from "react";
import { ListGroup } from "../../BaseList";
import { BaseListItemData } from "../../BaseListItem";
import {
  BaseDropdownProps,
  DropdownSizes
  // Assuming DropdownItem is the generic Item type from BaseDropdownProps
} from "../Dropdown.types";
import { DropdownContextProps } from "./DropdownContext.types"; // Import the renamed type

// This will hold types for Downshift prop getters. They are quite generic.
// We can refine them if needed, but this is a common pattern.
type PropGetter = (options?: any) => Record<string, any>;
type ItemPropGetter<Item> = (options: { item: Item; index: number }) => Record<string, any>;

export interface DropdownContextValue<Item extends BaseListItemData<Record<string, unknown>> = any> {
  // State & Values from Downshift hooks & Dropdown props
  isOpen: boolean;
  inputValue: string | null; // Combobox has inputValue, Select does not, so make it nullable
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
  // Functions to modify state (will be provided by the component using the hook)
  onClear?: () => void; // Handles clearing logic including calling parent onClear and Downshift's reset
  onOptionSelect?: (option: Item) => void; // To handle selection from Option component
  onOptionRemove?: (option: Item) => void; // To handle removal from MultiSelectedValues or Chips
  // For multi-select, we might need direct access to selection modifiers from useMultipleSelection
  addSelectedItem?: (item: Item) => void;
  removeSelectedItem?: (item: Item) => void;
  setSelectedItems?: (items: Item[]) => void; // if Dropdown main state needs update

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
  // We might also need to pass down onFocus, onBlur, onKeyDown from original props
  // if sub-components like input need to trigger them.
  originalOnFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  originalOnBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  originalOnKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  originalOnScroll?: (event: React.UIEvent<HTMLUListElement>) => void;
}

// Creating context with a generic type, default is undefined or a minimal default.
// Using undefined forces a check for provider existence.
export const DropdownContext = createContext<DropdownContextProps<any> | undefined>(undefined);

export function useDropdownContext<Item extends BaseListItemData<Record<string, unknown>>>() {
  const context = useContext(DropdownContext) as DropdownContextProps<Item>; // Cast here for specific Item type
  if (context === undefined) {
    throw new Error("useDropdownContext must be used within a DropdownProvider");
  }
  return context;
}

// The DropdownProvider component itself will be implemented in the main Dropdown component
// or in the mode-specific wrapper components that instantiate the Downshift hooks.
