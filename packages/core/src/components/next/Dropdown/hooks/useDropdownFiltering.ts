import { useState, useEffect } from "react";
import { normalizeOptions } from "../utils/dropdownUtils";
import { type BaseItemData } from "../../../BaseItem";
import { type DropdownListGroup } from "../components/DropdownBaseList/DropdownBaseList.types";
import { type DropdownGroupOption } from "../Dropdown.types";

function useDropdownFiltering<Item extends BaseItemData>(
  options: DropdownGroupOption<Item>,
  filterOption?: (option: Item, inputValue: string) => boolean,
  showSelectedOptions?: boolean,
  selectedItems?: Item[]
) {
  const [filteredOptions, setFilteredOptions] = useState<DropdownListGroup<Item>[]>(() =>
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
