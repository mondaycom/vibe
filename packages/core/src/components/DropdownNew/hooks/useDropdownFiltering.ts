import { useState, useEffect } from "react";
import { normalizeOptions } from "../utils/dropdownUtils";
import { BaseListItemData } from "../../BaseListItem";
import { ListGroup } from "../../BaseList";
import { DropdownGroupOption } from "../Dropdown.types";

function useDropdownFiltering<T extends BaseListItemData>(options: DropdownGroupOption<T>) {
  const [filteredOptions, setFilteredOptions] = useState<ListGroup<T>[]>(() => normalizeOptions(options));
  const [filterValue, setFilterValue] = useState<string>("");

  useEffect(() => {
    setFilteredOptions(normalizeOptions(options, filterValue));
  }, [options, filterValue]);

  const filterOptions = (inputValue: string) => {
    setFilterValue(inputValue);
  };

  return { filteredOptions, filterOptions, setFilteredOptions };
}

export default useDropdownFiltering;
