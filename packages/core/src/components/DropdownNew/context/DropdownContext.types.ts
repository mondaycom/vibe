import { ListGroup } from "../../BaseList";
import { BaseListItemData } from "../../BaseListItem";
import { BaseDropdownProps } from "../Dropdown.types"; // DropdownSizes will come via BaseDropdownProps pick or BaseDropdownProps itself

type PropGetter = (options?: any) => Record<string, any>;
type ItemPropGetter<Item> = (options: { item: Item; index: number }) => Record<string, any>;

type InheritedDropdownProps<Item extends BaseListItemData<Record<string, unknown>>> = Partial<
  Pick<
    BaseDropdownProps<Item>,
    | "searchable"
    | "multi"
    | "multiline"
    | "disabled"
    | "readOnly"
    | "size"
    | "optionRenderer"
    | "valueRenderer"
    | "noOptionsMessage"
    | "placeholder"
    | "withGroupDivider"
    | "stickyGroupTitle"
    | "maxMenuHeight"
    | "clearable"
    | "autoFocus"
    | "inputAriaLabel"
    | "menuAriaLabel"
    | "closeMenuOnSelect"
    | "dir"
    | "onFocus"
    | "onBlur"
    | "onKeyDown"
    | "onScroll"
    | "onClear"
  >
>;

export interface DropdownContextProps<Item extends BaseListItemData<Record<string, unknown>> = any>
  extends InheritedDropdownProps<Item> {
  // === State & Values unique to context (from Downshift hooks) ===
  isOpen: boolean;
  inputValue: string | null; // Null for select-only modes
  highlightedIndex: number | null;
  selectedItem: Item | null | undefined; // For single select
  selectedItems: Item[]; // For multi select, always an array
  filteredOptions: ListGroup<Item>[]; // Derived list of options for the menu

  // === Prop Getters from Downshift ===
  getToggleButtonProps: PropGetter;
  getLabelProps: PropGetter;
  getMenuProps: PropGetter;
  getInputProps: PropGetter;
  getItemProps: ItemPropGetter<Item>;

  // === Callbacks unique to context (from Downshift or context-specific handlers) ===
  reset: () => void;
  contextOnClear: () => void;
  contextOnOptionRemove?: (option: Item) => void;

  addSelectedItem?: (item: Item) => void;
  removeSelectedItem?: (item: Item) => void;
  isFocused?: boolean;
}
