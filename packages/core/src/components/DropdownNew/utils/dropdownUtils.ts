import { BaseListItemData } from "../../BaseListItem";
import { ListGroup } from "../../BaseList";

export function normalizeOptions<Item extends BaseListItemData>(
  options: ListGroup<Item>[] | BaseListItemData<Item>[],
  filter?: string
): ListGroup<Item>[] {
  let indexCounter = 0;
  return Array.isArray(options) && options.some(item => "options" in item)
    ? (options as ListGroup<Item>[]).flatMap(group => {
        const filteredOptions = group.options
          .filter(item => !filter || item.label.toLowerCase().includes(filter.toLowerCase()))
          .map(item => ({ ...item, index: indexCounter++ }));

        return filteredOptions.length > 0 ? [{ ...group, options: filteredOptions }] : [];
      })
    : [
        {
          label: undefined,
          options: (options as BaseListItemData<Item>[])
            .filter(item => !filter || item.label.toLowerCase().includes(filter.toLowerCase()))
            .map(item => ({ ...item, index: indexCounter++ }))
        }
      ];
}
