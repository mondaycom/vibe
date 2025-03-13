import { useState, useEffect } from "react";
import { normalizeOptions } from "../utils/dropdownUtils";
import { BaseListItemProps } from "../../BaseListItem";
import { ListGroup } from "../../BaseList";

function useDropdownFiltering<T extends BaseListItemProps>(options: ListGroup<T>[] | T[]) {
  const [filteredOptions, setFilteredOptions] = useState<ListGroup<T>[]>(() => normalizeOptions(options));

  useEffect(() => {
    setFilteredOptions(normalizeOptions(options));
  }, [options]);

  const filterOptions = (inputValue: string) => {
    if (!inputValue) {
      setFilteredOptions(normalizeOptions(options));
      return;
    }

    const lowerCasedInput = inputValue.toLowerCase();
    setFilteredOptions(
      normalizeOptions(
        options
          .map(group =>
            "options" in group
              ? {
                  ...group,
                  options: (group.options as T[]).filter(option => option.label.toLowerCase().includes(lowerCasedInput))
                }
              : group.label.toLowerCase().includes(lowerCasedInput)
              ? group
              : null
          )
          .filter(Boolean) as ListGroup<T>[]
      )
    );
  };

  return { filteredOptions, filterOptions, setFilteredOptions };
}

export default useDropdownFiltering;
