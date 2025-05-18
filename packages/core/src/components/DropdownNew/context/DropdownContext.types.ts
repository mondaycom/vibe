import { ListGroup } from "../../BaseList";
import { BaseListItemData } from "../../BaseListItem";
import { BaseDropdownProps } from "../Dropdown.types"; // DropdownSizes will come via BaseDropdownProps pick or BaseDropdownProps itself

// Helper types for Downshift prop getters
type PropGetter = (options?: any) => Record<string, any>;
type ItemPropGetter<Item> = (options: { item: Item; index: number }) => Record<string, any>;

// Select a subset of BaseDropdownProps that the context might provide
// Making them Partial as the context provider decides which of these to actually pass
// These are props that primarily affect visuals or pass-through behaviors that sub-components might need.
// Critical props like `options`, `defaultValue`, core `onChange` handlers are typically managed by the
// main component that sets up the Downshift hook and provides the context, not passed through context again.
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
  reset: () => void; // Downshift's reset function
  // Callback to clear the current selection
  contextOnClear: () => void;
  // Callback to remove a selected option (primarily for multi-select)
  contextOnOptionRemove?: (option: Item) => void;

  // Direct access to selection modifiers (primarily for multi-select from useMultipleSelection)
  // These might be needed if sub-components need to directly manipulate the selection state.
  addSelectedItem?: (item: Item) => void;
  removeSelectedItem?: (item: Item) => void;
  // setSelectedItems?: (items: Item[]) => void; // Usually Downshift handles this via add/remove

  // Additional state managed or exposed by context
  isFocused?: boolean; // If styling or behavior depends on overall dropdown focus state
}

// If we define a standalone Provider component in DropdownContext.ts later:
// export interface DropdownProviderProps<Item extends BaseListItemData<Record<string, unknown>>> {
//   value: DropdownContextProps<Item>;
//   children: React.ReactNode;
// }
