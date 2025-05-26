import { ListGroup } from "../../BaseList";
import { BaseListItemData } from "../../BaseListItem";
import { BaseDropdownProps } from "../Dropdown.types";
import { TooltipProps } from "../../Tooltip/Tooltip";

type PropGetter = (options?: any) => Record<string, any>;
type ItemPropGetter<Item> = (options: { item: Item; index: number }) => Record<string, any>;

type InheritedDropdownProps<Item extends BaseListItemData<Record<string, unknown>>> = Partial<
  Pick<
    BaseDropdownProps<Item>,
    | "label"
    | "required"
    | "className"
    | "id"
    | "ariaLabel"
    | "data-testid"
    | "error"
    | "helperText"
    | "dir"
    | "searchable"
    | "multi"
    | "multiline"
    | "disabled"
    | "readOnly"
    | "size"
    | "optionRenderer"
    | "valueRenderer"
    | "menuRenderer"
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
    | "onFocus"
    | "onBlur"
    | "onKeyDown"
    | "onScroll"
    | "onClear"
  >
>;

export interface DropdownContextProps<Item extends BaseListItemData<Record<string, unknown>> = any>
  extends InheritedDropdownProps<Item> {
  isOpen: boolean;
  inputValue: string | null;
  highlightedIndex: number | null;
  selectedItem?: Item | null | undefined;
  selectedItems?: Item[];
  filteredOptions?: ListGroup<Item>[];
  tooltipProps?: Partial<TooltipProps>;

  getToggleButtonProps: PropGetter;
  getLabelProps: PropGetter;
  getMenuProps: PropGetter;
  getInputProps?: PropGetter;
  getItemProps: ItemPropGetter<Item>;
  getDropdownProps?: PropGetter;

  reset: () => void;
  contextOnClear: () => void;
  contextOnOptionRemove?: (option: Item) => void;

  addSelectedItem?: (item: Item) => void;
  removeSelectedItem?: (item: Item) => void;
  isFocused?: boolean;
}
