import { BaseListItemData } from "../../BaseListItem";
import { ListGroup } from "../../BaseList";

export function normalizeOptions<Item extends BaseListItemData>(
  options: ListGroup<Item>[] | BaseListItemData<Item>[],
  filter?: string,
  filterOption?: (option: Item, inputValue: string) => boolean
): ListGroup<Item>[] {
  let indexCounter = 0;
  const defaultFilterFn = (item: Item, inputValue: string) =>
    !inputValue || item.label.toLowerCase().includes(inputValue.toLowerCase());
  const currentFilterFn = filterOption || defaultFilterFn;

  return Array.isArray(options) && options.some(item => "options" in item)
    ? (options as ListGroup<Item>[]).flatMap(group => {
        const filteredOptions = group.options
          .filter(item => currentFilterFn(item, filter || ""))
          .map(item => ({ ...item, index: indexCounter++ }));

        return filteredOptions.length > 0 ? [{ ...group, options: filteredOptions }] : [];
      })
    : [
        {
          label: undefined,
          options: (options as BaseListItemData<Item>[])
            .filter(item => currentFilterFn(item, filter || ""))
            .map(item => ({ ...item, index: indexCounter++ }))
        }
      ];
}
