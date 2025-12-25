import type React from "react";
import { createContext, useContext } from "react";
import { type DropdownListGroup } from "../components/DropdownBaseList/DropdownBaseList.types";
import { type BaseListItemData } from "../../../BaseListItem";
import { type BaseDropdownProps, type DropdownSizes } from "../Dropdown.types";
import { type DropdownContextProps } from "./DropdownContext.types";

type PropGetter = (options?: any) => Record<string, any>;
type ItemPropGetter<Item> = (options: { item: Item; index: number }) => Record<string, any>;

export interface DropdownContextValue<Item extends BaseListItemData<Record<string, unknown>> = any> {
  isOpen: boolean;
  inputValue: string | null;
  highlightedIndex: number | null;
  selectedItem: Item | null | undefined;
  selectedItems: Item[];
  filteredOptions: DropdownListGroup<Item>[];

  getToggleButtonProps: PropGetter;
  getLabelProps: PropGetter;
  getMenuProps: PropGetter;
  getInputProps: PropGetter;
  getItemProps: ItemPropGetter<Item>;
  getDropdownProps?: PropGetter;

  reset: () => void;
  toggleMenu: () => void;
  onClear?: () => void;
  onOptionSelect?: (option: Item) => void;
  onOptionRemove?: (option: Item) => void;
  addSelectedItem?: (item: Item) => void;
  removeSelectedItem?: (item: Item) => void;
  setSelectedItems?: (items: Item[]) => void;

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
  isFocused?: boolean;
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
  const context = useContext(DropdownContext) as DropdownContextProps<Item>;
  if (context === undefined) {
    throw new Error("useDropdownContext must be used within a DropdownProvider");
  }
  return context;
}
