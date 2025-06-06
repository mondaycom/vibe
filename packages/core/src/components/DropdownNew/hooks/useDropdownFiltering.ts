import { useState, useEffect } from "react";
import { normalizeOptions } from "../utils/dropdownUtils";
import { BaseListItemData } from "../../BaseListItem";
import { ListGroup } from "../../BaseList";
import { DropdownGroupOption } from "../Dropdown.types";

function useDropdownFiltering<Item extends BaseListItemData>(
  options: DropdownGroupOption<Item>,
  filterOption?: (option: Item, inputValue: string) => boolean,
  showSelectedOptions?: boolean,
  selectedItems?: Item[]
) {
  const [filteredOptions, setFilteredOptions] = useState<ListGroup<Item>[]>(() =>
    normalizeOptions(options, undefined, undefined, showSelectedOptions, selectedItems)
  );
  const [filterValue, setFilterValue] = useState<string>("");

  useEffect(() => {
    setFilteredOptions(normalizeOptions(options, filterValue, filterOption, showSelectedOptions, selectedItems));
  }, [options, filterValue, filterOption, showSelectedOptions, selectedItems]);

  const filterOptions = (inputValue: string) => {
    setFilterValue(inputValue);
  };

  return { filteredOptions, filterOptions, setFilteredOptions };
}

export default useDropdownFiltering;
