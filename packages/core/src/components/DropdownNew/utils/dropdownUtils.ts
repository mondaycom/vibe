import { BaseListItemData } from "../../BaseListItem";
import { ListGroup } from "../../BaseList";

export function normalizeOptions<Item extends BaseListItemData>(
  options: ListGroup<Item>[] | BaseListItemData<Item>[],
  filter?: string,
  filterOption?: (option: Item, inputValue: string) => boolean,
  showSelectedOptions = true,
  selectedItems: Item[] = []
): ListGroup<Item>[] {
  let indexCounter = 0;
  const defaultFilterFn = (item: Item, inputValue: string) =>
    !inputValue || item.label.toLowerCase().includes(inputValue.toLowerCase());
  const currentFilterFn = filterOption || defaultFilterFn;

  const isItemSelected = (item: Item) => selectedItems.some(selected => selected.value === item.value);

  return Array.isArray(options) && options.some(item => "options" in item)
    ? (options as ListGroup<Item>[]).flatMap(group => {
        const filteredGroupOptions = group.options
          .filter(item => {
            const matchesFilter = currentFilterFn(item, filter || "");
            if (!showSelectedOptions && isItemSelected(item)) {
              return false;
            }
            return matchesFilter;
          })
          .map(item => ({ ...item, index: indexCounter++ }));

        return filteredGroupOptions.length > 0 ? [{ ...group, options: filteredGroupOptions }] : [];
      })
    : [
        {
          label: undefined,
          options: (options as BaseListItemData<Item>[])
            .filter(item => {
              const matchesFilter = currentFilterFn(item, filter || "");
              if (!showSelectedOptions && isItemSelected(item)) {
                return false;
              }
              return matchesFilter;
            })
            .map(item => ({ ...item, index: indexCounter++ }))
        }
      ];
}
